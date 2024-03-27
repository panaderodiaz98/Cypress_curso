/* 1. Instalar dependencia xpath "npm install -D cypress-xpath" */
/* 2. Agregar el comando en el archivo "require('cypress-xpath')" para que reconozca la funcion xpath */
/* 3. Misma idea de crear XPATHS que selenium */
require('cypress-xpath')

describe('#Seccion 5: Primeras pruebas..ALIAS', () =>{ /* Arrow function DESCRIBE dentro de comillas ingreso titulo/descripcion de CASO DE PRUEBA */
    it("Objetos por Alias", () =>{ /* Nueva arrow function anidada IT */
        cy.visit('https://rodrigovillanueva.com.mx/form/demo-application')
        cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
        cy.xpath("//input[@name='contact[name]']").should("be.visible").as("nombre")
        cy.get("@nombre").type("Hola")
        cy.wait(3000)

    })
})