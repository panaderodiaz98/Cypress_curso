describe('#Seccion 5: Primeras pruebas..Selector por CONTAINS', () =>{ /* Arrow function DESCRIBE dentro de comillas ingreso titulo/descripcion de CASO DE PRUEBA */
    it("CONTAINS", () =>{ /* Nueva arrow function anidada IT */
        cy.visit('https://rodrigovillanueva.com.mx/form/demo-application')
        cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
        cy.get(".webform-button--submit button button--primary js-form-submit form-submit").contains("Submit").scrollTo('bottom',{ ensureScrollable: false })
        cy.wait(3000)

    })
})