/* 1. Instalar dependencia xpath "npm install -D cypress-xpath" */
/* 2. Agregar el comando en el archivo "require('cypress-xpath')" para que reconozca la funcion xpath */
/* 3. Misma idea de crear XPATHS que selenium */
require('cypress-xpath')

describe('#Seccion 5: Primeras pruebas..Selector por XPATH', () =>{ /* Arrow function DESCRIBE dentro de comillas ingreso titulo/descripcion de CASO DE PRUEBA */
    it("XPATH", () =>{ /* Nueva arrow function anidada IT */
        cy.visit('https://rodrigovillanueva.com.mx/form/demo-application')
        cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
        cy.xpath("//input[@name='contact[name]']").type("Hola")
        cy.wait(3000)

    })
})