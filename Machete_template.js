/* Machete template para estructura inicial de declaracion de casos de prueba */
<reference types="cypress" />
describe('', () =>{ /* Arrow function DESCRIBE dentro de comillas ingreso titulo/descripcion de CASO DE PRUEBA */
    it("Esto es un hola mundo desde Cypress", () =>{ /* Nueva arrow function anidada IT */
         cy.log("Bienvenido a Cypress") /* Comandos cypress con "cy." */
         cy.visit('https://rodrigovillanueva.com.mx/')
         /* Pagina de curso para testear */
         
    })
})