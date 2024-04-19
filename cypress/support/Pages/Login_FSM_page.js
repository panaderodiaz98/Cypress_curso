class Login_FSM{
    
    abro_URL(){
        cy.abro_URL('https://edenor-test.geocall.cloud/edenor/w/login','OverIT')
    }
    ingreso_usuario(){
        cy.get("[type='email']").should("be.visible").type("adminf3@edenor.com")
    }
    ingreso_contrasenia(){
        cy.get("[type='password']").should("be.visible").type("D%edenor.10") 
    }
    btnLogin_with_azure(){
        cy.contains("Login with Azure").should('be.visible').click({force:true})
    }
    btnSubmit()
    {
        cy.get("[type='submit']").should("be.visible").click({force:true})
    }
    btnButton()
    {
        cy.get("[type='button']").should("be.visible").click({force:true})      
    }

    loginFSM(){
        this.abro_URL()
        this.btnLogin_with_azure()
        cy.origin('https://login.microsoftonline.com',()=>{
        Cypress.require('cypress-if') /* Al ejecutar cy.origin le tengo que pasar nuevamente el requerimiento del puglin para que funcione */
        cy.get("[type='email']").if("visible").then(()=>{ /* Averiguar porque el if else no le gusta recibir metodos */
                cy.get("[type='email']").should("be.visible").type("adminf3@edenor.com")
                cy.get("[type='submit']").should("be.visible").click({force:true})
                cy.get("[type='password']").should("be.visible").type("D%edenor.10") 
                cy.get("[type='submit']").should("be.visible").click({force:true})           
                cy.get("[type='button']").should("be.visible").click({force:true})     
        }).else().then(()=>{
                cy.get("[type='password']").should("be.visible").type("D%edenor.10") 
                cy.get("[type='submit']").should("be.visible").click({force:true})
                cy.get("[type='button']").should("be.visible").click({force:true})       
            })
        })
        
    }

    
}
export default Login_FSM;