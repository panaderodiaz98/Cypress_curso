describe('#Seccion 5: Primeras pruebas..SELECTS', () =>{ /* Arrow function DESCRIBE dentro de comillas ingreso titulo/descripcion de CASO DE PRUEBA */
    it("SELECT forma uno", () =>{ /* Nueva arrow function anidada IT */
        cy.visit('https://demo.seleniumeasy.com/basic-select-dropdown-demo.html')
        cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
        cy.get("#select-demo").should("be.enabled").select("Sunday").should("have.value","Sunday")
        cy.wait(4000)
        cy.get("#select-demo").should("be.enabled").should("have.value","Sunday")
    })
    it.only("MULTI SELECT forma dos", () =>{ /* Nueva arrow function anidada IT */
        cy.visit('https://demo.seleniumeasy.com/basic-select-dropdown-demo.html')
        cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
        cy.get('#multi-select').should("be.enabled").select(["California","Ohio","New York"])
        cy.wait(4000)
    })
})