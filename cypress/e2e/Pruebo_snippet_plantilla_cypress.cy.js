describe('titulo', () =>{
    it('descripcion prueba', () =>{

        cy.visit('url')
        cy.title().should('eq','titulo url')
        cy.wait(1000)

    })
})