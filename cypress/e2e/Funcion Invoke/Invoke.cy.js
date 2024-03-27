/* 1. Instalar dependencia xpath "npm install -D cypress-xpath" */
/* 2. Agregar el comando en el archivo "require('cypress-xpath')" para que reconozca la funcion xpath */
/* 3. Misma idea de crear XPATHS que selenium */
require('cypress-xpath')

describe('#Seccion 5: Primeras pruebas..Funcion INVOKE', () =>{ /* Arrow function DESCRIBE dentro de comillas ingreso titulo/descripcion de CASO DE PRUEBA */
    it("Funcion Invoke", () =>{ /* Nueva arrow function anidada IT */
        cy.visit('https://demo.seleniumeasy.com/basic-select-dropdown-demo.html')
        cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
        cy.xpath("//p[contains(text(),'Hola carlos')]").invoke("text").as("textoObtenido")
        cy.wait(1500)
        cy.get("@textoObtenido").should("contain","Selected value from the list will display below th")

    })
})