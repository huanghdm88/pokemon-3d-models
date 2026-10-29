import * as THREE from './vendor/three.module.min.js';

export function softPartKind(object) {
  const name = object.name.replace(/^\d+\s+/, '');
  if (/end|glow|root|weapon/i.test(name)) return '';
  if (/tail/i.test(name)) return 'tail';
  if (/ribbon|feeler|tentacle|whisker|antenna|skirt|veil|kelp/i.test(name)) return 'ribbon';
  if (/hair|tuft|mane|leaf|petal/i.test(name)) return 'hair';
  if (/(?:^|left_|right_|[LR])ear/i.test(name)) return 'ear';
  return '';
}

export function prepareSoftMotion(model, excluded = new Set()) {
  const records = [], byBone = new Map();
  model.traverse(object => {
    if (!object.isBone || excluded.has(object)) return;
    const kind = object.userData.gardenSoftMotion || softPartKind(object);
    if (!kind) return;
    let parentRecord = null;
    for (let parent = object.parent; parent; parent = parent.parent) {
      if (byBone.has(parent)) { parentRecord = byBone.get(parent); break; }
    }
    const child = object.children.find(child => child.isBone && child.position.lengthSq() > 0.000001);
    const tangent = child?.position.clone().normalize() || new THREE.Vector3(0, 1, 0);
    const axis = new THREE.Vector3().crossVectors(tangent, Math.abs(tangent.y) < 0.8 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(0, 0, 1)).normalize();
    const record = { bone: object, base: object.quaternion.clone(), applied: false, kind,
      axis, secondary: new THREE.Vector3().crossVectors(tangent, axis).normalize(),
      depth: parentRecord ? parentRecord.depth + 1 : 0, branch: parentRecord?.branch ?? records.length };
    records.push(record); byBone.set(object, record);
  });
  return records;
}

export function restoreSoftMotion(records) {
  for (const record of records || []) if (record.applied) {
    record.bone.quaternion.copy(record.base); record.applied = false;
  }
}

const delta = new THREE.Quaternion(), secondary = new THREE.Quaternion();
export function animateSoftMotion(records, time, phase, moving) {
  // Restore the last offset before sampling the mixer, then add secondary motion
  // to the current pose. This avoids drift and preserves sitting/idle animation.
  restoreSoftMotion(records);
  for (const record of records || []) {
    record.base.copy(record.bone.quaternion);
    const amplitude = { tail: 0.13, ribbon: 0.11, hair: 0.095, ear: 0.055 }[record.kind] || 0.08;
    const strength = amplitude * (moving ? 1.18 : 0.8) / (1 + record.depth * 0.12);
    const wave = time * 1.9 + phase + record.branch * 1.31 - record.depth * 0.62;
    delta.setFromAxisAngle(record.axis, Math.sin(wave) * strength);
    secondary.setFromAxisAngle(record.secondary, Math.cos(wave * 0.79) * strength * 0.55);
    record.bone.quaternion.multiply(delta).multiply(secondary);
    record.applied = true;
  }
}

// Unskinned procedural appendages get a root-anchored bend, not a body-wide wobble.
export function prepareSoftSurfaces(model) {
  const surfaces = [];
  model.traverse(mesh => {
    if (!mesh.isMesh || mesh.isSkinnedMesh || (!mesh.userData.gardenSoftSurface && !softPartKind(mesh))) return;
    const geometry = mesh.geometry = mesh.geometry.clone();
    mesh.userData.gardenOwnedGeometry = true;
    geometry.computeBoundingBox();
    const size = geometry.boundingBox.getSize(new THREE.Vector3());
    const axis = size.x > size.y && size.x > size.z ? 0 : size.y > size.z ? 1 : 2;
    const base = new Float32Array(geometry.attributes.position.array);
    const min = geometry.boundingBox.min.getComponent(axis), length = size.getComponent(axis) || 1;
    surfaces.push({ geometry, base, axis, min, length });
    mesh.frustumCulled = false;
  });
  return surfaces;
}

export function animateSoftSurfaces(surfaces, time, phase) {
  for (const [index, surface] of (surfaces || []).entries()) {
    const { geometry, base, axis, min, length } = surface;
    const positions = geometry.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const weight = (base[i * 3 + axis] - min) / length;
      for (let c = 0; c < 3; c++) positions.array[i * 3 + c] = base[i * 3 + c];
      positions.array[i * 3 + (axis + 1) % 3] += Math.sin(time * 1.7 + phase + index - weight * 1.8) * weight * weight * length * 0.065;
    }
    positions.needsUpdate = true;
    geometry.computeVertexNormals();
  }
}

export function prepareUnriggedTail(model, species) {
  // This pinned Mega X export is a static mesh. Its tail and flame share the
  // body materials, so isolate the rear region and leave wings/feet untouched.
  if (species.id !== 6 || species.form !== 'mega-x') return [];
  const bounds = new THREE.Box3().setFromObject(model, true), size = bounds.getSize(new THREE.Vector3());
  const rootZ = bounds.max.z - size.z * 0.54;
  const records = [], point = new THREE.Vector3();
  model.traverseVisible(mesh => {
    if (!mesh.isMesh || mesh.isSkinnedMesh || !/^CHARIZARD_UVlambert[15]SG$/.test(mesh.material?.name)) return;
    const rest = mesh.geometry.attributes.position.clone(), indices = [], weights = [], world = [];
    for (let i = 0; i < rest.count; i++) {
      point.fromBufferAttribute(rest, i).applyMatrix4(mesh.matrixWorld);
      const weight = THREE.MathUtils.smoothstep(rootZ - point.z, 0, rootZ - bounds.min.z);
      if (weight <= 0) continue;
      indices.push(i); weights.push(weight); world.push(point.clone());
    }
    if (!indices.length) return;
    const geometry = mesh.geometry = mesh.geometry.clone();
    mesh.userData.gardenOwnedGeometry = true; mesh.frustumCulled = false;
    records.push({ geometry, indices, weights, world, inverse: mesh.matrixWorld.clone().invert(), length: size.z });
  });
  return records;
}

const tailPoint = new THREE.Vector3();
export function animateUnriggedTail(records, time, phase) {
  for (const record of records || []) {
    const position = record.geometry.attributes.position;
    record.indices.forEach((index, i) => {
      const weight = record.weights[i], wave = time * 1.8 + phase - weight * 1.5;
      tailPoint.copy(record.world[i]);
      tailPoint.x += Math.sin(wave) * weight * record.length * 0.065;
      tailPoint.y += Math.cos(wave * 0.8) * weight * record.length * 0.02;
      tailPoint.applyMatrix4(record.inverse);
      position.setXYZ(index, tailPoint.x, tailPoint.y, tailPoint.z);
    });
    position.needsUpdate = true;
  }
}
