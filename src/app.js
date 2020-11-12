import * as THREE from "https://threejs.org/build/three.module.js";
import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js';

import { modelInformation } from './date.js';

let camera, scene, renderer, controls;
let geometry, material, mesh;

init();
animate();
function init() {
    camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.set( 10, 150, 350 );

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

	// scene.add( mesh );

	renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true, } );
	renderer.setSize( window.innerWidth, window.innerHeight );
    document.querySelector('main').appendChild( renderer.domElement );
    renderer.shadowMap.enabled = true;
    
    controls = new OrbitControls( camera, renderer.domElement );
    controls.maxPolarAngle = 1.50; 
    controls.rotateSpeed = 0.55; 
    controls.maxDistance = 170;
    controls.minDistance = 38;
    // controls.autoRotate = true;
    controls.enableDamping = true
    controls.autoRotateSpeed = 2;

    controls.update();
    scene.add( new THREE.AmbientLight( 0x222222 ) );

    scene.add( new THREE.AxesHelper( 20 ) );
}

let light = () => {
    const lights = Object.getOwnPropertyNames(modelInformation["lights"]["DirectionalLight"])
    lights.forEach(lightsValue => {
        let individualLights = modelInformation["lights"]["DirectionalLight"][lightsValue]

        let addLight = new THREE.DirectionalLight( individualLights.color, individualLights.power );
        addLight.position.x = individualLights["position_x"]
        addLight.position.y = individualLights["position_y"]
        addLight.position.z = individualLights["position_z"]
        addLight.castShadow = true;
        scene.add(addLight)
    })

    let AmbientLight = new THREE.AmbientLight (0x404040, 8);
    scene.add( AmbientLight )
}
light();

function animate() {
    requestAnimationFrame( animate );
    controls.update();
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

                // models.rotation.x = modelValues["rotation_x"];
                models.rotation.y = modelValues["rotation_y"];
                models.rotation.z = modelValues["rotation_z"];

                models.visible = modelValues["visible"]
                scene.add(models);
            })
        })
    })
}
loadingModels();

const checkingTheLoadingOfModels = () => {
    let numberOfModelsLoaded = 0;
    theModelThatIsBeingLoaded.forEach(folderModelName => {
        if (scene.getObjectByName(folderModelName)) {
            numberOfModelsLoaded++
            if (numberOfModelsLoaded == theModelThatIsBeingLoaded.length) {
                clearInterval(repeating)
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

const elementCloning = () => {
    Object.getOwnPropertyNames(modelInformation["copiedItems"]).forEach(item => {
        const nameFolderToClone = modelInformation["copiedItems"][item].nameFolderOfTheItemToBeCoopied
        let randomCharacters = Math.random().toString(36).substring(1)
        modelInformation["copiedItems"][item].cloneNameId = nameFolderToClone + randomCharacters

        const cloneElementValue = modelInformation["copiedItems"][item]

        let cloneElement = scene.getObjectByName(nameFolderToClone).clone();

        cloneElement.position.x = cloneElementValue["position_x"];
        cloneElement.position.y = cloneElementValue["position_y"];
        cloneElement.position.z = cloneElementValue["position_z"];

        cloneElement.scale.x = cloneElementValue["scale_x"];
        cloneElement.scale.y = cloneElementValue["scale_y"];
        cloneElement.scale.z = cloneElementValue["scale_z"];
        cloneElement.visible = cloneElementValue["visible"]
        scene.add(cloneElement);
    })
}

const functionAfterLoadingModels = () => {
    elementCloning(); // Klonowanie elementów jeżeli jakieś są
    generatingTheMenu(); // generowanie menu
    toDisplayTheMenu(); // ustawianie eventu po wygenerowaniu menu
} 

// // right menu
// document.querySelector('.auto-rotation').addEventListener('click', () => {
//     if (controls.autoRotate == false) {
//         controls.autoRotate = true;
//     }
//     else {
//         controls.autoRotate = false;
//     }
// })

// document.querySelector('.full-screen').addEventListener('click', () => document.documentElement.requestFullscreen())

// document.querySelector('.turn-off-the-menu').addEventListener('click', () => {
//     if (document.querySelector('.right-menu-bottom').style.display == "none") {
//         document.querySelector('.right-menu-bottom').style.display = "flex"
//     }
//     else {
//         document.querySelector('.right-menu-bottom').style.display = "none"
//     }
// })

const generatingTheMenu = () => {
    const data = modelInformation["models"]["modelsToDisplay"]
    const names = Object.getOwnPropertyNames(modelInformation["models"]["modelsToDisplay"])
    names.forEach(value => {
        const container = document.querySelector('.models-to-choose-from-container')

        const modelToChooseFrom = document.createElement('div');
        modelToChooseFrom.className = "model-to-choose-from";
        container.appendChild(modelToChooseFrom);
    
        const modelToChoseFromImg = document.createElement('div');
        modelToChoseFromImg.className = "model-to-chose-from-img";
        modelToChooseFrom.appendChild(modelToChoseFromImg)
    
        const imgInModelToChoseFromImg = document.createElement('img');
        imgInModelToChoseFromImg.dataset.folderName = data[value].folderName
        imgInModelToChoseFromImg.className = "selecting-the-model"
        imgInModelToChoseFromImg.src = `models/${data[value].folderName}/${data[value].imgName}.png`
        modelToChoseFromImg.appendChild(imgInModelToChoseFromImg)
    
        const h3inModelToChoseFromImg = document.createElement('h3');
        h3inModelToChoseFromImg.className = "model-to-choose-from-h3"
        h3inModelToChoseFromImg.textContent = data[value].nameTheItem;
        modelToChooseFrom.appendChild(h3inModelToChoseFromImg) 
    })
}

const displayingSelectedModels = (folderName) => {
    Object.getOwnPropertyNames(modelInformation["models"]["modelsToDisplay"]).forEach(item => {
        scene.getObjectByName(item).visible = false;
    })
    scene.getObjectByName(folderName).visible = true;
}

const displayingModelsFromTheMenu = (e) => {
    document.querySelectorAll('.selecting-the-model').forEach(item => {
        item.className = "selecting-the-model"
    })
    e.target.classList.add("selecting-the-model-active")

    console.log(e.target.dataset.folderName);
    displayingSelectedModels(e.target.dataset.folderName);
}

const toDisplayTheMenu = () => {
    document.querySelectorAll('.selecting-the-model').forEach(item => item.addEventListener('click', displayingModelsFromTheMenu))
}