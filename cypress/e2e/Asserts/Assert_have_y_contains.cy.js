require("cypress-xpath")
describe('#Seccion 5: Primeras pruebas..ASSERT HAVE Y CONTAINS', () =>{ /* Arrow function DESCRIBE dentro de comillas ingreso titulo/descripcion de CASO DE PRUEBA */
    it("HAVE Y CONTAINS", () =>{ /* Nueva arrow function anidada IT */
        cy.visit('https://demo.seleniumeasy.com/table-search-filter-demo.html')
        cy.title().should('eq','Selenium Easy - Table Data search and filter data')
        cy.get('h2').should("have.text","Type in your search to filter data by Tasks / Assignee / Status ")
        cy.get('h2').should("contains.text","Type in your search")
        cy.wait(3000)
        

    })
})