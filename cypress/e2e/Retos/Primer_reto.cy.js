describe('Primer reto con Cypress', () =>{
    it("Esto es el primer reto desde Cypress, agregar registro en tabla", () =>{
         cy.log("Reto agrego registro en la tabla")
         /* Logueo pagina */
         cy.visit('https://validaciones.rodrigovillanueva.com.mx/Datatables_OK.html')
         cy.get('.mb-3').should("be.visible").should("be.enabled").click()
         cy.wait(1000)
         /* Lleno campos */
         cy.get('#nombre').should("be.visible").should("be.enabled").type('Ramiro')
         cy.get('#apellidos').should("be.visible").should("be.enabled").type('Marra')
         cy.get('#telefono').should("be.visible").should("be.enabled").type('1161978953')
         /* Agrego formulario */
         cy.get('#recordForm > .btn-primary').should("be.visible").should("be.enabled").click()
         cy.wait(1000)
         cy.get('.close').click()
         cy.get('label > input').should("be.enabled").type("Marra")
    })
})
