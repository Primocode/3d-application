import * as THREE from "https://threejs.org/build/three.module.js";
import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js';

import { modelInformation } from './date.js';


let camera, scene, renderer, controls;
let geometry, material, mesh;

init();
animate();

function init() {
    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.set( 10, 100, 150 );

    const sceneBackground = "#fafafa";
    scene = new THREE.Scene();
    scene.background = new THREE.Color(sceneBackground);

	geometry = new THREE.BoxGeometry( 2, 2, 2 );
    material = new THREE.MeshPhongMaterial({
        color: "white"
    })
    
    material.side = THREE.BackSide;

    mesh = new THREE.Mesh( geometry, material );
    mesh.scale.set(160,160,160)
    mesh.position.y = 158;
    mesh.receiveShadow = true;

	scene.add( mesh );

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    renderer.shadowMap.enabled = true;
    
    controls = new OrbitControls( camera, renderer.domElement );
    controls.maxPolarAngle = 1.50; 
    // controls.rotateSpeed = 0.35; 
    controls.maxDistance = 170;
    controls.minDistance = 38;
    controls.update();
    scene.add( new THREE.AmbientLight( 0x222222 ) );

    scene.add( new THREE.AxesHelper( 20 ) );
}

let light = () => {
    const lightCenter = new THREE.DirectionalLight( 0xffffff, 0.2 );
    lightCenter.castShadow = true;
    lightCenter.position.x = 0;
    lightCenter.position.y = 15;
    lightCenter.position.z = 0;
    scene.add( lightCenter );

    const light = new THREE.DirectionalLight( 0xffffff, 0.7 );
    light.castShadow = true;
    light.position.x = 0;
    light.position.y = 15;
    light.position.z = -30;
    scene.add( light );

    const lightSecond = new THREE.DirectionalLight( 0xffffff, 0.7 );
    lightSecond.position.x = 0;
    lightSecond.position.y = 2;
    lightSecond.position.z = 30;
    scene.add(lightSecond);

    const lightThird = new THREE.DirectionalLight( 0xffffff, 0.7 );
    lightThird.position.x = 30;
    lightThird.position.y = 2;
    lightThird.position.z = 0;
    scene.add(lightThird);

    const lightFourth = new THREE.DirectionalLight( 0xffffff, 0.7 );
    lightFourth.position.x = -30;
    lightFourth.position.y = 2;
    lightFourth.position.z = 0;
    scene.add(lightFourth);
}
light();

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

const handleResize = () => {
    const { innerWidth, innerHeight } = window;
    renderer.setSize(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
}
addEventListener('resize', handleResize)

let theModelThatIsBeingLoaded = []

let loader = new GLTFLoader();
const loadingModels = () => {
    Object.getOwnPropertyNames(modelInformation["models"]).forEach(modelCategory => {
        Object.getOwnPropertyNames(modelInformation["models"][modelCategory]).forEach(categoryValues => {
            const modelValues = modelInformation["models"][modelCategory][categoryValues]
            theModelThatIsBeingLoaded.push(modelValues.folderName)
            console.log(modelValues)
            loader.load(`./models/${modelValues.folderName}/scene.gltf`, function(gltf) {
                let models = gltf.scene.children[0]
                models.name = modelValues.folderName

                // default values
                models.position.x = modelValues["position_x"];
                models.position.y = modelValues["position_y"];
                models.position.z = modelValues["position_z"];

                models.scale.x = modelValues["scale_x"];
                models.scale.y = modelValues["scale_y"];
                models.scale.z = modelValues["scale_z"];
                models.visible = modelValues["visible"]
                scene.add(models);
            })
        })
    })
}
loadingModels();

const checkingTheLoadingOfModels = () => {
    let numberOfModelsLoaded = 0;
    console.log(theModelThatIsBeingLoaded);
    theModelThatIsBeingLoaded.forEach(folderModelName => {
        if (scene.getObjectByName(folderModelName)) {
            numberOfModelsLoaded++
            if (numberOfModelsLoaded == theModelThatIsBeingLoaded.length) {
                clearInterval(repeating)
                console.log("Wszystkie modele zostały załadowane")
                document.querySelector('.loading-screen').className = "loading-screen-none"
                functionAfterLoadingModels();
            }
        }
    })
}

let repeating = setInterval(checkingTheLoadingOfModels, 100)
if (theModelThatIsBeingLoaded.length == 0) {
    clearInterval(repeating)
}

let cloneListId = [];

let wartosci = ["35", "95"]
    
const functionAfterLoadingModels = () => {
    // console.log(scene.getObjectByName("HLB-Milano"))
    // for (let i = 0; i < 2; i++) {
    //     let cloneElement = scene.getObjectByName("HLB-Milano").clone()
    //     cloneElement.position.x = wartosci[i]
    //     scene.add(cloneElement)
    //     console.log("ile?")
    // }



    // let newBed = scene.getObjectByName("HLB-Milano").clone();

    // console.log(newBed)

    // newBed.position.x = 35;

    // scene.add(newBed)
}