class Creacion_solicitud_sap{
    /* _________________________________________________________________________________________________________________________________________ */
                                                        /* Detalle solicitud SAP */
    guardar_solicitud_sap(){
        return cy.get("[tabindex = '661']").should("be.visible")
    }                 
    /* _________________________________________________________________________________________________________________________________________ */
                                                        /* Parametros Basicos */

    clase_movimiento(movimiento){
        return cy.get("[tabindex = '91']").should("be.visible").select(movimiento)
    }
    centro_operativo(centro){
        return cy.get("[tabindex = '121']").should("be.visible").select(centro)
    }
    lupa_equipo()
    {
        return cy.get("[tooltip='Buscar']").should("be.visible")
    }
    /* _________________________________________________________________________________________________________________________________________ */
                                                        /* Parametros Adicionales */

    almacen_origen_sap(almacen){
        return cy.get("[tabindex = '221']").should("be.visible").select(almacen)
    }
    urgente(){
        return cy.get("[tabindex = '391']").should("be.visible")
    }
    /* _________________________________________________________________________________________________________________________________________ */
                                                        /* Lista materiales */
    agrego_material_no_seriado(){
        return cy.contains(" Añadir Material No Seriado").should("be.visible")
        /* return cy.get("[alt='Añadir Material No Seriado']").should("be.visible") */
    }
    agrego_material_seriado(){
        return cy.contains(" Añadir Material Seriado").should("be.visible")
    }
    /* _________________________________________________________________________________________________________________________________________ */
                                                        /* Busqueda cuadrilla */
    descripcion_cuadrilla(){
        return cy.get("[tabindex = '751']").should("be.visible")
    }
    codigo_cuadrilla(){
        return cy.get("[tabindex = '741']").should("be.visible")
    }
    buscar_cuadrilla(){
        return cy.get("[tabindex = '811']").should("be.visible") 
    }
    ok_cuadrilla(){
        return cy.get("[tabindex = '891']").should("be.visible")
    }
    emergente_busqueda_cuadrilla()
    {
        return cy.contains("Búsqueda Cuadrilla").should("be.visible")
    }
    /* _________________________________________________________________________________________________________________________________________ */
                                                        /* Nueva posicion del movimiento */
    lupa_material_no_seriado(){
        return cy.get("[tabindex = '1012']").first().should("be.visible")
    }
    lupa_material_seriado(){
        return cy.get("[tabindex = '1232']").first().should("be.visible")
    }
    cantidad_material_no_seriado(){
        return cy.get("[tabindex = '1051']").should("be.visible")
    }
    cantidad_material_seriado(){
        return cy.get("[tabindex = '1271']").should("be.visible")
    }
    ok_material_no_seriado(){
        return cy.get("[tabindex = '1091']").should("be.visible")
    }
    ok_material_seriado(){
        return cy.get("[tabindex = '1301']").should("be.visible")
    }
    /* _________________________________________________________________________________________________________________________________________ */
                                                        /* Seleccionar material */
    codigo_material(){
        return cy.get("[tabindex = '1881']").should("be.visible") 
    }
    buscar_material(){
        return cy.get("[tabindex = '2071']").should("be.visible") 
    } 
    seleccionar_material(){
        return cy.get("[tabindex = '2231']").should("be.visible") 
    }
    
}   
export default Creacion_solicitud_sap