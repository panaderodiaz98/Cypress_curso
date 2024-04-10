import Proyecto_uno from "../../../support/POM/proyecto_uno/Proyecto_uno.cy" /* Importo la clase */
const proyecto_uno = new Proyecto_uno; /* Inicializo clase */

describe('¨POM', () =>{
    
    Cypress.on('uncaught:exception',(err,runnable)=>{ /* Metodo para atrapar errores, investigar a que se refiere */
        return false
    })

    it('Importo clase y sus metodos', () =>{
        
        proyecto_uno.visitoPagina() /* Uso metodo de la clase elegido */
        
    })
})