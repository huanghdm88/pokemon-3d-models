import * as THREE from './vendor/three.module.min.js';

export const needsRelaxedPose = species => species.form === 'mega' && [658, 718].includes(species.id);

export function hideBattleAttachments(model, species) {
  if (!needsRelaxedPose(species)) return;
  const attachmentBones = new Set();
  model.traverse(o => {
    if (o.isBone && /^feeler_a_01_/.test(o.name)) o.traverse(bone => attachmentBones.add(bone));
  });
  // The pinned exports keep weapon meshes beside the skeleton, not below it.
  model.traverse(mesh => {
    const indices = mesh.geometry?.attributes.skinIndex, weights = mesh.geometry?.attributes.skinWeight;
    if (!mesh.isSkinnedMesh || !indices || !weights) return;
    let attachment = 0, total = 0;
    for (let i = 0; i < indices.count; i++) for (let j = 0; j < 4; j++) {
      const weight = weights.getComponent(i, j); total += weight;
      if (attachmentBones.has(mesh.skeleton.bones[indices.getComponent(i, j)])) attachment += weight;
    }
    if (total > 0 && attachment / total > 0.98) {
      mesh.visible = false; mesh.userData.gardenBattleAttachment = true;
    }
  });
}

function aimBone(bone, child, direction) {
  bone.updateWorldMatrix(true, true);
  const from = child.getWorldPosition(new THREE.Vector3()).sub(bone.getWorldPosition(new THREE.Vector3())).normalize();
  const change = new THREE.Quaternion().setFromUnitVectors(from, direction.normalize());
  const world = change.multiply(bone.getWorldQuaternion(new THREE.Quaternion()));
  bone.quaternion.copy(bone.parent.getWorldQuaternion(new THREE.Quaternion()).invert().multiply(world));
  bone.updateWorldMatrix(false, true);
}

export function relaxStandingPose(model, species) {
  if (!needsRelaxedPose(species)) return;
  model.updateMatrixWorld(true);
  for (const side of ['left', 'right']) {
    const sign = side === 'left' ? 1 : -1;
    const find = pattern => { let result; model.traverse(o => { if (o.isBone && pattern.test(o.name)) result = o; }); return result; };
    const arm = find(new RegExp(`^${side}_arm_01_\\d+$`)), elbow = find(new RegExp(`^${side}_arm_02_\\d+$`));
    const hand = find(new RegExp(`^${side}_hand_\\d+$`));
    if (arm && elbow) aimBone(arm, elbow, new THREE.Vector3(sign * 0.28, -1, 0.05));
    if (elbow && hand) aimBone(elbow, hand, new THREE.Vector3(sign * 0.12, -1, 0.28));
    if (species.id === 658) {
      const thigh = find(new RegExp(`^${side}_leg_01_\\d+$`)), knee = find(new RegExp(`^${side}_leg_02_\\d+$`));
      const foot = find(new RegExp(`^${side}_foot_\\d+$`));
      if (thigh && knee) aimBone(thigh, knee, new THREE.Vector3(sign * 0.2, -1, 0.15));
      if (knee && foot) aimBone(knee, foot, new THREE.Vector3(0, -1, -0.1));
    }
  }
}
