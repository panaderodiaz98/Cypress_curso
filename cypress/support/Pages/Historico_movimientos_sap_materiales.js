class Historico_movimientos_sap_materiales{
    centro_operativo(centro){
        return cy.get("[class = 'f fN fE']").should("be.visible").select(centro)
    }
    buscar(){
        return cy.contains("Buscar").should("be.visible")
    }
    busco_tabla(opcion1,opcion2,opcion3,opcion4){
        
        if(opcion1 !== null && opcion2 === null && opcion3 === null && opcion4 === null)
        {
           return cy.get("tr")
            .contains("td", opcion1)
            .should("be.visible")
        }
        if(opcion1 !== null && opcion2 !== null && opcion3 === null && opcion4 === null)
        {
            return cy.get("tr")
            .contains("td", opcion1)
            .siblings()
            .contains("td", opcion2)
            .should("be.visible")
        }
        if(opcion1 !== null && opcion2 !== null && opcion3 !== null && opcion4 === null)
        {
            return cy.get("tr")
            .contains("td", opcion1)
            .siblings()
            .contains("td", opcion2)
            .siblings()
            .contains("td", opcion3)
            .should("be.visible")
        }
        if(opcion1 !== null && opcion2 !== null && opcion3 !== null && opcion4 !== null)
        {
            return cy.get("tr")
            .contains("td", opcion1)
            .siblings()
            .contains("td", opcion2)
            .siblings()
            .contains("td", opcion3)
            .siblings()
            .contains("td", opcion4)
            .should("be.visible")
        } 
        /* cy.get("tr")
            .contains("td", "8881")
            .siblings()
            .contains("td", "CERRADA")
            .should("be.visible") */
    }
    agrego_solicitud_sap_materiales(){
        return cy.contains("Añadir Solicitud SAP de Materiales").should("be.visible")
    }
}
export default Historico_movimientos_sap_materiales