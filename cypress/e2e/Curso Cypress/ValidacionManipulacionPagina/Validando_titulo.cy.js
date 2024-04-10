describe('#Seccion 5: Primeras pruebas..Validando titulo de pagina', () =>{ /* Arrow function DESCRIBE dentro de comillas ingreso titulo/descripcion de CASO DE PRUEBA */
    it("Esto es una validacion de titulo de pagina", () =>{ /* Nueva arrow function anidada IT */

    cy.visit('https://rodrigovillanueva.com.mx/')
    cy.title().should('eq','Home Page | RodrigoVillanueva.com.mx')
         
    })
})