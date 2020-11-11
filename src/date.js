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
                visible: false,
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
                visible: true,
            },
        }
    },
    lights: {
        DirectionalLight: {
            "centerLight": {
                color: 0,
                power: 0,
                position_x: 0,
                position_y: 0,
                position_z: 0
            },
            "rightLight": {
                color: 0,
                power: 0,
                position_x: 0,
                position_y: 0,
                position_z: 0
            },
            "leftLight": {
                color: 0,
                power: 0,
                position_x: 0,
                position_y: 0,
                position_z: 0
            },
            "frontLight": {
                color: 0,
                power: 0,
                position_x: 0,
                position_y: 0,
                position_z: 0
            },
            "backLight": {
                color: 0,
                power: 0,
                position_x: 0,
                position_y: 0,
                position_z: 0
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

        // "nameOfTheClones1": {
        //     nameFolderOfTheItemToBeCoopied: "Substance-Wood-Floor",
        //     cloneNameId: "default",
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
        // "nameOfTheClones2": {
        //     nameFolderOfTheItemToBeCoopied: "Substance-Wood-Floor",
        //     cloneNameId: "default",
        //     scale_x: 0.04,
        //     scale_y: 0.04,
        //     scale_z: 0.04,
        //     position_x: 0,
        //     position_y: 0,
        //     position_z: 120,
        //     rotation_x: 0,
        //     rotation_y: 0,
        //     rotation_z: 0,
        //     visible: true
        // },
        // "nameOfTheClones3": {
        //     nameFolderOfTheItemToBeCoopied: "Substance-Wood-Floor",
        //     cloneNameId: "default",
        //     scale_x: 0.04,
        //     scale_y: 0.04,
        //     scale_z: 0.04,
        //     position_x: 120,
        //     position_y: 0,
        //     position_z: 0,
        //     rotation_x: 0,
        //     rotation_y: 0,
        //     rotation_z: 0,
        //     visible: true
        // },
        // "nameOfTheClones4": {
        //     nameFolderOfTheItemToBeCoopied: "Substance-Wood-Floor",
        //     cloneNameId: "default",
        //     scale_x: 0.04,
        //     scale_y: 0.04,
        //     scale_z: 0.04,
        //     position_x: -120,
        //     position_y: 0,
        //     position_z: 0,
        //     rotation_x: 0,
        //     rotation_y: 0,
        //     rotation_z: 0,
        //     visible: true
        // },

        // "nameOfTheClones55": {
        //     nameFolderOfTheItemToBeCoopied: "Substance-Wood-Floor",
        //     cloneNameId: "default",
        //     scale_x: 0.04,
        //     scale_y: 0.04,
        //     scale_z: 0.04,
        //     position_x: 120,
        //     position_y: 0,
        //     position_z: -120,
        //     rotation_x: 0,
        //     rotation_y: 0,
        //     rotation_z: 0,
        //     visible: true
        // },
        // "nameOfTheClones216216": {
        //     nameFolderOfTheItemToBeCoopied: "Substance-Wood-Floor",
        //     cloneNameId: "default",
        //     scale_x: 0.04,
        //     scale_y: 0.04,
        //     scale_z: 0.04,
        //     position_x: -120,
        //     position_y: 0,
        //     position_z: 120,
        //     rotation_x: 0,
        //     rotation_y: 0,
        //     rotation_z: 0,
        //     visible: true
        // },
        // "nameOfTheClones34214": {
        //     nameFolderOfTheItemToBeCoopied: "Substance-Wood-Floor",
        //     cloneNameId: "default",
        //     scale_x: 0.04,
        //     scale_y: 0.04,
        //     scale_z: 0.04,
        //     position_x: -120,
        //     position_y: 0,
        //     position_z: -120,
        //     rotation_x: 0,
        //     rotation_y: 0,
        //     rotation_z: 0,
        //     visible: true
        // },
        // "nameOfTheClones46216": {
        //     nameFolderOfTheItemToBeCoopied: "Substance-Wood-Floor",
        //     cloneNameId: "default",
        //     scale_x: 0.04,
        //     scale_y: 0.04,
        //     scale_z: 0.04,
        //     position_x: 120,
        //     position_y: 0,
        //     position_z: 120,
        //     rotation_x: 0,
        //     rotation_y: 0,
        //     rotation_z: 0,
        //     visible: true
        // },
    }
};
