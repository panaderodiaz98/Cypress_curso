/* ____________________________________________________________ */
                        /* Imports */
import Login_FSM from "../../../support/Pages/Login_FSM_page.js";
import Home_FSM from "../../../support/Pages/Home_FSM.js"
import Historico_movimientos_sap_materiales from "../../../support/Pages/Historico_movimientos_sap_materiales.js"
import Creacion_solicitud_sap from "../../../support/Pages/Creacion_solicitud_sap.js";
const login_fsm = new Login_FSM;
const home_fsm = new Home_FSM;
const movimientos_materiales = new Historico_movimientos_sap_materiales
const creacion_solcitud = new Creacion_solicitud_sap
/* ____________________________________________________________ */
                        /* Requires */
var xlsx = require('xlsx')
require('cypress-xpath')
require('cypress-plugin-tab')
require('cypress-if')
/* ____________________________________________________________ */

describe('Reserva de material no seriado', () =>{
    /* before(()=>{
        /* Loguin Azure SSO 
        login_fsm.loginFSM()
    }) */
    it('Inicio sesion y voy a Historico Movimientos SAP de los materiales', () =>{
        /* cy.Login() */
        login_fsm.loginFSM()
        home_fsm.opcion_menu_lateral("Funcionalidades")
        home_fsm.opcion_menu_lateral("Gestión de Inventario")
        home_fsm.opcion_menu_lateral("Histórico Movimientos SAP de los Materiales")
    }
    );
    it('Añadir solicitud aprovisionamiento',() =>{
        movimientos_materiales.centro_operativo("AT CABA - propio.")
        cy.wait(2000)
        movimientos_materiales.buscar().click()
        cy.wait(2000)
        movimientos_materiales.agrego_solicitud_sap_materiales().click({force:true})
    } 
    );
    it('Parametros basicos', () =>{
        /* Parametros basicos */
        creacion_solcitud.clase_movimiento("Aprovisionamiento")
        cy.wait(2000)
        creacion_solcitud.centro_operativo("AT CABA - propio.")
        cy.wait(2000)
        creacion_solcitud.lupa_equipo().click()
        cy.wait(2000)
        creacion_solcitud.emergente_busqueda_cuadrilla().if('visible').then(()=>{
            creacion_solcitud.emergente_busqueda_cuadrilla().click()
        })
        creacion_solcitud.descripcion_cuadrilla().type("auto 06")
        creacion_solcitud.buscar_cuadrilla().click()
        cy.wait(2000)
        movimientos_materiales.busco_tabla("auto 06",null,null,null).click()
        cy.wait(2000)
        creacion_solcitud.ok_cuadrilla().click()
        cy.wait(2000)
    }
    );
    it('Parametros adicionales', () =>{
        creacion_solcitud.almacen_origen_sap("CDGU - CD Guzmán")
        cy.wait(2000)
    }
    );
    it('Añadir materiales no seriados', () =>{
        creacion_solcitud.agrego_material_no_seriado().click()
        creacion_solcitud.lupa_material_no_seriado().click()
        cy.wait(2000)
        creacion_solcitud.codigo_material().type("000000000000003317")
        creacion_solcitud.buscar_material().click()
        cy.wait(2000)
        movimientos_materiales.busco_tabla("000000000000003317",null,null,null).click()
        cy.wait(2000)
        creacion_solcitud.seleccionar_material().click()
        cy.wait(2000)
        creacion_solcitud.cantidad_material_no_seriado().type("1")
        creacion_solcitud.ok_material_no_seriado().click()
        cy.wait(2000)
    }
    );
    it('Confirmo solicitud y valido agregado a la tabla', () =>{
        creacion_solcitud.guardar_solicitud_sap().click()
        cy.wait(2000)
        movimientos_materiales.busco_tabla("auto 06","ABIERTA",null,null).click()
        cy.wait(2000)
        cy.get("[alt='Opciones']").first().should("be.visible").click()
        cy.contains("Anular Solicitud").should("be.visible").click()
        cy.wait(2000)
    }
    );
    
   
        
})
