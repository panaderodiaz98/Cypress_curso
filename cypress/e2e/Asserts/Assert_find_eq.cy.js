require('cypress-xpath')
describe('#Seccion 5: Primeras pruebas..ASSERT CONTAINS', () =>{ /* Arrow function DESCRIBE dentro de comillas ingreso titulo/descripcion de CASO DE PRUEBA */
    it("CONTAINS", () =>{ /* Nueva arrow function anidada IT */
        cy.visit('https://demo.seleniumeasy.com/table-search-filter-demo.html')
        cy.title().should('eq','Selenium Easy - Table Data search and filter data')
        cy.get('#task-table > tbody').find(":nth-child").eq(1).click()
        cy.wait(3000)
        

    })
})