import * as THREE from './vendor/three.module.min.js';
import { prepareWings, animateWings } from './garden-wings.js';
import { prepareSoftMotion, restoreSoftMotion, animateSoftMotion, prepareSoftSurfaces, animateSoftSurfaces, prepareUnriggedTail, animateUnriggedTail } from './garden-soft-motion.js';

export const MIN_CHARACTER_SIZE = 0.65;
export const MAX_CHARACTER_SIZE = 2.3;
export const MAX_SERPENTINE_SIZE = 3.6;
const FLOATING_SPECIES = new Set([6, 81, 82, 92, 93, 94, 137, 150, 151, 201, 233, 251, 292, 355, 356,
  374, 375, 376, 385, 386, 429, 436, 437, 462, 474, 477, 478, 479, 480, 481, 482, 487, 488, 491,
  493, 494, 562, 563, 577, 578, 579, 599, 600, 601, 605, 606, 607, 608, 609, 615, 623, 679, 680, 681, 707, 720, 786, 789, 790, 873]);
const AQUATIC_SPECIES = new Set([72, 73, 90, 91, 116, 117, 118, 119, 120, 121, 129, 130, 131,
  170, 171, 211, 223, 224, 226, 230, 318, 319, 320, 321, 339, 340, 349, 350, 366, 367, 368, 369, 370, 382,
  456, 457, 458, 550, 592, 593, 594, 690, 691, 692, 693, 746, 779, 846, 847, 902, 976, 977, 978]);

export function characterProfile(species) {
  const height = Number(species.heightM) || 1;
  const canSwim = AQUATIC_SPECIES.has(species.id) && species.types?.includes(11);
  return {
    targetSize: THREE.MathUtils.clamp(1.15 * height ** 0.7, MIN_CHARACTER_SIZE, species.id === 384 ? MAX_SERPENTINE_SIZE : MAX_CHARACTER_SIZE),
    maxExtent: species.id === 384 ? MAX_SERPENTINE_SIZE : species.id === 383 ? 2.1 : MAX_CHARACTER_SIZE,
    canSwim: Boolean(canSwim),
    canFly: !canSwim && (species.types?.includes(3) || species.levitates || FLOATING_SPECIES.has(species.id) || species.id === 384),
    serpentine: [130, 350, 384].includes(species.id),
  };
}

export function prepareRig(model, species) {
  if (species.id === 25 && (!species.form || species.form === 'regular')) model.rotation.x -= Math.PI / 2;
  const profile = characterProfile(species);
  const rig = { speciesId: species.id, aquatic: profile.canSwim, tails: [], neck: [], ribbons: [], wings: [], hair: [], legs: [], surfaces: [] };
  model.updateMatrixWorld(true);
  model.traverse(object => {
    if (!object.isBone) return;
    const name = object.name;
    const record = { bone: object, rest: object.quaternion.clone(), index: Number(name.match(/(?:Tail|tail_?)(\d+)/)?.[1]) || 0 };
    if (object.userData.gardenMotion === 'tail' || (([151, 384].includes(species.id) || rig.aquatic) && /^Tail\d+(?:_|$)/i.test(name))) rig.tails.push(record);
    else if ([130, 350, 384].includes(species.id) && /^(Spine2|Neck\d+)/i.test(name)) rig.neck.push(record);
    else if (species.id === 384 && /^[LR]Feeler[ABC]\d+/i.test(name)) rig.ribbons.push(record);
    else if (species.id === 571 && /^Hair\d+/i.test(name)) {
      let depth = 0;
      for (let parent = object.parent; parent; parent = parent.parent) if (/^Hair\d+/i.test(parent.name)) depth++;
      rig.hair.push({ ...record, depth });
    }
    else if (object.userData.gardenMotion === 'leg') rig.legs.push({ ...record, side: name[0] === 'L' ? 1 : -1 });
    else if (species.id === 25 && /^[LR](Thigh|Arm)_/.test(name)) rig.legs.push({ ...record, side: name[0] === 'L' ? 1 : -1 });
    else if (species.form === 'mega' && [658, 718].includes(species.id) && /^(left|right)_(leg_01|arm_01)_\d+$/.test(name)) {
      rig.legs.push({ ...record, side: (name.startsWith('left') ? 1 : -1) * (name.includes('arm') ? -1 : 1) });
    }
  });
  rig.tails.sort((a, b) => a.index - b.index);
  const wingRig = prepareWings(model, species, profile.canFly);
  rig.wings = wingRig.wings; rig.surfaces = wingRig.surfaces; rig.wingRate = wingRig.rate;
  const animated = new Set([...rig.tails, ...rig.neck, ...rig.ribbons, ...rig.wings, ...rig.hair, ...rig.legs].map(record => record.bone));
  rig.soft = prepareSoftMotion(model, animated);
  rig.softSurfaces = prepareSoftSurfaces(model);
  rig.unriggedTails = prepareUnriggedTail(model, species);
  if (rig.wings.length || rig.surfaces.length || rig.hair.length || rig.tails.length || rig.soft.length || rig.softSurfaces.length || rig.unriggedTails.length) {
    const padding = rig.wings.length && rig.softSurfaces.length ? 1.3 : 1.15;
    model.userData.motionExtentPadding = Math.max(model.userData.motionExtentPadding || 1, padding);
  }
  return rig;
}

export function restoreRig(rig) { restoreSoftMotion(rig.soft); }

const delta = new THREE.Quaternion(), euler = new THREE.Euler();
function bend(record, x, y, z) {
  delta.setFromEuler(euler.set(x, y, z));
  record.bone.quaternion.copy(record.rest).multiply(delta);
}

export function animateRig(rig, time, phase, moving) {
  const mew = rig.speciesId === 151;
  rig.tails.forEach((record, i) => {
    const wave = time * (mew ? 1.65 : rig.aquatic ? 3 : 1.35) - i * (mew ? 0.63 : 0.48) + phase;
    const sweep = (mew ? 0.16 : 0.055) + Math.sin(wave) * (mew ? 0.2 : 0.19);
    const lift = Math.cos(wave * 0.83) * (mew ? 0.13 : 0.045);
    // These rigs use different local axes along their tail chains.
    bend(record, 0, mew ? sweep : lift, mew ? lift : sweep);
  });
  rig.neck.forEach((record, i) => bend(record, 0, Math.sin(time * 1.35 + phase + i * 0.5) * 0.06, Math.cos(time + i) * 0.035));
  rig.ribbons.forEach((record, i) => bend(record, 0, Math.sin(time * 1.6 - i * 0.35 + phase) * 0.04, Math.sin(time * 1.3 - i * 0.28) * 0.045));
  animateWings(rig, time, phase);
  rig.hair.forEach(record => {
    const wave = time * 2.2 + phase - record.depth * 0.65;
    const strength = (moving ? 1.25 : 0.8) * (record.depth ? 0.095 : 0.13);
    bend(record, Math.sin(wave * 0.83) * strength * 0.55, Math.sin(wave) * strength, Math.cos(wave) * strength * 0.5);
  });
  rig.legs.forEach(record => bend(record, Math.sin(time * 7 + phase) * (moving ? 0.17 : 0.015) * record.side, 0, 0));
  animateSoftMotion(rig.soft, time, phase, moving);
  animateSoftSurfaces(rig.softSurfaces, time, phase);
  animateUnriggedTail(rig.unriggedTails, time, phase);
}

export function createPace(profile, rng = Math.random) {
  const base = profile.canSwim ? 0.85 : profile.canFly ? 0.85 : 0.65;
  return { base: base * (0.88 + rng() * 0.24), speed: 0, target: 1, nextChange: 0, mode: 'cruise', gaitTime: 0 };
}

export function updatePace(pace, dt, elapsed, active, rng = Math.random) {
  if (elapsed >= pace.nextChange) {
    const choice = rng();
    pace.mode = choice < 0.08 ? 'pause' : choice < 0.35 ? 'stroll' : choice < 0.78 ? 'cruise' : 'brisk';
    pace.target = { pause: 0, stroll: 0.48, cruise: 0.95, brisk: 1.7 }[pace.mode];
    pace.nextChange = elapsed + (pace.mode === 'pause' ? 0.5 + rng() * 0.7 : 2 + rng() * 4);
  }
  pace.speed = THREE.MathUtils.damp(pace.speed, active ? pace.base * pace.target : 0, 3.5, dt);
  pace.gaitTime += dt * (0.35 + Math.min(1.8, pace.speed / pace.base));
  return pace.speed;
}

export function createFlightPath(phase = 0, start) {
  const rx = 1.8 + Math.random() * 1.1, rz = 1.6 + Math.random() * 0.8;
  const points = Array.from({ length: 8 }, (_, i) => {
    const angle = i * Math.PI / 4 + phase;
    return new THREE.Vector3(Math.cos(angle) * rx, 2.2 + Math.sin(angle * 2 + phase) * 0.4, Math.sin(angle) * rz + 0.4);
  });
  if (start) points[0].copy(start);
  return new THREE.CatmullRomCurve3(points, true, 'centripetal');
}

export function flightFloor(x, z, height) {
  const base = 1.25 + height * 0.5;
  const roofDistance = Math.max(Math.abs(x + 2.4) / 3.1, Math.abs(z + 2.1) / 2.5);
  const roof = 2.7 * (1 - THREE.MathUtils.smoothstep(roofDistance, 0.65, 1.45));
  const trees = Math.max(...[[-4.25, 2.4], [4.5, 2.7], [-4.55, -3.65], [4.7, -3.7]]
    .map(([tx, tz]) => 2.3 * (1 - THREE.MathUtils.smoothstep(Math.hypot(x - tx, z - tz), 0.5, 2.2))));
  return base + Math.max(roof, trees);
}
