import datos from '../../fixtures/datos.json'
describe('Tomar datos por archivos', () =>{   
    /* Funcion/metodo before, para que antes de ejecucion tome la info */
    
    it('json', () =>{
        cy.visit('https://rodrigovillanueva.com.mx/form/demo-application')
        cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
        cy.get("#edit-contact-address-2").scrollTo('center',{ ensureScrollable: false })
        cy.get("#edit-contact-address-2").type(datos.name)
        cy.wait(3000)


    })

    it.only('json recorro multiples datos', () =>{
        cy.visit('https://rodrigovillanueva.com.mx/form/demo-application')
        cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
        /* En lugar de importar, llamo "cy.fixture("arhivo") y recorro con un foreach*/
        cy.fixture("datos").then(function(data){ /* Inicializo archivo en variable DATA */
            data.forEach(cadaArreglo => { /* Recorro arreglo json donde almaceno cada recorrida en variable CADAARREGLO */
                const nombre = cadaArreglo.name /* Llamo en cada corrida los inputs correspondientes */
                const mail = cadaArreglo.email /* Llamo en cada corrida los inputs correspondientes */
                const tel = cadaArreglo.celular
                cy.get('#edit-contact-name').clear().type(nombre)
                cy.wait(1000)
                cy.get('#edit-contact-email').clear().type(mail)
                cy.wait(1000)
                cy.get('#edit-contact-phone').clear().type(tel)
                cy.wait(1000)
            });
        })
       


    })
})