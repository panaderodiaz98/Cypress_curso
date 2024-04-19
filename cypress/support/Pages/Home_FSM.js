class Home_FSM{
    /* Menu lateral opciones */
    opcion_menu_lateral(opcion){
        cy.contains(opcion).scrollIntoView().should("be.visible").click({force:true})
    }
    
}
export default Home_FSM;