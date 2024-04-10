describe('CUSTOM COMANDS', () =>{
    it('Creando comandos y llamandolos desde el caso de prueba', () =>{
        /* Visita a url tradicinal */
        //cy.visit('https://demo.seleniumeasy.com/basic-select-dropdown-demo.html')
        //cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
        //cy.wait(1000)

        /* Visita url mediante custom comands (librerias) */
        cy.abro_URL('https://demo.seleniumeasy.com/basic-select-dropdown-demo.html','Selenium Easy Demo - Automate All Scenarios')
    })
})