require('cypress-plugin-tab')
describe('#Seccion 5: Primeras pruebas..TAB', () =>{ /* Arrow function DESCRIBE dentro de comillas ingreso titulo/descripcion de CASO DE PRUEBA */
    it("TAB", () =>{ /* Nueva arrow function anidada IT */
        cy.visit('https://rodrigovillanueva.com.mx/form/demo-application')
        cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
        cy.get("#edit-contact-address-2").scrollTo('center',{ ensureScrollable: false })
        //cy.get("#edit-contact-address-2").type('{pagodown}')
        //cy.get("#edit-contact-address-2").type('{pagoup}')
        cy.get("#edit-contact-address-2").type('Exito')
        cy.get("#edit-contact-address-2").tab()
        cy.wait(3000)

    })
})