/* 1- */ /* iNSTALAR PLUGIN NECESARIO PARA CARGAR ARCHIVOS EN CYPRESS "npm install --save-dev cypress-file-upload" */
/* 2- */ /* IMPORT PARA IMPLEMENTAR EN EL USO EN LAS PRUEBAS: "import 'cypress-file-upload';" */
/* 3- */ /* DESCARGAR ARCHIVO ELEGIDO EN UNA CARPETA "FIXTURES" DEL PROYECTO Y USAR */
/* 4- */ /* DEFINO CONSTANTE CON RUTA ARCHIVO EJ "CONST ruta = imagen.jpg". No hace falta pasar literalmente la ruta donde esta ubicado */
/* 5- */ /* Agrego archivo con comando "cy.get('#Objeto').should('be.visible').selectFile('cypress/fixtures/imagen.jpg');" */
import 'cypress-file-upload';
require("cypress-xpath")
describe('#Seccion 5: Primeras pruebas..CARGAR ARCHIVOS !!', () =>{ /* Arrow function DESCRIBE dentro de comillas ingreso titulo/descripcion de CASO DE PRUEBA */
    it("Cargar archivo", () =>{ /* Nueva arrow function anidada IT */
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get("#uploadPicture").should("be.visible").scrollTo("bottom")
        cy.get('#uploadPicture').should('be.visible').selectFile('cypress/fixtures/imagen.jpg');
        cy.wait(3000)

    })
})