class Login_FSM{
    abro_URL(){
        cy.abro_URL('https://edenor-test.geocall.cloud/edenor/w/login','OverIT')
    }
    ingreso_usuario(user){
        cy.xpath('').should('be.enabled').should('be.visible').type(user)
    }
    ingreso_contrasenia(password){
        cy.xpath('').should('be.enabled').should('be.visible').type(password)
    }
    btnLogin_with_azure(){
        cy.xpath("//div[contains(text(),'Login with Azure')]").should('be.visible').click({force:true})
    }

    
}
export default Login_FSM;