require("cypress-xpath")
describe('#Seccion 5: Primeras pruebas..ASSERT TEXT', () =>{ /* Arrow function DESCRIBE dentro de comillas ingreso titulo/descripcion de CASO DE PRUEBA */
    it("TEXT", () =>{ /* Nueva arrow function anidada IT */
        cy.visit('https://demo.seleniumeasy.com/table-search-filter-demo.html')
        cy.title().should('eq','Selenium Easy - Table Data search and filter data')
        cy.xpath("//td[text()='Mike Trout']").then((e)=>{
          let texto=e.text()
          if(texto=="Mike Trout"){
           cy.log("Texto correcto")
          }
        })
        cy.wait(3000)
        

    })
})