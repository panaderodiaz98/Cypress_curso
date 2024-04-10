describe('#Seccion 5: Primeras pruebas..ASSERT CONTAINS', () =>{ /* Arrow function DESCRIBE dentro de comillas ingreso titulo/descripcion de CASO DE PRUEBA */
    it("CONTAINS", () =>{ /* Nueva arrow function anidada IT */
        cy.visit('https://demo.seleniumeasy.com/basic-checkbox-demo.html')
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
        cy.get('.navbar > .container').contains("Table").click()
        cy.wait(3000)
        

    })
})