/* 1- */ /* iNSTALAR PLUGIN NECESARIO PARA DRAG AND DROP EN CYPRESS "npm install --save-dev @4tw/cypress-drag-drop" */ /* https://github.com/4teamwork/cypress-drag-drop */
/* 2- */ /* IMPORT PARA IMPLEMENTAR EN EL USO EN LAS PRUEBAS: "import '@4tw/cypress-drag-drop';" */
require('@4tw/cypress-drag-drop')
require("cypress-xpath")
describe('#Seccion 5: Primeras pruebas..MOUSE OVER !!', () =>{ /* Arrow function DESCRIBE dentro de comillas ingreso titulo/descripcion de CASO DE PRUEBA */
    it("Mouse over", () =>{ /* Nueva arrow function anidada IT */
        cy.viewport(1400,720)
        cy.visit("https://rodrigovillanueva.com.mx/form/contact")
        cy.wait(3000)
        cy.contains("Prácticas").trigger("mouseover")

    })
})