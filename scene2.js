const width = window.innerWidth; //recebendo largura
const height = window.innerHeight; //altura
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x333333);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const points = [];
let n = 10;
let m = 10;

//PIRAMIDI
points.push(new THREE.Vector3(0, 4, 0));
points.push(new THREE.Vector3(2, 0, 0));
points.push(new THREE.Vector3(0, 0, 2));

points.push(new THREE.Vector3(0, 4, 0));
points.push(new THREE.Vector3(-2, 0, 0));
points.push(new THREE.Vector3(0, 0, -2));

points.push(new THREE.Vector3(0, 0, 2));
points.push(new THREE.Vector3(2, 0, 0));
points.push(new THREE.Vector3(-2, 0, 0));

points.push(new THREE.Vector3(0, 0, -2));
points.push(new THREE.Vector3(2, 0, 0));

//Inserindo texturas

// CUBO
// points.push(new THREE.Vector3(2, -2, 0));
// points.push(new THREE.Vector3(2, 2, 0));
// points.push(new THREE.Vector3(-2, 2, 0));
// points.push(new THREE.Vector3(-2, -2, 0));
// points.push(new THREE.Vector3(2, -2, 0));
// points.push(new THREE.Vector3(2, -2, 4));
// points.push(new THREE.Vector3(2, -2, 0));
// points.push(new THREE.Vector3(-2, -2, 0));
// points.push(new THREE.Vector3(-2, -2, 4));
// points.push(new THREE.Vector3(2, -2, 4));
// points.push(new THREE.Vector3(2, 2, 4));
// points.push(new THREE.Vector3(-2, 2, 4));
// points.push(new THREE.Vector3(-2, -2, 4));
// points.push(new THREE.Vector3(-2, 2, 4));
// points.push(new THREE.Vector3(-2, 2, 0));
// points.push(new THREE.Vector3(2, 2, 0));
// points.push(new THREE.Vector3(2, 2, 4));

//Cena textura
const loader = new THREE.TextureLoader();
const texture = loader.load("https://i.imgur.com/uu12f5W.jpg");

texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
// texture.repeat.set(3, 3);
var material = new THREE.MeshBasicMaterial({
  map: texture,
  wireframe: true
});

//Forma antiga = errada
// var geometriaCubo = new THREE.BufferGeometry().setFromPoints(points);

//só funciona completamente se colocarmos valores aleatórios que formem um cubo
// var geometriaCubo = new THREE.BoxGeometry(5, 5, 5);

//pontos recebidos geram forma complexa = tá errado
var geometriaCubo = new THREE.BoxGeometry().setFromPoints(points);

var line = new THREE.Mesh(geometriaCubo, material);
camera.position.z = 7;

scene.add(line);

const animate = function () {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
  line.rotation.x += 0.01;
  line.rotation.y += 0.01;
  line.rotation.z += 0.01;
};

animate();
