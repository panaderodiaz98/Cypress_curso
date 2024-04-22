require('cypress-plugin-tab')
describe('#Seccion 5: Primeras pruebas..CLICKS', () =>{ /* Arrow function DESCRIBE dentro de comillas ingreso titulo/descripcion de CASO DE PRUEBA */
    it("Click basico con espera de objeto", () =>{ /* Nueva arrow function anidada IT */
        cy.visit('https://rodrigovillanueva.com.mx/form/demo-application')
        cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
        cy.get("#edit-contact-address-2").scrollTo('center',{ ensureScrollable: false })
        //cy.get("#edit-contact-address-2").type('{pagodown}')
        //cy.get("#edit-contact-address-2").type('{pagoup}')
        cy.get("#edit-contact-address-2").should("be.visible").should("be.enabled").type('Exito')
        cy.get("#edit-contact-address-2").tab()
        cy.get('#webform-submission-demo-application-add-form > #edit-actions > #edit-submit').scrollTo("center",{ensureScrollable:false}).click()
        cy.wait(3000)
    })

    it("Click force", () =>{ /* Nueva arrow function anidada IT */
        cy.visit('https://rodrigovillanueva.com.mx/form/demo-application')
        cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
        cy.get("#edit-contact-address-2").scrollTo('center',{ ensureScrollable: false })
        //cy.get("#edit-contact-address-2").type('{pagodown}')
        //cy.get("#edit-contact-address-2").type('{pagoup}')
        cy.get("#edit-contact-address-2").should("be.visible").should("be.enabled").type('Exito')
        cy.get("#edit-contact-address-2").tab()
        cy.get('#webform-submission-demo-application-add-form > #edit-actions > #edit-submit').scrollTo("center",{ensureScrollable:false}).click({force:true})
        cy.wait(3000)
    })

    it("Click con coordenadas (X,Y)", () =>{ /* Nueva arrow function anidada IT */
        cy.visit('https://rodrigovillanueva.com.mx/form/demo-application')
        cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
        cy.get("#edit-contact-address-2").scrollTo('center',{ ensureScrollable: false })
        //cy.get("#edit-contact-address-2").type('{pagodown}')
        //cy.get("#edit-contact-address-2").type('{pagoup}')
        cy.get("#edit-contact-address-2").should("be.visible").should("be.enabled").type('Exito')
        cy.get("#edit-contact-address-2").tab()
        cy.get('#webform-submission-demo-application-add-form > #edit-actions > #edit-submit').scrollTo("center",{ensureScrollable:false}).click(20,20)
        cy.wait(3000)
    })
})


