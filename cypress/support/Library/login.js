import Login_FSM from "../Pages/Login_FSM_page"
const login_fsm = new Login_FSM;
/* Login */
Cypress.Commands.add('Login', (user, password) => {
    login_fsm.loginFSM()
})
