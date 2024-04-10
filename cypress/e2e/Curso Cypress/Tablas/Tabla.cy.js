/* 1- */ /* iNSTALAR PLUGIN NECESARIO PARA DRAG AND DROP EN CYPRESS "npm install --save-dev @4tw/cypress-drag-drop" */ /* https://github.com/4teamwork/cypress-drag-drop */
/* 2- */ /* IMPORT PARA IMPLEMENTAR EN EL USO EN LAS PRUEBAS: "import '@4tw/cypress-drag-drop';" */
require('@4tw/cypress-drag-drop')
require("cypress-xpath")
describe('#Seccion 5: Primeras pruebas..TABLAS!!', () =>{ /* Arrow function DESCRIBE dentro de comillas ingreso titulo/descripcion de CASO DE PRUEBA */
    it("Tabla por padre/hijo", () =>{ /* Nueva arrow function anidada IT */
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.wait(3000)
        /* cy.xpath('//button[normalize-space()="Green"]').click() */
        cy.get(".btn-group").children(".btn-success").should("contain","Green").click({force:true})
    })

    it("Tabla por EQ", () =>{ /* Nueva arrow function anidada IT */
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.wait(3000)
        /* cy.xpath('//button[normalize-space()="Green"]').click() */
        cy.get("[type='button']").eq(2).should("contain","Orange").click({force:true})
    })

    it("Tabla por filter", () =>{ /* Nueva arrow function anidada IT */
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.wait(3000)
        /* cy.xpath('//button[normalize-space()="Green"]').click() */
        cy.get("[type='button']").filter(".btn-danger").click({force:true})
    })

    it("Tabla por find", () =>{ /* Nueva arrow function anidada IT */
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.wait(1000)
        /* cy.xpath('//button[normalize-space()="Green"]').click() */
        cy.get(".btn-group").find(".btn-warning").should("contain","Orange").click({force:true})
    })
    
    it("Tabla por First/last", () =>{ /* Nueva arrow function anidada IT */
    cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
    cy.wait(1000)
    /* cy.xpath('//button[normalize-space()="Green"]').click() */
    cy.get(".btn-group").find("button").first().click()
    cy.wait(1000)
    cy.get(".btn-group").find("button").last().click()
    })

    it("Tabla, seleccionar los elementos siguientes NextAll", () =>{ /* Nueva arrow function anidada IT */
    cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
    cy.wait(1000)
    /* cy.xpath('//button[normalize-space()="Green"]').click() */
    cy.get(".btn-group").children(".btn-success").should("contain","Green").nextAll().should("have.length",3)
    })

    it("Tabla, seleccionar el elemento padre", () =>{ /* Nueva arrow function anidada IT */
    cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
    cy.wait(1000)
    /* cy.xpath('//button[normalize-space()="Green"]').click() */
    cy.get("[type='button']").parent().should("have.class","btn-group")
    })

    it("Tabla reto", () =>{ /* Nueva arrow function anidada IT */
    cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
    cy.wait(1000)
    /* cy.xpath('//button[normalize-space()="Green"]').click() */
    cy.get(".btn-group").children(".btn-default").should("contain","All").click({force:true})
    cy.get("[type='checkbox']").check({force:true})
    })

    it.only("Tabla reto 2", () =>{ /* Nueva arrow function anidada IT */
    cy.visit("https://demo.seleniumeasy.com/table-sort-search-demo.html")
    cy.wait(1000)
        const datos = []
        /* cy.xpath('//button[normalize-space()="Green"]').click() */
        /* cy.xpath("//tr[@class='odd' or 'even']").each(($filas,index,$list)=>{ */
        cy.xpath("//td").each(($filas,index,$list)=>{
            datos[index] = $filas.text()
        }).then(()=>{
            for(let i = 0; i <= datos.length; i++)
            {
                datos[i]
                cy.log("Td" + " " + i + " " + datos[i])
            }
        })
    
    })
})
