import * as THREE from './vendor/three.module.min.js';
import { mergeGeometries } from './vendor/three-addons/utils/BufferGeometryUtils.js';
import { softPartKind } from './garden-soft-motion.js';

// Explicit forms only. A missing future form must not inherit an ordinary model.
export const SUPPLEMENTAL_GARDEN_FORMS = {
  '36:mega': { procedural: true, heightM: 1.7, types: [18, 3] },
  '149:mega': { procedural: true, heightM: 2.2, types: [16, 3] },
  '478:mega': { procedural: true, heightM: 2.6, types: [15, 8] },
  '560:mega': { procedural: true, heightM: 1.1, types: [17, 2] },
  '609:mega': { procedural: true, heightM: 2.5, types: [8, 10] },
  '623:mega': { procedural: true, heightM: 4, types: [5, 8] },
  '668:mega': { procedural: true, heightM: 1.5, types: [10, 1] },
  '687:mega': { url: 'https://raw.githubusercontent.com/Pokemon-3D-api/assets/429de1288cea0d43f5b4f56305d2276e94239d65/models/opt/za/687.glb',
    local: './assets/garden/models/687-mega.glb', bytes: 4036356, heightM: 2.9, types: [17, 14], levitates: true },
  '691:mega': { procedural: true, heightM: 2.1, types: [4, 16], levitates: true },
  '701:mega': { procedural: true, heightM: 1, types: [2, 3] },
  '768:mega': { procedural: true, heightM: 2.3, types: [7, 9] },
  '978:mega': { procedural: true, heightM: 0.6, types: [16, 11] },
};

function sculpt() {
  const scene = new THREE.Group(), materials = new Map();
  const sphere = new THREE.SphereGeometry(1, 16, 12);
  let cube;
  function material(color) {
    if (!materials.has(color)) materials.set(color, new THREE.MeshStandardMaterial({ color, roughness: 0.82 }));
    return materials.get(color);
  }
  function part(name, color, position, scale, parent = scene, geometry = sphere) {
    const mesh = new THREE.Mesh(geometry, material(color));
    mesh.name = name; mesh.position.set(...position); mesh.scale.set(...scale);
    if (softPartKind(mesh)) mesh.userData.gardenSoftSurface = true;
    mesh.castShadow = mesh.receiveShadow = true; parent.add(mesh); return mesh;
  }
  const box = (name, color, p, s, parent) => part(name, color, p, s, parent, cube ||= new THREE.BoxGeometry(2, 2, 2));
  const cone = (name, color, p, s, parent) => part(name, color, p, s, parent, new THREE.ConeGeometry(1, 2, 12));
  function bone(name, position, parent = scene, motion) {
    const joint = new THREE.Bone(); joint.name = name; joint.position.set(...position);
    if (motion) joint.userData.gardenMotion = motion;
    parent.add(joint); return joint;
  }
  function tube(name, color, points, radius, parent = scene) {
    const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)));
    return part(name, color, [0, 0, 0], [1, 1, 1], parent, new THREE.TubeGeometry(curve, 24, radius, 8, false));
  }
  function leaf(name, color, from, to, width, parent = scene) {
    const start = new THREE.Vector3(...from), end = new THREE.Vector3(...to), delta = end.clone().sub(start);
    const mesh = part(name, color, start.clone().add(end).multiplyScalar(0.5).toArray(), [width, delta.length() * 0.57, width * 0.2], parent);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), delta.normalize()); return mesh;
  }
  function eyes(y, z, width, parent = scene, color = '#315857', size = 1) {
    for (const side of [-1, 1]) {
      part('eye-white', '#fffef5', [side * width, y, z], [0.1 * size, 0.16 * size, 0.04], parent);
      part('eye-iris', color, [side * width, y, z + 0.033], [0.056 * size, 0.114 * size, 0.023], parent);
      part('eye-glint', '#ffffff', [side * width - 0.016 * size, y + 0.055 * size, z + 0.05], [0.023 * size, 0.044 * size, 0.011], parent);
    }
  }
  return { scene, part, box, cone, bone, tube, leaf, eyes };
}

function dragonite(s) {
  const { part, cone, bone, tube, leaf, eyes } = s;
  const orange = '#e9ad50', cream = '#fff1cd';
  part('round-body', orange, [0, 1.12, 0], [0.65, 0.85, 0.5]);
  part('belly', cream, [0, 1.03, 0.38], [0.49, 0.69, 0.2]);
  for (let i = 0; i < 5; i++) tube('belly-fold', '#d2ba85', [[-0.35, 0.63 + i * 0.2, 0.47], [0, 0.6 + i * 0.2, 0.575], [0.35, 0.63 + i * 0.2, 0.47]], 0.014);
  part('neck', orange, [0, 1.78, 0.12], [0.34, 0.5, 0.31]);
  part('head', orange, [0, 2.13, 0.22], [0.42, 0.41, 0.35]);
  part('muzzle', '#edbc68', [0, 2, 0.5], [0.35, 0.19, 0.23]); eyes(2.24, 0.49, 0.2);
  for (const side of [-1, 1]) {
    part('nostril', '#876035', [side * 0.13, 2.06, 0.715], [0.021, 0.019, 0.012]);
    const leg = bone(`${side < 0 ? 'L' : 'R'}Leg`, [side * 0.47, 0.51, 0], s.scene, 'leg');
    part('thigh', orange, [0, 0.01, 0], [0.3, 0.43, 0.33], leg);
    part('foot', orange, [0, -0.37, 0.15], [0.25, 0.16, 0.4], leg);
    for (const x of [-0.13, 0, 0.13]) cone('toe-claw', cream, [x, -0.34, 0.49], [0.065, 0.12, 0.075], leg).rotation.x = Math.PI * 0.55;
    part('arm', orange, [side * 0.57, 1.5, 0.14], [0.2, 0.38, 0.22]).rotation.z = side * 0.45;
    for (let i = 0; i < 3; i++) cone('hand-claw', cream, [side * (0.7 + i * 0.045), 1.22, 0.28 + i * 0.03], [0.044, 0.095, 0.046]);
    leaf('back-wing', '#3d9c87', [side * 0.2, 1.62, -0.38], [side * 0.71, 1.92, -0.39], 0.23);
    for (let i = 0; i < 3; i++) leaf('shoulder-feather', cream, [side * 0.31, 1.73, -0.04], [side * (0.65 + i * 0.13), 1.86 - i * 0.11, -0.11], 0.095);
    const wing = bone(`${side < 0 ? 'L' : 'R'}WingHead`, [side * 0.2, 2.46, 0.18]);
    tube('head-wing-stem', cream, [[0, 0, 0], [side * 0.25, 0.56, 0], [side * 0.73, 0.87, 0], [side * 1.19, 0.77, 0]], 0.07, wing);
    for (let i = 0; i < 7; i++) {
      const x = 0.35 + i * 0.15, top = 0.81 - Math.abs(i - 2) * 0.045;
      leaf('head-wing-feather', cream, [side * x, top, 0], [side * (x + 0.22), top - 0.51 - i * 0.025, 0.01], 0.145, wing);
    }
  }
  const tail = bone('Tail1', [0, 0.66, -0.4], s.scene, 'tail');
  tube('curled-tail', orange, [[0, 0, 0], [0.45, -0.16, -0.45], [0.92, -0.44, -0.53], [1.16, -0.42, 0.1], [1.01, -0.23, 0.54]], 0.17, tail);
  part('tail-pearl', '#55bcae', [1.01, -0.23, 0.58], [0.23, 0.23, 0.23], tail);
  part('pearl-glint', cream, [0.96, -0.12, 0.76], [0.07, 0.07, 0.025], tail);
  cone('forehead-horn', cream, [0, 2.57, 0.19], [0.08, 0.17, 0.08]);
}

function clefable(s) {
  const { part, cone, bone, leaf, eyes } = s;
  part('fairy-body', '#f7d9cf', [0, 0.96, 0], [0.48, 0.68, 0.35]);
  part('beret', '#fff7f0', [0, 1.64, 0], [0.46, 0.19, 0.33]);
  part('beret-tip', '#fff7f0', [0.04, 1.86, -0.02], [0.09, 0.13, 0.09]);
  eyes(1.32, 0.32, 0.13, s.scene, '#303238', 0.62);
  part('smile', '#9f5a64', [0, 1.16, 0.346], [0.1, 0.065, 0.025]);
  for (const side of [-1, 1]) {
    part('cheek', '#e89baf', [side * 0.25, 1.2, 0.32], [0.07, 0.024, 0.015]);
    part('ear-cuff', '#343b43', [side * 0.48, 1.3, 0], [0.17, 0.17, 0.16]);
    part('ear-gem', '#87bcc8', [side * 0.54, 1.3, 0.12], [0.09, 0.12, 0.04]);
    leaf('arm', '#f7d9cf', [side * 0.33, 1.12, 0.12], [side * 0.66, 0.99, 0.15], 0.13);
    part('foot', '#f7d9cf', [side * 0.21, 0.3, 0.07], [0.17, 0.21, 0.18]);
    const wing = bone(`${side < 0 ? 'L' : 'R'}Wing`, [side * 0.28, 1.08, -0.22]);
    leaf('upper-fairy-wing', '#e887aa', [0, 0, 0], [side * 1.1, 0.77, -0.03], 0.29, wing);
    leaf('middle-fairy-wing', '#e887aa', [0, -0.06, 0], [side * 0.95, 0.05, 0], 0.23, wing);
    leaf('lower-fairy-wing', '#f2e997', [0, -0.11, 0], [side * 0.71, -0.44, 0], 0.22, wing);
    cone('wing-spine', '#b95586', [side * 0.25, 0.3, 0], [0.07, 0.3, 0.06], wing).rotation.z = -side * 0.6;
  }
}

function froslass(s) {
  const { part, cone, leaf, eyes } = s;
  part('flowing-gown', '#ebeffb', [0, 0.72, 0], [0.33, 0.75, 0.27], s.scene, new THREE.CylinderGeometry(0.55, 1.7, 2, 16));
  part('upper-robe', '#eaf6f6', [0, 1.52, 0], [0.23, 0.45, 0.18]);
  part('head-veil', '#f8fbff', [0, 2.05, 0], [0.29, 0.41, 0.23]);
  part('face-mask', '#555069', [0, 2.01, 0.2], [0.2, 0.22, 0.055]);
  eyes(2.05, 0.247, 0.11, s.scene, '#cbbd59', 0.55);
  const sash = part('red-sash', '#b66b68', [0, 1.36, 0.015], [0.24, 0.12, 0.21]); sash.rotation.z = 0.07;
  for (const side of [-1, 1]) {
    const horn = cone('ice-horn', '#8cc9df', [side * 0.17, 2.48, -0.04], [0.07, 0.29, 0.07]); horn.rotation.z = -side * 0.2;
    leaf('long-sleeve', '#eaf6fa', [side * 0.18, 1.83, 0], [side * 0.85, 0.91, 0.03], 0.25);
    leaf('veil-ribbon', '#ccddeb', [side * 0.17, 2.23, -0.12], [side * 0.46, 1.15, -0.2], 0.14);
  }
  for (let i = 0; i < 9; i++) {
    const a = i / 9 * Math.PI * 2;
    part('ice-hem', '#b7e9f5', [Math.sin(a) * 0.49, 0.06, Math.cos(a) * 0.35], [0.17, 0.12, 0.15]);
  }
  for (let i = 0; i < 6; i++) part('gown-crystal', '#96c3e4', [Math.sin(i * 2.4) * 0.21, 0.22 + i * 0.12, 0.29 - i * 0.017], [0.045, 0.072, 0.025], s.scene, new THREE.OctahedronGeometry());
}

function scrafty(s) {
  const { part, bone, cone, leaf, eyes } = s;
  part('body', '#ecab67', [0, 0.87, 0], [0.23, 0.43, 0.21]);
  part('belly', '#a7a6a3', [0, 0.85, 0.19], [0.12, 0.28, 0.045]);
  part('hood', '#efeded', [0, 1.5, -0.02], [0.39, 0.49, 0.31]);
  part('orange-face', '#eab173', [0, 1.42, 0.22], [0.32, 0.3, 0.18]);
  eyes(1.51, 0.369, 0.17, s.scene, '#343a40', 0.88);
  for (const side of [-1, 1]) {
    part('half-lidded-eye', '#62636d', [side * 0.17, 1.61, 0.393], [0.1, 0.066, 0.028]);
    const leg = bone(`${side < 0 ? 'L' : 'R'}Leg`, [side * 0.2, 0.51, 0], s.scene, 'leg');
    part('baggy-trousers', '#ede8ea', [0, -0.16, 0], [0.23, 0.31, 0.22], leg);
    part('orange-foot', '#df9a57', [0, -0.41, 0.1], [0.19, 0.1, 0.24], leg);
    leaf('jacket-arm', '#eeeaee', [side * 0.2, 1.06, 0], [side * 0.47, 0.64, 0.11], 0.14);
    leaf('hood-scarf', '#d4cbd1', [side * 0.14, 1.2, -0.2], [side * 0.73, 0.93, -0.48], 0.075);
  }
  leaf('red-fringe', '#c66260', [-0.18, 1.77, 0.28], [-0.34, 1.28, 0.45], 0.16);
  cone('red-mohawk', '#b96162', [0, 1.8, -0.32], [0.11, 0.35, 0.12]).rotation.x = -0.7;
  part('hood-hole', '#ac6e88', [0.14, 1.87, 0.1], [0.064, 0.11, 0.03]);
}

function chandelure(s) {
  const { part, cone, tube } = s;
  const iron = '#373440', flame = '#8272c2', brass = '#b6a078';
  part('glass-lantern', '#bbb3e0', [0, 1.45, 0], [0.35, 0.35, 0.31]);
  for (let i = 0; i < 6; i++) {
    const a = i / 6 * Math.PI * 2;
    tube('lantern-frame', iron, [[Math.sin(a) * 0.12, 1.81, Math.cos(a) * 0.12], [Math.sin(a) * 0.35, 1.45, Math.cos(a) * 0.31], [Math.sin(a) * 0.12, 1.09, Math.cos(a) * 0.12]], 0.027);
  }
  for (const side of [-1, 1]) part('yellow-eye', '#f5da76', [side * 0.19, 1.46, 0.29], [0.068, 0.086, 0.04]);
  part('lamp-base', iron, [0, 1.02, 0], [0.32, 0.1, 0.27]);
  cone('pendant', brass, [0, 0.5, 0], [0.13, 0.49, 0.13]).rotation.z = Math.PI;
  for (let i = 0; i < 8; i++) {
    const a = i / 8 * Math.PI * 2, x = Math.sin(a), z = Math.cos(a), high = i % 2 === 0 ? 1.2 : 0.81;
    tube('curved-candle-arm', i % 2 ? brass : iron, [[0, 1.02, 0], [x * 0.49, 0.54, z * 0.49], [x * 0.89, 0.72, z * 0.89], [x * 0.93, high, z * 0.93]], 0.041);
    cone('candle-cup', brass, [x * 0.93, high + 0.08, z * 0.93], [0.11, 0.17, 0.11]).rotation.z = Math.PI;
    part('candle-flame', flame, [x * 0.93, high + 0.29, z * 0.93], [0.095, 0.2, 0.09]);
    part('flame-core', '#e5daeb', [x * 0.93, high + 0.22, z * 0.93 + 0.075], [0.04, 0.095, 0.027]);
  }
  tube('crown-flame', flame, [[0, 1.83, 0], [0.16, 2.04, 0], [-0.02, 2.28, 0], [0.12, 2.52, 0]], 0.07);
}

function golurk(s) {
  const { part, box, cone, bone, tube } = s;
  const teal = '#639da5', gold = '#eac875';
  box('stone-body', teal, [0, 1.25, 0], [0.48, 0.56, 0.33]);
  box('head', teal, [0, 1.99, 0], [0.25, 0.25, 0.23]);
  box('eye-slit', '#283b43', [0, 2.02, 0.238], [0.2, 0.045, 0.02]);
  box('glowing-eyes', '#eddd87', [0, 2.02, 0.262], [0.13, 0.018, 0.012]);
  for (const side of [-1, 1]) {
    box('crossed-gold-armor', gold, [0, 1.47, 0.356], [0.11, 0.58, 0.065]).rotation.z = side * 0.7;
    part('gold-shoulder', gold, [side * 0.59, 1.77, -0.03], [0.34, 0.34, 0.33]);
    const arm = bone(`${side < 0 ? 'L' : 'R'}Arm`, [side * 0.6, 1.6, 0]);
    box('stone-arm', teal, [side * 0.1, -0.24, 0.08], [0.22, 0.34, 0.23], arm);
    part('gold-cuff', gold, [side * 0.14, -0.46, 0.09], [0.3, 0.2, 0.3], arm);
    box('stone-hand', teal, [side * 0.15, -0.72, 0.13], [0.26, 0.21, 0.28], arm);
    for (let i = 0; i < 3; i++) box('finger', teal, [side * 0.15 - 0.16 + i * 0.16, -0.73, 0.36], [0.065, 0.17, 0.09], arm);
    const leg = bone(`${side < 0 ? 'L' : 'R'}Leg`, [side * 0.28, 0.75, 0], s.scene, 'leg');
    box('stone-leg', teal, [0, -0.19, 0], [0.2, 0.31, 0.23], leg);
    box('gold-anklet', gold, [0, -0.41, 0], [0.27, 0.11, 0.3], leg);
    box('stone-foot', teal, [0, -0.62, 0.09], [0.25, 0.12, 0.34], leg);
    cone('shoulder-spike', teal, [side * 0.61, 2.15, -0.06], [0.12, 0.26, 0.13]);
    tube('spirit-smoke', '#9671ac', [[side * 0.55, 2, -0.23], [side * 0.62, 2.28, -0.23], [side * 0.39, 2.48, -0.23], [side * 0.55, 2.67, -0.23]], 0.11);
  }
  part('chest-seal', '#c6a575', [0, 1.18, 0.38], [0.13, 0.17, 0.045]);
}

function pyroar(s) {
  const { part, bone, tube, leaf, eyes } = s;
  const brown = '#635245', tan = '#c4a172', red = '#b73b3c', yellow = '#f1d66c';
  part('lion-body', brown, [0, 0.85, -0.25], [0.41, 0.43, 0.69]);
  part('chest', tan, [0, 0.94, 0.31], [0.35, 0.5, 0.33]);
  for (const side of [-1, 1]) for (const z of [-0.69, 0.32]) {
    const leg = bone(`${side < 0 ? 'L' : 'R'}Leg${z}`, [side * 0.29, 0.64, z], s.scene, 'leg');
    part('lion-leg', tan, [0, -0.22, 0], [0.15, 0.35, 0.19], leg);
    part('paw', tan, [0, -0.51, 0.1], [0.18, 0.1, 0.24], leg);
  }
  part('mane-base', red, [0, 1.31, 0.25], [0.65, 0.73, 0.22]);
  for (const side of [-1, 1]) for (let i = 0; i < 4; i++) {
    const y = 0.76 + i * 0.29, x = 0.28 + (3 - i) * 0.06;
    leaf('red-mane-plume', red, [side * x, y, 0.34], [side * (0.82 - i * 0.05), y + 0.23, 0.34], 0.24);
    leaf('yellow-mane-plume', yellow, [side * x, y + 0.04, 0.43], [side * (0.72 - i * 0.05), y + 0.21, 0.43], 0.17);
  }
  leaf('towering-mane', red, [0.09, 1.5, 0.22], [-0.3, 2.58, 0.17], 0.32);
  leaf('gold-mane-center', yellow, [0.08, 1.49, 0.4], [-0.28, 2.51, 0.32], 0.22);
  part('lion-head', tan, [0, 1.41, 0.53], [0.26, 0.29, 0.23]);
  eyes(1.48, 0.739, 0.12, s.scene, '#428790', 0.75);
  part('muzzle', '#d0b88c', [0, 1.26, 0.72], [0.2, 0.13, 0.15]);
  part('nose', brown, [0, 1.32, 0.85], [0.1, 0.064, 0.05]);
  const tail = bone('Tail1', [0, 0.86, -0.78], s.scene, 'tail');
  tube('tail', brown, [[0, 0, 0], [0.2, -0.08, -0.3], [0.42, 0.1, -0.56], [0.41, 0.36, -0.56]], 0.052, tail);
  leaf('tail-tuft', tan, [0.41, 0.29, -0.56], [0.5, 0.62, -0.53], 0.15, tail);
}

function dragalge(s) {
  const { part, cone, bone, tube, leaf, eyes } = s;
  const purple = '#695187', pink = '#b75973', brown = '#6d4944';
  part('seahorse-torso', brown, [0, 1.02, 0], [0.23, 0.51, 0.21]);
  part('pink-chest', pink, [0, 0.91, 0.18], [0.18, 0.27, 0.06]);
  part('head', purple, [0, 1.57, 0.14], [0.3, 0.21, 0.2]);
  part('snout', brown, [0, 1.55, 0.39], [0.13, 0.1, 0.28]); eyes(1.65, 0.32, 0.2, s.scene, '#dbcb8d', 0.6);
  for (const side of [-1, 1]) {
    const wing = bone(`${side < 0 ? 'L' : 'R'}WingKelp`, [side * 0.13, 1.62, -0.03]);
    for (let i = 0; i < 4; i++) {
      leaf('purple-kelp-underwing', purple, [0, 0, 0], [side * (0.85 + i * 0.09), -0.23 - i * 0.25, 0], 0.29, wing);
      leaf('pink-kelp-cape', pink, [0, 0.07, 0.045], [side * (0.95 + i * 0.085), -0.16 - i * 0.25, 0.055], 0.23, wing);
    }
    tube('kelp-horn', '#8c9461', [[side * 0.14, 1.7, 0], [side * 0.27, 2.02, 0], [side * 0.19, 2.24, 0]], 0.027);
    part('horn-pearl', '#b778b9', [side * 0.29, 2, 0], [0.07, 0.09, 0.07]);
    tube('branch-arm', brown, [[side * 0.15, 1.12, 0.1], [side * 0.47, 0.87, 0.1], [side * 0.49, 0.65, 0.18]], 0.035);
    cone('branch-finger', brown, [side * 0.51, 0.62, 0.16], [0.08, 0.2, 0.045]).rotation.z = side * 0.4;
  }
  const tail = bone('Tail1', [0, 0.66, 0], s.scene, 'tail');
  tube('curled-root-tail', purple, [[0, 0, 0], [-0.24, -0.27, 0], [-0.49, -0.43, 0.09], [-0.38, -0.61, 0.2], [-0.12, -0.58, 0.23]], 0.09, tail);
  leaf('tail-kelp', brown, [-0.29, -0.57, 0.22], [-0.66, -0.7, 0.3], 0.15, tail);
}

function hawlucha(s) {
  const { part, cone, bone, leaf, eyes } = s;
  part('white-body', '#fff5dc', [0, 0.77, 0], [0.3, 0.51, 0.23]);
  part('red-chest', '#b64a31', [0, 1, 0.17], [0.26, 0.27, 0.12]);
  part('black-mask', '#343a37', [0, 1.38, 0], [0.27, 0.3, 0.24]);
  eyes(1.45, 0.219, 0.13, s.scene, '#393e33', 0.7);
  cone('beak', '#dbca68', [0, 1.39, 0.33], [0.12, 0.2, 0.11]).rotation.x = Math.PI / 2;
  for (const side of [-1, 1]) {
    for (let i = 0; i < 4; i++) leaf('gold-collar-feather', '#ecda7b', [side * 0.07, 1.13, 0.28], [side * (0.2 + i * 0.12), 1.11 + i * 0.07, 0.29], 0.11);
    leaf('gold-mask-marking', '#e7ce6b', [side * 0.05, 1.52, 0.235], [side * 0.25, 1.31, 0.2], 0.07);
    cone('orange-head-plume', '#dc8e42', [side * 0.19, 1.8, -0.03], [0.09, 0.28, 0.07]).rotation.z = -side * 0.3;
    const wing = bone(`${side < 0 ? 'L' : 'R'}Wing`, [side * 0.23, 1.1, -0.03]);
    leaf('red-wing-leading-edge', '#b84931', [0, 0, 0], [side * 0.78, 0.55, 0], 0.13, wing);
    for (let i = 0; i < 5; i++) leaf('teal-wing-feather', '#61ae96', [side * (0.12 + i * 0.14), i * 0.1, -0.03], [side * (0.42 + i * 0.14), -0.73 + i * 0.23, -0.03], 0.19, wing);
    const leg = bone(`${side < 0 ? 'L' : 'R'}Leg`, [side * 0.18, 0.4, 0], s.scene, 'leg');
    part('leg', '#eee9d6', [0, -0.13, 0], [0.12, 0.24, 0.14], leg);
    part('yellow-foot', '#c4b565', [0, -0.35, 0.07], [0.12, 0.07, 0.2], leg);
  }
}

function golisopod(s) {
  const { part, box, cone, bone, eyes } = s;
  const armor = '#929b9e', body = '#544851', trim = '#9e63b6';
  part('armored-body', body, [0, 0.95, 0], [0.44, 0.59, 0.28]);
  for (let i = 0; i < 4; i++) part('overlapping-shell', armor, [0, 1.24 + i * 0.17, -0.07], [0.52 - i * 0.085, 0.23, 0.38]);
  part('purple-face', trim, [0, 1.44, 0.29], [0.28, 0.12, 0.1]); eyes(1.47, 0.36, 0.18, s.scene, '#e8de87', 0.55);
  for (const side of [-1, 1]) {
    cone('purple-feeler', trim, [side * 0.3, 1.71, 0.31], [0.044, 0.39, 0.046]).rotation.z = -side * 0.43;
    const leg = bone(`${side < 0 ? 'L' : 'R'}Leg`, [side * 0.32, 0.54, 0], s.scene, 'leg');
    box('armored-leg', armor, [0, -0.11, 0], [0.21, 0.26, 0.2], leg);
    cone('pointed-foot', '#636d71', [0, -0.41, 0.05], [0.18, 0.18, 0.21], leg).rotation.z = Math.PI;
    part('upper-arm', body, [side * 0.68, 1.31, 0.09], [0.4, 0.22, 0.24]).rotation.z = side * 0.17;
    part('massive-forearm-shell', armor, [side * 0.93, 1.19, 0.29], [0.31, 0.35, 0.29]);
    for (let i = 0; i < 3; i++) {
      cone('forearm-spine', trim, [side * (0.79 + i * 0.13), 1.56, 0.14], [0.09, 0.18, 0.085]).rotation.z = -side * 0.4;
      cone('large-claw', '#455a56', [side * (0.78 + i * 0.15), 0.94, 0.54], [0.08, 0.29, 0.11]).rotation.x = -2.7;
    }
    for (let i = 0; i < 2; i++) {
      part('extra-arm', body, [side * (0.38 + i * 0.13), 1.99 + i * 0.12, -0.25], [0.14, 0.28, 0.15]);
      part('extra-claw-shell', armor, [side * (0.42 + i * 0.16), 2.24 + i * 0.12, -0.2], [0.19, 0.16, 0.21]);
      cone('extra-claw', '#435652', [side * (0.42 + i * 0.16), 2.23 + i * 0.12, 0], [0.09, 0.15, 0.09]).rotation.x = Math.PI / 2;
    }
  }
}

function tatsugiri(s) {
  const { part, cone, bone, leaf, eyes } = s;
  const colors = ['#eb6791', '#efd34d', '#ec8650'];
  for (let i = 0; i < 3; i++) {
    const fish = bone(`fish-${i}`, [(i - 1) * 0.48, i === 2 ? 0.15 : 0, (i - 1) * -0.23]);
    part('white-throat', '#f5eee0', [0, 0.3, 0], [0.21, 0.18, 0.47], fish);
    part('colored-body', colors[i], [0, 0.48, 0], [0.25, 0.19, 0.59], fish);
    part('fish-face', colors[i], [0, 0.49, 0.46], [0.24, 0.18, 0.19], fish);
    eyes(0.5, 0.607, 0.14, fish, '#30343c', 0.62);
    const tail = bone(`Tail${i + 1}`, [0, 0.5, -0.45], fish, 'tail');
    leaf('tail-fin', colors[i], [-0.03, 0, 0], [-0.24, 0.02, -0.26], 0.12, tail);
    leaf('tail-fin', colors[i], [0.03, 0, 0], [0.24, 0.02, -0.26], 0.12, tail);
    for (let j = 0; j < 3; j++) cone('green-dorsal-fin', '#69bc7c', [0, 0.72, -0.12 + j * 0.14], [0.035, 0.19 - j * 0.03, 0.08], fish).rotation.x = -0.2;
    for (let j = 0; j < 4; j++) part('orange-roe', '#eb9050', [0.06 + j % 2 * 0.06, 0.69 + Math.floor(j / 2) * 0.06, 0.18], [0.055, 0.055, 0.055], fish);
  }
}

const BUILDERS = { 36: clefable, 149: dragonite, 478: froslass, 560: scrafty, 609: chandelure,
  623: golurk, 668: pyroar, 691: dragalge, 701: hawlucha, 768: golisopod, 978: tatsugiri };

function batchParts(scene) {
  const parents = [], oldGeometries = new Set();
  scene.traverse(object => { if (object.isGroup || object.isBone) parents.push(object); });
  // Merge only siblings: each animated wing, leg and tail keeps its own pivot.
  for (const parent of parents) {
    const groups = new Map();
    for (const mesh of parent.children.filter(object => object.isMesh)) {
      if (mesh.userData.gardenSoftSurface) continue;
      if (!groups.has(mesh.material)) groups.set(mesh.material, []);
      groups.get(mesh.material).push(mesh);
    }
    for (const [material, meshes] of groups) {
      if (meshes.length < 2) continue;
      const geometries = meshes.map(mesh => {
        mesh.updateMatrix();
        const geometry = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry.clone();
        return geometry.applyMatrix4(mesh.matrix);
      });
      const merged = mergeGeometries(geometries);
      geometries.forEach(geometry => geometry.dispose());
      if (!merged) continue;
      const batch = new THREE.Mesh(merged, material);
      batch.name = meshes[0].name;
      batch.userData.parts = meshes.map(mesh => mesh.name);
      batch.castShadow = batch.receiveShadow = true;
      parent.add(batch);
      meshes.forEach(mesh => { oldGeometries.add(mesh.geometry); mesh.removeFromParent(); });
    }
  }
  scene.traverse(object => { if (object.isMesh) oldGeometries.delete(object.geometry); });
  oldGeometries.forEach(geometry => geometry.dispose());
}

export function createMegaModel(species) {
  if (species.form !== 'mega' || !BUILDERS[species.id]) throw new Error('Model unavailable');
  const model = sculpt();
  BUILDERS[species.id](model);
  batchParts(model.scene);
  model.scene.name = `garden-mega-${species.id}`;
  model.scene.userData.modelStyle = 'simplified';
  model.scene.userData.motionExtentPadding = 1.15;
  return { scene: model.scene, animations: [] };
}
