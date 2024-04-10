describe('#Seccion 5: Primeras pruebas..Scrollto - PageUP - PageDown', () =>{ /* Arrow function DESCRIBE dentro de comillas ingreso titulo/descripcion de CASO DE PRUEBA */
    it("Scrollto - PageUP - PageDown", () =>{ /* Nueva arrow function anidada IT */
        cy.visit('https://rodrigovillanueva.com.mx/form/demo-application')
        cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
        cy.get("#edit-contact-address-2").scrollTo('center',{ ensureScrollable: false })
        //cy.get("#edit-contact-address-2").type('{pagodown}')
        //cy.get("#edit-contact-address-2").type('{pagoup}')
        cy.get("#edit-contact-address-2").type('Exito')
        cy.wait(3000)

    })
})