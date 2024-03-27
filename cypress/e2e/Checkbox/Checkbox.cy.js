describe('#Seccion 5: Primeras pruebas..CHECKBOX', () =>{ /* Arrow function DESCRIBE dentro de comillas ingreso titulo/descripcion de CASO DE PRUEBA */
    it("CHECKBOX", () =>{ /* Nueva arrow function anidada IT */
        cy.visit('https://demo.seleniumeasy.com/basic-checkbox-demo.html')
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
        cy.get('#isAgeSelected').check().should('be.checked')
        cy.wait(3000)
        cy.get('#isAgeSelected').uncheck().should('not.be.checked')

    })
})