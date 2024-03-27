describe('#Seccion 5: Primeras pruebas..Selector por ATRIBUTO', () =>{ /* Arrow function DESCRIBE dentro de comillas ingreso titulo/descripcion de CASO DE PRUEBA */
    it("ATRIBUTO", () =>{ /* Nueva arrow function anidada IT */
        cy.visit('https://rodrigovillanueva.com.mx/form/demo-application')
        cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
        cy.get("[name='contact[name]']").type("Hola") /* Atributo entre corchetes y valor entre comillas simples */
        cy.wait(3000)

    })
})