describe('#Seccion 5: Primeras pruebas..Type-Enter', () =>{ /* Arrow function DESCRIBE dentro de comillas ingreso titulo/descripcion de CASO DE PRUEBA */
    it("Ingresando funcion enter", () =>{ /* Nueva arrow function anidada IT */
         cy.log("Bienvenido a Cypress") /* Comandos cypress con "cy." */
         cy.visit('https://www.google.com.ar/') 
         cy.get("#APjFqb").type("cypress io{enter}")
         cy.wait(3000)
         cy.get("#rso > div.hlcw0c > div > div > div > div > div > div > div > div.yuRUbf > div > span > a > h3").click()
         /* Pagina de curso para testear */
         
         
    })
})