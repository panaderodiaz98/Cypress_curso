describe('#Seccion 5: Primeras pruebas..Selector ID', () =>{ /* Arrow function DESCRIBE dentro de comillas ingreso titulo/descripcion de CASO DE PRUEBA */
    it("ID", () =>{ /* Nueva arrow function anidada IT */
        cy.visit('https://rodrigovillanueva.com.mx/form/demo-application')
        cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
        cy.get("#edit-contact-address-2").scrollTo('center',{ ensureScrollable: false }) /* Selector ID */
        cy.wait(3000)

    })
})