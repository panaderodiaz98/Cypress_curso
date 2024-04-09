describe('POST ingreso datos masivo', () =>{
    it('POST masivo con ciclo FOR', () =>{
        let endpoint;
        endpoint = cy.request('http://localhost:3000/posts') /* Requiero el endpoint */
        endpoint.should((response) => { /* Funcion de flecha donde asiguno una variable "response" donde llamo al status que sea igual a 200 */
            expect(response.status).to.eq(200)
        })
        /* :::::::::::: Logica carga masiva :::::::::::: */
        for(let contador=1; contador <= 5; contador++){ /* Inicio contador */
            let idContador = 5; /* Inicio en 5 solo a modo ejemplo */
            cy.request({ 
            method: 'POST', /* Le paso el metodo que quiero, en este caso POST */
            url: 'http://localhost:3000/posts', /* Le paso la URL, es decir el endpoint */
            body: { /* Le digo que inserte en el BODY los siguientes campos.. */
                'id': idContador, /* Inserto dato 1 */
                'title': 'Insertando objeto numero ' + contador + ' desde cypress..', /* Inserto dato 2 */
                'nombre': 'Martin Diaz' /* Inserto dato 3 */
            }
        }).then((response) => { 
           expect(response.status).to.eq(201) 
        })
         idContador++ /* Sumo contador ID */
        }
        
    })
})