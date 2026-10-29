import * as THREE from './vendor/three.module.min.js';

// Small, species-specific low-poly studies for the MEGA species without a GLB source.
export const STYLIZED_SPECIES = new Set([850, 851, 861, 868, 873, 918, 919, 935, 936, 938, 939, 940, 944, 963, 964, 971, 972, 1012, 1013, 1024]);

export function createStylizedModel(id) {
  if (!STYLIZED_SPECIES.has(id)) throw new Error('Model unavailable');
  const scene = new THREE.Group(), materials = new Map();
  const mat = color => {
    if (!materials.has(color)) materials.set(color, new THREE.MeshStandardMaterial({ color, roughness: 0.9 }));
    return materials.get(color);
  };
  function part(color, p, size, geometry = new THREE.SphereGeometry(1, 12, 8)) {
    const mesh = new THREE.Mesh(geometry, mat(color));
    mesh.position.set(...p); mesh.scale.set(...size);
    mesh.castShadow = mesh.receiveShadow = true; scene.add(mesh); return mesh;
  }
  const cone = (color, p, size) => part(color, p, size, new THREE.ConeGeometry(1, 2, 8));
  const box = (color, p, size) => part(color, p, size, new THREE.BoxGeometry(2, 2, 2));
  const soft = (mesh, name) => { mesh.name = name; mesh.userData.gardenSoftSurface = true; return mesh; };
  function wingJoint(side, position, mesh) {
    const bone = new THREE.Bone(); bone.name = side < 0 ? 'LWing' : 'RWing';
    bone.position.set(...position); scene.add(bone); scene.updateMatrixWorld(true); bone.attach(mesh);
    return bone;
  }
  function eyes(y, z, width = 0.2, color = '#232c38') {
    for (const side of [-1, 1]) {
      part('#fff9ed', [side * width, y, z], [0.105, 0.15, 0.055]);
      part(color, [side * width, y - 0.01, z + 0.05], [0.049, 0.084, 0.025]);
      part('#ffffff', [side * width - 0.018, y + 0.03, z + 0.074], [0.018, 0.024, 0.01]);
    }
  }
  function limb(color, from, to, radius) {
    const a = new THREE.Vector3(...from), b = new THREE.Vector3(...to), delta = b.clone().sub(a);
    const mesh = part(color, a.clone().add(b).multiplyScalar(0.5).toArray(), [radius, delta.length() / 2, radius], new THREE.CylinderGeometry(1, 1, 2, 8));
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), delta.normalize());
    return mesh;
  }
  function feet(color, width = 0.25, y = 0.12, z = 0.13) {
    for (const side of [-1, 1]) part(color, [side * width, y, z], [0.19, 0.12, 0.27]);
  }
  const dark = '#323b47';
  if (id === 940) {
    part(dark, [0, 0.65, 0], [0.42, 0.5, 0.38]);
    part('#f8d852', [0, 0.54, 0.22], [0.34, 0.35, 0.24]);
    part(dark, [0, 1.1, 0.13], [0.32, 0.31, 0.3]);
    eyes(1.13, 0.37, 0.15);
    part('#db9648', [0, 1, 0.49], [0.15, 0.08, 0.21]);
    for (const side of [-1, 1]) {
      const wing = part(dark, [side * 0.42, 0.72, -0.08], [0.19, 0.44, 0.16]); wing.rotation.z = side * 0.3;
      wingJoint(side, [side * 0.34, 1, -0.08], wing);
    }
    feet('#c58c55', 0.19);
  } else if ([1012, 1013].includes(id)) {
    const wide = id === 1013;
    part('#c8cdac', [0, 0.53, 0], [wide ? 0.58 : 0.4, 0.5, 0.38]);
    part('#526e47', [0, 0.96, 0], [wide ? 0.52 : 0.34, 0.055, 0.33]);
    part('#89ae69', [0.02, 1.11, -0.02], [0.18, 0.27, 0.17]);
    eyes(0.57, 0.36, 0.16, '#e8bb4c');
    part('#8da773', [0, 0.23, 0.29], [0.29, 0.13, 0.15]);
    if (wide) { limb('#857758', [0.4, 0.54, 0], [0.55, 1.28, 0], 0.055); for (let i = 0; i < 5; i++) limb('#c1b682', [0.55, 1.1, 0], [0.43 + i * 0.06, 1.47, 0], 0.012); }
    else part('#566e49', [-0.25, 0.74, 0.32], [0.07, 0.24, 0.05]);
    feet('#749357', 0.2, 0.08);
  } else if ([850, 851].includes(id)) {
    const segments = id === 851 ? 7 : 5;
    for (let i = 0; i < segments; i++) {
      const z = 0.7 - i * 0.34, y = 0.24 + Math.max(0, 2 - i) * (id === 851 ? 0.2 : 0.045);
      part('#b6463d', [0, y, z], [0.3, 0.19, 0.26]);
      part('#65464b', [0, y + 0.12, z - 0.015], [0.26, 0.1, 0.19]);
      for (const side of [-1, 1]) limb('#e8be61', [side * 0.17, y, z], [side * 0.42, 0.08, z + 0.12], 0.046);
    }
    const headY = id === 851 ? 0.77 : 0.42;
    part('#b73e34', [0, headY, 0.93], [0.34, 0.24, 0.28]); eyes(headY + 0.04, 1.17, 0.16, '#efc646');
    for (const side of [-1, 1]) { const flame = cone('#edb14e', [side * 0.23, headY + 0.3, 0.98], [0.09, 0.25, 0.07]); flame.rotation.z = side * 0.3; }
  } else if ([935, 936, 861].includes(id)) {
    const grim = id === 861, armor = id === 936;
    const color = grim ? '#836092' : '#ac4940', trim = grim ? '#436757' : armor ? '#eac65a' : '#434855';
    part(color, [0, 0.72, 0], [grim ? 0.44 : 0.3, 0.45, 0.27]);
    part(trim, [0, 1.2, 0], [0.36, 0.38, 0.3]);
    part(color, [0, 1.1, 0.22], [0.27, 0.21, 0.16]); eyes(1.24, 0.32, 0.15, '#e8b951');
    if (grim) {
      for (const side of [-1, 1]) { const hair = soft(cone(trim, [side * 0.33, 1.51, 0], [0.2, 0.46, 0.2]), 'hair'); hair.rotation.z = side * 0.48; }
      soft(cone(trim, [0, 1.77, -0.05], [0.3, 0.38, 0.25]), 'mane');
    } else { cone('#e97745', [0, 1.62, -0.09], [0.18, 0.36, 0.19]); part('#f3d671', [0, 1.53, 0.08], [0.09, 0.19, 0.09]); }
    for (const side of [-1, 1]) {
      part(trim, [side * 0.4, 0.98, 0], [0.2, 0.2, 0.23]);
      limb(color, [side * 0.38, 0.92, 0], [side * (grim ? 0.61 : 0.45), 0.47, 0.16], grim ? 0.17 : 0.13);
      part(trim, [side * 0.45, 0.43, 0.16], [0.18, 0.22, 0.19]);
      limb(color, [side * 0.18, 0.54, 0], [side * 0.25, 0.13, 0.1], 0.14);
    }
    if (armor) part('#e9b953', [0, 0.81, 0.26], [0.26, 0.26, 0.07]);
    feet(trim);
  } else if ([963, 964].includes(id)) {
    const blue = '#759ed0';
    part(blue, [0, 0.65, 0], [0.36, 0.37, 0.68]);
    part('#dbedf0', [0, 0.44, 0.19], [0.29, 0.19, 0.47]);
    part(blue, [0, 0.75, 0.56], [0.33, 0.33, 0.34]);
    part(blue, [0, 0.63, 0.92], [0.18, 0.12, 0.3]); eyes(0.84, 0.81, 0.22);
    cone(blue, [0, 1.04, -0.04], [0.08, 0.27, 0.22]);
    for (const side of [-1, 1]) { const fin = soft(part(blue, [side * 0.39, 0.49, 0.14], [0.29, 0.07, 0.18]), 'fin'); fin.rotation.z = side * 0.3; soft(part(blue, [side * 0.24, 0.53, -0.73], [0.3, 0.07, 0.19]), 'tail'); }
    if (id === 964) { part('#ed9baf', [-0.055, 0.43, 0.56], [0.075, 0.07, 0.035]); part('#ed9baf', [0.055, 0.43, 0.56], [0.075, 0.07, 0.035]); cone('#ed9baf', [0, 0.36, 0.56], [0.1, 0.08, 0.025]).rotation.z = Math.PI; }
  } else if ([918, 919].includes(id)) {
    const spider = id === 918, shell = spider ? '#719b81' : '#4c535d', body = spider ? '#d5ca9c' : '#91989c';
    part(shell, [0, 0.49, -0.2], [0.32, 0.33, 0.46]);
    part(body, [0, spider ? 0.82 : 0.53, 0.21], [0.26, 0.31, 0.27]);
    eyes(spider ? 0.89 : 0.61, 0.44, 0.14, '#d49255');
    for (const side of [-1, 1]) for (let i = 0; i < (spider ? 4 : 3); i++) {
      const z = 0.29 - i * 0.21, knee = [side * 0.54, 0.56 + (!spider && i === 2 ? 0.25 : 0), z - 0.12];
      limb(shell, [side * 0.2, 0.49, z], knee, 0.07); limb(body, knee, [side * 0.68, 0.08, z + 0.17], 0.048);
    }
    if (!spider) for (const side of [-1, 1]) soft(limb(dark, [side * 0.15, 0.73, 0.28], [side * 0.26, 1.07, 0.41], 0.024), 'antenna');
  } else if (id === 873) {
    part('#e6eef0', [0, 0.73, 0], [0.2, 0.44, 0.2]);
    part('#f5f7ef', [0, 1.09, 0.1], [0.27, 0.28, 0.25]); eyes(1.13, 0.32, 0.13, '#6c9aba');
    for (const side of [-1, 1]) {
      const wing = part('#c3e0e8', [side * 0.57, 0.82, -0.05], [0.53, 0.51, 0.055]); wing.rotation.z = side * -0.37;
      const joint = wingJoint(side, [side * 0.13, 0.8, -0.05], wing);
      for (let i = 0; i < 3; i++) joint.attach(limb('#edf6f4', [side * 0.13, 0.68, 0.02], [side * (0.58 + i * 0.1), 1.21 - i * 0.25, 0.01], 0.018));
      soft(limb('#bfd1db', [side * 0.13, 1.29, 0.12], [side * 0.28, 1.58, 0.14], 0.04), 'antenna');
    }
  } else if ([938, 939].includes(id)) {
    if (id === 938) {
      part('#f2ca5c', [0, 0.89, 0], [0.43, 0.46, 0.35]);
      part('#e18a53', [0, 0.64, 0.12], [0.34, 0.2, 0.25]);
      part('#63686b', [0, 0.32, -0.04], [0.11, 0.3, 0.12]); eyes(0.9, 0.31, 0.19);
    } else {
      part('#8eb36f', [0, 0.66, 0], [0.62, 0.6, 0.45]);
      part('#eadb79', [0, 0.48, 0.37], [0.26, 0.3, 0.12]);
      for (const side of [-1, 1]) { part('#d2d7af', [side * 0.51, 0.94, 0.04], [0.23, 0.24, 0.25]); part('#263d42', [side * 0.52, 0.94, 0.26], [0.15, 0.16, 0.06]); }
      eyes(0.97, 0.43, 0.1); feet('#d3bc6b', 0.37);
    }
  } else if ([971, 972, 944].includes(id)) {
    const mouse = id === 944, stone = id === 972, color = mouse ? '#9c9fa2' : stone ? '#aaa8a3' : '#e3dacc';
    part(color, [0, 0.45, -0.13], [0.35, 0.31, 0.55]);
    part(color, [0, 0.69, 0.39], [0.39, 0.38, 0.34]);
    part(mouse ? '#9582b3' : '#c8bda8', [0, 0.61, 0.66], [0.24, 0.14, 0.16]);
    part('#403f49', [0, 0.66, 0.79], [0.11, 0.08, 0.07]);
    for (const side of [-1, 1]) {
      soft(part(mouse ? dark : color, [side * 0.3, 0.91, 0.26], [0.15, mouse ? 0.24 : 0.19, 0.13]), 'ear');
      for (const z of [-0.4, 0.24]) part(color, [side * 0.26, 0.17, z], [0.13, 0.18, 0.16]);
    }
    if (mouse) { eyes(0.81, 0.65, 0.19); soft(limb(dark, [0, 0.52, -0.54], [0.23, 0.83, -0.98], 0.06), 'tail'); }
    else {
      for (let i = -2; i <= 2; i++) cone(color, [i * 0.13, 0.62, 0.62], [0.11, 0.22, 0.09]).rotation.z = Math.PI;
      if (stone) { box('#86888b', [0, 1.13, 0.32], [0.2, 0.25, 0.09]); part('#86888b', [0, 1.36, 0.32], [0.2, 0.16, 0.09]); }
      else { part('#f2edd2', [0, 1.11, 0.27], [0.12, 0.23, 0.12]); cone('#b698cf', [0, 1.45, 0.27], [0.12, 0.2, 0.1]); }
    }
  } else if (id === 868) {
    part('#fff2cc', [0, 0.6, 0], [0.38, 0.43, 0.32]);
    cone('#fff2cc', [0.03, 1.05, 0], [0.17, 0.27, 0.16]).rotation.z = -0.3;
    for (const side of [-1, 1]) { const arm = part('#fff2cc', [side * 0.41, 0.61, 0], [0.3, 0.1, 0.12]); arm.rotation.z = side * 0.4; }
    eyes(0.67, 0.28, 0.15, '#bc9972');
  } else if (id === 1024) {
    part('#74b5c5', [0, 0.34, 0], [0.52, 0.2, 0.6]);
    part('#5678b3', [0, 0.58, -0.07], [0.59, 0.35, 0.62], new THREE.IcosahedronGeometry(1, 1));
    const colors = ['#dd93b5', '#e8d066', '#87c691', '#b6a4d5', '#8ed3d8', '#dfa971'];
    for (let i = 0; i < 12; i++) { const angle = i / 12 * Math.PI * 2; part(colors[i % 6], [Math.sin(angle) * 0.44, 0.7, Math.cos(angle) * 0.46 - 0.07], [0.14, 0.09, 0.14], new THREE.IcosahedronGeometry(1, 0)); }
    part('#a5e1df', [0, 0.55, 0.67], [0.24, 0.3, 0.29]); eyes(0.64, 0.9, 0.12, '#5655a1');
    for (const side of [-1, 1]) for (const z of [-0.36, 0.32]) part('#74b5c5', [side * 0.44, 0.18, z], [0.24, 0.12, 0.25]);
    soft(cone('#b2e8e4', [0, 0.26, -0.82], [0.15, 0.35, 0.11]), 'tail').rotation.x = -Math.PI / 2;
  }
  return { scene, animations: [] };
}
