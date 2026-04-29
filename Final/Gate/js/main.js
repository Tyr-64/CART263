
"use strict";
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Flow } from 'three/addons/modifiers/CurveModifier.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

let hite = 800;
let wide = 800;
let output = " ";
let current = " ";
let overTime = [];
let hashes = [];
let index = 0;
let ex = 0;
let why = 0;
let pos = 0;
let p = 0;
let send;
let size;
let entry;
let text = "> Why didn't you go?";
let questions = ["<br> >Where are you?", "<br> >Why did it take you so long?", "<br> >If you're not real to them then what are you?", "<br> >How can you stop fighting?", "<br> >Do you have to be haunted to know you're alive?"];
document.getElementById("log").innerHTML = text;
let bed;
let typing = "";
let images = [document.getElementById("head"), document.getElementById("leftArm"), document.getElementById("leftLeg"), document.getElementById("rightLeg"), document.getElementById("rightArm"),];
let blends = ["difference", "normal", "multiply", "exclusion", "lighten"];

send = document.getElementById("sendButton");
send.addEventListener("click", testFunction);
const resizeObserver = new ResizeObserver(onResize);
const ogie = document.querySelector(".canvasBox");



const scene = new THREE.Scene();
// // const geometry = new THREE.BoxGeometry(1, 1, 1);

// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const materialTwo = new THREE.MeshBasicMaterial({ color: 0x800080 });
// const mesh = new THREE.Mesh(geometry, materialTwo);
// mesh.position.set(-2, 0, 3);
//scene.add(mesh);
const camera = new THREE.PerspectiveCamera(75, 800 / 800);
scene.add(camera);
const canvas = document.querySelector("canvas#threeCanvas");

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
});
size = canvas.getBoundingClientRect();
renderer.setSize(size.width, size.height);
renderer.render(scene, camera);
let light = new THREE.HemisphereLight(0xffffff, 0x444444, 5.0);
light.position.set(-20, 1, 0);
scene.add(light);

let light2 = new THREE.DirectionalLight(0xffffff, 5.0);
light.position.set(0, 20, 20);
scene.add(light2);
let chair = [];
let bgs = [];
async function main() {
    console.log('test');
}
// loader.load('/media/scene.gltf', function (gltf) {
//     const root = gltf.scene;
//     root.scale.set(5, 5, 5);
//     scene.add(root);
//     console.log(root);

//     chair[0] = root.getObjectByName("polySurface1");
//     chair[0].visible = false;
//     chair[1] = root.getObjectByName("polySurface6");
//     chair[1].visible = false;
//     chair[2] = root.getObjectByName("polySurface7");
//     chair[2].visible = false;
//     chair[3] = root.getObjectByName("polySurface8");
//     chair[3].visible = false;
//     chair[4] = root.getObjectByName("polySurface9");
//     chair[4].visible = false;
//     modelOut(chair[0], material);
// });
let flowStart;
let map;
let maploaded = false;
let flowSetup = false;
let curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 5, 3),
    new THREE.Vector3(0, 0, 10),
    new THREE.Vector3(0, 5, 12),
    new THREE.Vector3(0, 0, 5)
], true);
curve.tension = .1;

async function loadMap() {
    const loader = new GLTFLoader();
    loader.frustumCulled = false;
    const mapData = await loader.loadAsync('media/postermap.glb');
    const mapModel = mapData.scene.children[0];
    //mapModel.frustumCulled = false;
    //console.log(mapData.scene.children[0]);
    maploaded = true;
    return mapModel;
}
async function setupMap() {
    map = await loadMap();
    map.scale.set(.06, .06, .06);
    map.position.set(0, 0, 0);
    map.frustumCulled = false;
    map.rotation.z = Math.PI / 3;
    //scene.add(map);
    flowStart = new Flow(map);
    scene.add(flowStart.object3D);
    flowStart.updateCurve(0, curve);
    flowStart.object3D.traverse(function (child) {
        child.frustumCulled = false;
    })

}
setupMap();
console.log(flowStart);
// const map = loadMap();
// console.log(map);
// scene.add(map);

// loader.load('media/postermap.glb', function (gltf) {
//     const map = gltf.scene;
//     map.scale.set(.3, .3, .3);
//     scene.add(map);
//     console.log(map);
//     bgs[0] = map.getObjectByName("BuildingMesh-00329");
//     modelOut(bgs[0]);
//     let flowStart = new Flow(map);
//     flow = flowStart;




// });
// function modelOut(inputModel, mat, x, y, z) {
//     chair = inputModel;
//     chair.visible = true;
//     chair.position.z = -30;
//     console.log(chair);
//     if (mat != undefined) {
//         chair.material = mat;
//     }
// }
// console.log(chair);


camera.position.z = 3;
resizeObserver.observe(ogie);
function onResize(entries) {
    entry = entries[0];
    size = entry.contentRect.width;
    renderer.setSize(size, size);
}

let curvePos = 0;
let top = document.getElementById("topCanvas");
let topctx = top.getContext('2d');
let right = document.getElementById("rightCanvas");
let rightctx = right.getContext('2d');
let bRight = document.getElementById("bottomRightCanvas");
let bRightctx = bRight.getContext('2d');
let bLeft = document.getElementById("bottomLeftCanvas");
let bLeftctx = bLeft.getContext('2d');
let left = document.getElementById("leftCanvas");
let leftctx = left.getContext('2d');
function animate(time) {
    renderer.render(scene, camera);
    if (flowStart != undefined) {
        flowStart.moveAlongCurve(.0001);
    }
    topctx.clearRect(0, 0, 300, 150);
    topctx.drawImage(renderer.domElement, 0, 0, 300, 150);
    rightctx.clearRect(0, 0, 300, 150);
    rightctx.drawImage(renderer.domElement, 0, 0, 300, 150);
    bRightctx.clearRect(0, 0, 300, 150);
    bRightctx.drawImage(renderer.domElement, 0, 0, 300, 150);
    bLeftctx.clearRect(0, 0, 300, 150);
    bLeftctx.drawImage(renderer.domElement, 0, 0, 300, 150);
    leftctx.clearRect(0, 0, 300, 150);
    leftctx.drawImage(renderer.domElement, 0, 0, 300, 150);
}
renderer.setAnimationLoop(animate);


// window.addEventListener("click", () => {
//     const usbVendorId = 0xabcd;
//     navigator.serial
//         .requestPort()
//         .then(async (port) => {
//             await port.open({ baudRate: 9600 });
//             const textDecoder = new TextDecoderStream();
//             const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
//             const reader = textDecoder.readable.getReader();
//             while (true) {

//                 const { value, done } = await reader.read();
//                 if (done) {
//                     reader.releaseLock();
//                     break;
//                 }
//                 if (index > 40) {
//                     index = 0;
//                 }
//                 if (output.indexOf("END") != -1 & index != 0) {
//                     console.log("end found");
//                     background(200);
//                     for (let i = 0; i < overTime.length; i++) {
//                         let scaled = map(overTime[i], 0, 200, 5, 40);
//                         push();
//                         textSize(scaled);
//                         ex += scaled + 5;
//                         text(overTime[i], ex, height / 2 - overTime[i]);
//                         pop();
//                         console.log(overTime[i]);
//                         //circle(250 + ((Math.random() - .5) * (i * 5)), 250 + ((Math.random() - .5) * (i * 5)), overTime[i]);
//                     }
//                     ex = 0;

//                     overTime = [];
//                     index = 0;
//                 }
//                 if (output.indexOf("CLOSE") == -1) {
//                     output += value;
//                     //console.log(value);
//                 }
//                 else {
//                     current = output.substring((output.indexOf("OPEN") + 4), (output.indexOf("CLOSE") - 1));
//                     if (current.length < 150) {
//                         // circle(ex, why, current / 2);
//                         // ex += 25;
//                         // why += 25;
//                         // if (ex > 500) {
//                         //     background(200);
//                         //     ex = 0;
//                         //     why = 0;
//                         // }
//                         console.log(current);
//                         for (let i = 0; i < current.length; i++) {
//                             if (current.charAt(i) == "#") {
//                                 hashes[pos] = i;
//                                 pos++;
//                             }
//                         }
//                         pos = 0;
//                         for (let i = 0; i < hashes.length; i++) {
//                             overTime[index] = current.substring(hashes[i] + 1, hashes[i + 1]);
//                             index++;
//                         }

//                     }
//                     output = " ";
//                 }
//                 //console.log(value);

//             }
//             // Connect to `port` or add it to the list of available ports.
//         })
//         .catch((e) => {
//             // The user didn't select a port.
//         });
// });
function testFunction() {

    console.log("doin it");
    let x = document.getElementById("textField");
    if (questions[p] != undefined) {
        text += "<br> > " + x.value + questions[p];
    }
    else {
        text += "<br> > " + x.value + "<br>  >...";
    }
    document.getElementById("log").innerHTML = text;
    p++;
    if (p < 6) {
        images[p].style.filter = "opacity(100%) contrast(200%)";
    }
    if (text.length > 190) {
        text = text.slice(text.length - 190);
    }



}


function randColor() {

    // let selector = Math.floor(Math.random() * 5);
    // console.log(selector);
    // let rot = Math.floor(Math.random() * 5);
    // images[selector].style.mixBlendMode = blends[rot];
}
function randCam() {
    let xPos = (Math.random() - .5) * 10;
    let yPos = (Math.random() - .5) * 10;
    let zPos = (Math.random() - .5) * 10;
    camera.position.set(xPos, yPos, zPos);
    camera.lookAt(0, 0, 0);
}
document.addEventListener('keydown', function (event) {
    randColor();
    randCam();
    let key = event.key;

    if (key === 'a') {
        typing += 'a';
    }
    else if (key === 'b') {
        typing += 'b';
    }
    else if (key === 'c') {
        typing += 'c';
    }
    else if (key === 'd') {
        typing += 'd';
    }
    else if (key === 'e') {
        typing += 'e';
    }
    else if (key === 'f') {
        typing += 'f';
    }
    else if (key === 'g') {
        typing += 'g';
    }
    else if (key === 'h') {
        typing += 'h';
    }
    else if (key === 'i') {
        typing += 'i';
    }
    else if (key === 'j') {
        typing += 'j';
    }
    else if (key === 'k') {
        typing += 'k';
    }
    else if (key === 'l') {
        typing += 'l';
    }
    else if (key === 'm') {
        typing += 'm';
    }
    else if (key === 'n') {
        typing += 'n';
    }
    else if (key === 'o') {
        typing += 'o';
    }
    else if (key === 'p') {
        typing += 'p';
    }
    else if (key === 'q') {
        typing += 'q';
    }
    else if (key === 'r') {
        typing += 'r';
    }
    else if (key === 's') {
        typing += 's';
    }
    else if (key === 't') {
        typing += 't';
    }
    else if (key === 'u') {
        typing += 'u';
    }
    else if (key === 'v') {
        typing += 'v';
    }
    else if (key === 'w') {
        typing += 'w';
    }
    else if (key === 'x') {
        typing += 'x';
    }
    else if (key === 'y') {
        typing += 'y';
    }
    else if (key === 'z') {
        typing += 'z';
    }
    else if (keyCode === 32) {
        typing += ' ';
    }
    else if (keyCode === 190) {
        typing += '.';
    }
    else if (keyCode === 191) {
        typing += '?';
    }
    else if (keyCode === 13) {
        typing += '                       \n';
    }
    else if (keyCode === 49) {
        typing += '1';
    }
    else if (keyCode === 50) {
        typing += '2';
    }
    else if (keyCode === 51) {
        typing += '3';
    }
    else if (keyCode === 52) {
        typing += '4';
    }
    else if (keyCode === 53) {
        typing += '5';
    }
    else if (keyCode === 54) {
        typing += '6';
    }
    else if (keyCode === 55) {
        typing += '7';
    }
    else if (keyCode === 56) {
        typing += '8';
    }
    else if (keyCode === 57) {
        typing += '9';
    }
    else if (keyCode === 48) {
        typing += '0';
    }

});
