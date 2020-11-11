export const modelInformation = {
    models: {
        //  PRZYKŁAD 
        // =================================

        // fixedModels: { // kategoria modeli
        //     "Substance-Wood-Floor":  { //Nazwa modelu
        //         folderName: "Substance-Wood-Floor", // Nazwa folderu w którym znajdują się modele w formacie gltf
        //         nameTheItem: "Podłoga", // polskie tłumaczenie do menu
        //         scale_x: 0.04,
        //         scale_y: 0.04,
        //         scale_z: 0.04,
        //         position_x: 0,
        //         position_y: 0,
        //         position_z: 0,
        //         rotation_x: 0,
        //         rotation_y: 0,
        //         rotation_z: 0,
        //         visible: true,
        //     },
        // },

        // =========================================
        fixedModels: {
            "room":  {
                folderName: "room",
                nameTheItem: "Pokój",
                scale_x: 0.4,
                scale_y: 0.4,
                scale_z: 0.4,
                position_x: 0,
                position_y: 0,
                position_z: 0,
                rotation_x: 0,
                rotation_y: 0,
                rotation_z: 0,
                visible: true,
            },
        },
        modelsToDisplay: {
            "Table-and-chairs":  {
                folderName: "Table-and-chairs",
                nameTheItem: "Stół i krzesła",
                imgName: "", 
                scale_x: 25,
                scale_y: 25,
                scale_z: 25,
                position_x: -30,
                position_y: -80,
                position_z: -10,
                rotation_x: 0,
                rotation_y: 0,
                rotation_z: 0,
                visible: false,
            },
            "Trim-sheet-example":  {
                folderName: "Trim-sheet-example",
                nameTheItem: "Mały stolik",
                imgName: "", 
                scale_x: 0.4,
                scale_y: 0.4,
                scale_z: 0.4,
                position_x: 0,
                position_y: 0,
                position_z: -10,
                rotation_x: 0,
                rotation_y: 0,
                rotation_z: 0,
                visible: false,
            },
            "Victorian-Lounge-Sofa":  {
                folderName: "Victorian-Lounge-Sofa",
                nameTheItem: "Sofa",
                imgName: "", 
                scale_x: 60,
                scale_y: 60,
                scale_z: 60,
                position_x: 0,
                position_y: 30,
                position_z: 0,
                rotation_x: 0,
                rotation_y: 0,
                rotation_z: 0,
                visible: true,
            },
            "Wolf-rokoko-table":  {
                folderName: "Wolf-rokoko-table",
                nameTheItem: "Stół",
                imgName: "", 
                scale_x: 4,
                scale_y: 4,
                scale_z: 4,
                position_x: 0,
                position_y: 0,
                position_z: 0,
                rotation_x: 0,
                rotation_y: 0,
                rotation_z: 0,
                visible: false,
            },
        }
    },
    lights: {
        DirectionalLight: {
            "centerLight": {
                color: "white",
                power: 0.6,
                position_x: 0,
                position_y: 15,
                position_z: 0
            },
            "rightLight": {
                color: "white",
                power: 0.8,
                position_x: 50,
                position_y: 3,
                position_z: 0
            },
            "leftLight": {
                color: "white",
                power: 0.8,
                position_x: -50,
                position_y: 3,
                position_z: 0
            },
            "frontLight": {
                color: "white",
                power: 0.8,
                position_x: 0,
                position_y: 3,
                position_z: -50
            },
            "backLight": {
                color: "white",
                power: 0.8,
                position_x: 0,
                position_y: 3,
                position_z: 50
            }
        },
        AmbientLight: {
            "backLight1": {
                color: "white",
                power: 0.7,
                position_x: 0,
                position_y: 3,
                position_z: 30
            }
        }
    },

    copiedItems: {
        //PRZYKŁAD 
                // ==============================
        // "nameOfTheClones1": { // wartośc bez znaczenia. 
        //     nameFolderOfTheItemToBeCoopied: "Substance-Wood-Floor", // nazwa folderu z którego trzeba przekopiować wartości
        //     cloneNameId: "default", // Name id które nadaje się po przekopiowaniu wartości. Można modyfikować klon posiadając jego wartość.
        //     scale_x: 0.04,
        //     scale_y: 0.04,
        //     scale_z: 0.04,
        //     position_x: 0,
        //     position_y: 0,
        //     position_z: -120,
        //     rotation_x: 0,
        //     rotation_y: 0,
        //     rotation_z: 0,
        //     visible: true
        // },
        // ==============================
    }
};
