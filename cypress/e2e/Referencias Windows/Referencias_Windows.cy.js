require("cypress-xpath")
describe('#Seccion 5: Primeras pruebas..REFERENCIAS WINDOWS', () =>{ /* Arrow function DESCRIBE dentro de comillas ingreso titulo/descripcion de CASO DE PRUEBA */
    it("Referencias windows", () =>{ /* Nueva arrow function anidada IT */
        cy.visit('https://demo.seleniumeasy.com/table-search-filter-demo.html')
        cy.title().should('eq','Selenium Easy - Table Data search and filter data')
        cy.wait(3000)
        cy.document().should("have.property","charset").and("eq","UTF-8")
        cy.url().should("include","table-search-filter-demo.html") /* Valido una parte de la URL */
        cy.url().should("eq","https://demo.seleniumeasy.com/table-search-filter-demo.html") /* Valido URL exacta */

    })
})