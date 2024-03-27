/* 1- */ /* iNSTALAR PLUGIN NECESARIO PARA DRAG AND DROP EN CYPRESS "npm install --save-dev @4tw/cypress-drag-drop" */ /* https://github.com/4teamwork/cypress-drag-drop */
/* 2- */ /* IMPORT PARA IMPLEMENTAR EN EL USO EN LAS PRUEBAS: "import '@4tw/cypress-drag-drop';" */
require('@4tw/cypress-drag-drop')
require("cypress-xpath")
describe('#Seccion 5: Primeras pruebas..DRAG AND DROP !!', () =>{ /* Arrow function DESCRIBE dentro de comillas ingreso titulo/descripcion de CASO DE PRUEBA */
    it("Drag and drop", () =>{ /* Nueva arrow function anidada IT */
        cy.visit("https://demo.seleniumeasy.com/drag-and-drop-demo.html")
        cy.get('#todrag > :nth-child(2)').drag('#mydropzone')
        cy.wait(3000)

    })
})