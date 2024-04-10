describe('#Seccion 5: Primeras pruebas..SELECT CON PROMESA', () =>{ /* Arrow function DESCRIBE dentro de comillas ingreso titulo/descripcion de CASO DE PRUEBA */
    it.only("SELECT PROMESA", () =>{ /* Nueva arrow function anidada IT */
        cy.visit('https://demo.seleniumeasy.com/basic-select-dropdown-demo.html')
        cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
        cy.get('#multi-select').should("be.enabled").select(["California","Ohio","New York"]).then(()=>{
            cy.get('#printAll').should("be.enabled").click()
        })
        cy.wait(4000)
        
    })
})