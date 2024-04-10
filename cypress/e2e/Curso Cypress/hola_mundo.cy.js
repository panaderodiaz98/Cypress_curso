    describe('Primer Test con Cypress', () =>{
        it("Esto es un hola mundo desde Cypress", () =>{
             cy.log("Bienvenido a Cypress")
             cy.visit('https://www.google.com.ar/')
             cy.get("#APjFqb").type("Probando")
             cy.wait(3000)
             
        })
    })
