import * as THREE from './vendor/three.module.min.js';

const WINGLESS = new Set([84, 85, 130, 187, 188, 189, 226, 384, 425, 426, 458, 641, 642, 645, 774, 797, 905]);
const OTHER_WINGED = new Set([6, 15, 49, 123, 165, 166, 212, 251, 267, 269, 291, 313, 314, 329, 330, 380, 381, 414, 487, 637, 738, 743, 873]);
const BUTTERFLY = new Set([12, 49, 267, 269, 414, 637, 666, 743, 873]);
const FEELER_WINGS = {
  6: /^feeler[12]$/, 12: /^feeler[ab][12]$/, 15: /^feeler[ab]$/, 49: /^feeler[ab][12]$/,
  123: /^feeler[ab]$/, 145: /^(?:shoulder|feeler[abcde]\d?)$/, 193: /^feeler[ab]$/,
  212: /^feeler(?:[ab])?$/, 251: /^feeler$/, 267: /^feeler(?:[ab][12])?$/,
  291: /^feeler[bcde]$/, 380: /^feeler[12]$/, 381: /^feeler[12]$/,
  415: /^feeler$/, 416: /^feeler(?:[ab])?$/, 469: /^feeler[de]$/,
  472: /^feeler[12]$/, 487: /^feelera[123]$/, 666: /^feeler[bc][12]$/, 738: /^feeler[cde]$/,
};

export function hasFlightWings(species) {
  return !WINGLESS.has(species.id) && (species.types?.includes(3) || OTHER_WINGED.has(species.id));
}

function boneName(name) {
  return name.replace(/^\d+[ _]+/, '').replace(/^(?:ValveBiped\.?Bip01_|bip_)/i, '')
    .replace(/_\d+$/, '').replace(/^left_/i, 'L').replace(/^right_/i, 'R').replace(/_/g, '').toLowerCase();
}
const armName = name => /^[lr](?:upperarm|arm(?:0?[12])?|forearm[12]?|hand[12a]?)$/.test(name);
const wingName = name => /^[lr](?:root)?wing/.test(name) && !/end|skin|mesh|close/.test(name);

export function prepareWings(model, species, canFly) {
  const wings = [], bones = [];
  const rate = species.id === 249 ? 2.5 : species.id === 6 ? 3.8 : species.types?.includes(7) ? 9 : 5.5 / Math.max(1, (species.heightM || 1) ** 0.25);
  const amplitude = canFly ? (species.types?.includes(7) ? 0.56 : 0.48) : 0.2;
  model.traverse(o => { if (o.isBone) bones.push(o); });
  if (!hasFlightWings(species) && !bones.some(b => /^[LR]Wing/.test(b.name))) return { wings, surfaces: [], rate };
  const names = new Map(bones.map(b => [b, boneName(b.name)]));
  const independentWings = bones.some(b => {
    if (!wingName(names.get(b))) return false;
    for (let p = b.parent; p; p = p.parent) if (armName(names.get(p) || '')) return false;
    return true;
  });
  const armWings = species.id === 973 || (species.id === 628 && species.form === 'hisui')
    || ([380, 381].includes(species.id) && species.form === 'mega');
  let feeler = FEELER_WINGS[species.id];
  if (species.id === 6 && species.form === 'gmax') feeler = /^feelerc[12]$/;
  if (species.form === 'mega' && [15, 212, 380, 381].includes(species.id)) feeler = species.id === 15 ? /^feeler[abc]$/ : null;
  if (species.id === 145 && species.form === 'galar') feeler = null;
  for (const bone of bones) {
    const name = names.get(bone), part = name.slice(1);
    let selected = false, side = name[0] === 'l' ? 1 : -1;
    if (species.id === 41) {
      selected = /^bone00[1267]$/.test(name);
      side = /^bone00[12]$/.test(name) ? 1 : -1;
    } else if (feeler) selected = /^[lr]/.test(name) && feeler.test(part);
    else selected = wingName(name) || ((!independentWings || armWings) && armName(name));
    if (species.id === 373 && species.form === 'mega') selected = false;
    if (!selected) continue;
    const axis = new THREE.Vector3(0, BUTTERFLY.has(species.id) ? 1 : 0, BUTTERFLY.has(species.id) ? 0 : 1)
      .applyQuaternion(bone.getWorldQuaternion(new THREE.Quaternion()).invert());
    wings.push({ bone, rest: bone.quaternion.clone(), axis, side, amplitude, depth: 0, distal: false });
  }
  const selected = new Set(wings.map(w => w.bone));
  for (const record of wings) {
    for (let p = record.bone.parent; p; p = p.parent) if (selected.has(p)) record.depth++;
    record.distal = record.depth > 0;
  }
  return { wings, surfaces: wings.length ? [] : prepareWingSurfaces(model, species), rate };
}

// Normalized regions isolate wings on the pinned, unrigged exports. The body,
// eyes and legs are excluded; small blends at the roots keep the skin continuous.
const REGIONS = {
  42: [.1, .25, 1, -.5, .5, .57], 169: [.11, 0, 1, -.5, .5, .38],
  165: [.17, .18, .8, -.5, -.06, .52], 166: [.18, .25, .68, -.5, -.08, .52],
  176: [.08, .28, .74, -.5, -.12, .48], 177: [.32, .2, .57, -.5, .25, .45],
  178: [.29, .1, .64, -.5, .32, .57], 198: [.23, .24, .57, -.5, .28, .5],
  207: [.14, .46, .77, -.5, -.06, .65], 227: [.12, .38, .89, -.5, .5, .6],
  284: [.12, 0, .25, -.5, .5, .17], 313: [.12, .28, .61, -.5, -.08, .5],
  314: [.12, .25, .55, -.5, -.08, .46], 329: [.13, 0, 1, -.5, .5, .57],
  333: [.17, 0, 1, -.5, .5, .38], 357: [.03, 0, 1, -.5, .5, .27],
  373: [.06, 0, 1, -.5, .5, .45], 468: [.17, 0, 1, -.5, .5, .44],
  527: [.23, .33, .83, -.5, .5, .57], 528: [.13, .3, 1, -.5, .5, .46],
  561: [.12, .63, 1, -.5, .5, .65], 627: [.12, .2, .55, -.5, .5, .39],
  629: [.26, .37, .63, -.5, .5, .53], 637: [.11, .14, 1, -.5, .3, .52],
  722: [.3, .17, .7, -.5, .26, .53],
};

function separateWingIndices(mesh, rest, bounds, size, species) {
  if (![176, 178, 333, 357, 373].includes(species.id) || species.form === 'mega') return null;
  const parent = Array.from({ length: rest.count }, (_, i) => i), positions = new Map();
  const find = i => { while (parent[i] !== i) { parent[i] = parent[parent[i]]; i = parent[i]; } return i; };
  const join = (a, b) => { parent[find(a)] = find(b); };
  // Weld UV seams for connectivity without changing the rendered geometry.
  for (let i = 0; i < rest.count; i++) {
    const key = [rest.getX(i) / size.x, rest.getY(i) / size.y, rest.getZ(i) / size.z].map(n => Math.round(n * 100000)).join(',');
    if (positions.has(key)) join(i, positions.get(key)); else positions.set(key, i);
  }
  const index = mesh.geometry.index;
  for (let i = 0; i < (index?.count || rest.count); i += 3) {
    const a = index ? index.getX(i) : i;
    join(a, index ? index.getX(i + 1) : i + 1); join(a, index ? index.getX(i + 2) : i + 2);
  }
  const groups = new Map(), point = new THREE.Vector3(), center = bounds.getCenter(new THREE.Vector3());
  for (let i = 0; i < rest.count; i++) {
    const root = find(i);
    if (!groups.has(root)) groups.set(root, { indices: [], box: new THREE.Box3() });
    const group = groups.get(root); group.indices.push(i); group.box.expandByPoint(point.fromBufferAttribute(rest, i));
  }
  const selected = new Set();
  for (const group of groups.values()) {
    const c = group.box.getCenter(new THREE.Vector3()).sub(center).divide(size);
    const s = group.box.getSize(new THREE.Vector3()).divide(size);
    const wing = species.id === 176 ? Math.abs(c.x) > .18 && c.z < -.16
      : species.id === 178 ? Math.abs(c.x) > .15 && s.y > .4 && s.y < .65
        : species.id === 333 ? s.x > .3 && s.y > .52
          : species.id === 373 ? Math.abs(c.x) > .2 && s.y > .4
          : (s.x < .1 && s.y > .6) || (Math.abs(c.x) > .12 && s.z > .5 && s.y < .2);
    if (wing) group.indices.forEach(i => selected.add(i));
  }
  return selected;
}

function prepareWingSurfaces(model, species) {
  const meshes = [], bounds = new THREE.Box3();
  model.traverseVisible(o => {
    if (!o.isMesh) return;
    o.skeleton?.update();
    bounds.union(new THREE.Box3().setFromObject(o, true));
    if (!/eye|mouth/i.test(o.material?.name || '')) meshes.push(o);
  });
  const size = bounds.getSize(new THREE.Vector3()), center = bounds.getCenter(new THREE.Vector3());
  const megaX = species.id === 6 && species.form === 'mega-x';
  const region = megaX ? [.11, 0, 1, -.5, .5, .65]
    : species.id === 373 && species.form === 'mega' ? [.14, 0, 1, -.5, .5, .65]
      : REGIONS[species.id] || [.16, 0, 1, -.5, .5, .58];
  const [hinge, low, high, back, front, hingeY] = region;
  const surfaces = [];
  for (const mesh of meshes) {
    if (megaX && !/^CHARIZARD_UVlambert[34]SG$/.test(mesh.material?.name)) continue;
    if (species.id === 177 && !/^wing_/i.test(mesh.name)) continue;
    if (species.id === 743 && mesh.material?.name !== 'Material.026') continue;
    if (species.id === 373 && species.form === 'mega' && !/_0_0_node$/.test(mesh.name)) continue;
    const rest = mesh.geometry.attributes.position.clone();
    const posedMatrix = new THREE.Matrix4(), point = new THREE.Vector3();
    for (let i = 0; i < rest.count; i++) {
      vertexWorldMatrix(mesh, i, posedMatrix);
      point.fromBufferAttribute(rest, i).applyMatrix4(posedMatrix);
      rest.setXYZ(i, point.x, point.y, point.z);
    }
    const separated = separateWingIndices(mesh, rest, bounds, size, species);
    const weights = new Float32Array(rest.count), indices = [];
    for (let i = 0; i < rest.count; i++) {
      const x = (rest.getX(i) - center.x) / size.x, y = (rest.getY(i) - bounds.min.y) / size.y, z = (rest.getZ(i) - center.z) / size.z;
      if (separated && !separated.has(i)) continue;
      const blend = species.id === 722 ? .15 : .04;
      const w = THREE.MathUtils.smoothstep(Math.abs(x), hinge, hinge + (species.id === 357 ? .045 : .09))
        * (separated || low <= 0 ? 1 : THREE.MathUtils.smoothstep(y, low - blend, low + blend))
        * (separated || high >= 1 ? 1 : 1 - THREE.MathUtils.smoothstep(y, high - blend, high + blend))
        * (separated || back <= -.5 ? 1 : THREE.MathUtils.smoothstep(z, back - blend, back + blend))
        * (separated || front >= .5 ? 1 : 1 - THREE.MathUtils.smoothstep(z, front - blend, front + blend));
      if (w < .001) continue;
      weights[i] = w; indices.push(i);
    }
    if (!indices.length) continue;
    const geometry = mesh.geometry = mesh.geometry.clone();
    mesh.userData.gardenOwnedGeometry = true; mesh.frustumCulled = false;
    const toLocal = mesh.matrixWorld.clone().invert();
    const normals = geometry.attributes.normal?.clone(), vertexToLocal = mesh.isSkinnedMesh ? [] : null;
    const vertexNormalToLocal = mesh.isSkinnedMesh && normals ? [] : null;
    for (const i of indices) {
      vertexWorldMatrix(mesh, i, posedMatrix);
      if (normals) {
        point.fromBufferAttribute(normals, i).applyNormalMatrix(new THREE.Matrix3().getNormalMatrix(posedMatrix));
        normals.setXYZ(i, point.x, point.y, point.z);
      }
      if (vertexToLocal) {
        vertexToLocal[i] = posedMatrix.clone().invert();
        if (normals) vertexNormalToLocal[i] = new THREE.Matrix3().getNormalMatrix(vertexToLocal[i]);
      }
    }
    surfaces.push({ geometry, rest, weights, indices, toLocal, center, hinge: size.x * hinge,
      hingeY: bounds.min.y + size.y * hingeY, hingeZ: center.z,
      normals, vertexToLocal, vertexNormalToLocal,
      normalToLocal: new THREE.Matrix3().getNormalMatrix(toLocal), butterfly: BUTTERFLY.has(species.id), amplitude: species.id === 722 ? .28 : .48 });
  }
  return surfaces;
}

const skinBone = new THREE.Matrix4();
function vertexWorldMatrix(mesh, index, target) {
  if (!mesh.isSkinnedMesh) return target.copy(mesh.matrixWorld);
  const { skinIndex, skinWeight } = mesh.geometry.attributes;
  target.elements.fill(0);
  // Deform in the visible bind pose, then undo skinning before writing vertices.
  // Raw GLB vertex axes need not match the rendered character's axes.
  for (let joint = 0; joint < 4; joint++) {
    const weight = skinWeight.getComponent(index, joint);
    if (!weight) continue;
    skinBone.fromArray(mesh.skeleton.boneMatrices, skinIndex.getComponent(index, joint) * 16);
    for (let j = 0; j < 16; j++) target.elements[j] += skinBone.elements[j] * weight;
  }
  return target.multiply(mesh.bindMatrix).premultiply(mesh.bindMatrixInverse).premultiply(mesh.matrixWorld);
}

const delta = new THREE.Quaternion(), vertex = new THREE.Vector3(), normal = new THREE.Vector3();
export function animateWings(rig, time, phase) {
  const beat = time * rig.wingRate + phase;
  for (const record of rig.wings) {
    const depth = record.depth || 0;
    const wave = Math.sin(beat - depth * .5);
    const strength = depth ? record.amplitude * .24 / depth : record.amplitude;
    delta.setFromAxisAngle(record.axis, wave * strength * record.side);
    record.bone.quaternion.copy(record.rest).multiply(delta);
  }
  for (const wing of rig.surfaces) {
    const position = wing.geometry.attributes.position, normals = wing.geometry.attributes.normal;
    const beatAngle = Math.sin(beat) * wing.amplitude;
    for (const i of wing.indices) {
      vertex.fromBufferAttribute(wing.rest, i);
      const side = Math.sign(vertex.x - wing.center.x), angle = beatAngle * side * wing.weights[i];
      const c = Math.cos(angle), s = Math.sin(angle), dx = vertex.x - wing.center.x - side * wing.hinge;
      const axisValue = wing.butterfly ? vertex.z - wing.hingeZ : vertex.y - wing.hingeY;
      vertex.x = wing.center.x + side * wing.hinge + c * dx - s * axisValue;
      if (wing.butterfly) vertex.z = wing.hingeZ + s * dx + c * axisValue;
      else vertex.y = wing.hingeY + s * dx + c * axisValue;
      vertex.applyMatrix4(wing.vertexToLocal?.[i] || wing.toLocal); position.setXYZ(i, vertex.x, vertex.y, vertex.z);
      if (wing.normals && normals) {
        normal.fromBufferAttribute(wing.normals, i);
        const nx = normal.x, ny = wing.butterfly ? normal.z : normal.y;
        normal.x = c * nx - s * ny;
        if (wing.butterfly) normal.z = s * nx + c * ny; else normal.y = s * nx + c * ny;
        normal.applyNormalMatrix(wing.vertexNormalToLocal?.[i] || wing.normalToLocal); normals.setXYZ(i, normal.x, normal.y, normal.z);
      }
    }
    position.needsUpdate = true; if (normals) normals.needsUpdate = true;
  }
}
