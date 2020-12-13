const width = window.innerWidth;
const height = window.innerHeight;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(75, width / height, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

const points = [];
let n = 10;
let m = 10;

//PIRAMIDI
// points.push(new THREE.Vector3(0, 4, 0));
// points.push(new THREE.Vector3(2, 0, 0));
// points.push(new THREE.Vector3(0, 0, 2));

// points.push(new THREE.Vector3(0, 4, 0));
// points.push(new THREE.Vector3(-2, 0, 0));
// points.push(new THREE.Vector3(0, 0, -2));

// points.push(new THREE.Vector3(0, 4, 0));
// points.push(new THREE.Vector3(0, 0, 2));
// points.push(new THREE.Vector3(-2, 0, 0));

// points.push(new THREE.Vector3(0, 4, 0));
// points.push(new THREE.Vector3(0, 0, -2));
// points.push(new THREE.Vector3(2, 0, 0));


points.push(new THREE.Vector3(2, -2, 0));
points.push(new THREE.Vector3(2, 2, 0));
points.push(new THREE.Vector3(-2, 2, 0));
points.push(new THREE.Vector3(-2, -2, 0));




points.push(new THREE.Vector3(2, -2, 0));
points.push(new THREE.Vector3(2, -2, 4));

points.push(new THREE.Vector3(2, -2, 0));
points.push(new THREE.Vector3(-2, -2, 0));
points.push(new THREE.Vector3(-2, -2, 4));

points.push(new THREE.Vector3(2, -2, 4));
points.push(new THREE.Vector3(2, 2, 4));
points.push(new THREE.Vector3(-2, 2, 4));

points.push(new THREE.Vector3(-2, -2, 4));
points.push(new THREE.Vector3(-2, -2, 4));
points.push(new THREE.Vector3(-2, 2, 4));








const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, material);
scene.add(line);

camera.position.z = 7;


const animate = function () {
  requestAnimationFrame(animate);
  //geometry.rotateY(0.01);
  renderer.render(scene, camera);
  // line.rotation.x += 0.01;
  //line.rotation.y += 0.01;
  //line.rotation.z += 0.01;
  
};

animate();
