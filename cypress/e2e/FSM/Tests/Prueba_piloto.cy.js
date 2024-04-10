import Login_FSM from "../Pages/Login_FSM_page.cy.js";
const login_fsm = new Login_FSM;

require('cypress-xpath')
require('cypress-plugin-tab')

describe('titulo', () =>{
    it('descripcion prueba', () =>{

        login_fsm.abro_URL()
        login_fsm.btnLogin_with_azure()
        login_fsm.ingreso_usuario()
        login_fsm.ingreso_contrasenia()

    })
})