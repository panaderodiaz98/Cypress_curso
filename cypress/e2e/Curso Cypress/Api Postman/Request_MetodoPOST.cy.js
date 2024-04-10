describe('POST ingreso datos', () =>{
    it('POST', () =>{
        let endpoint;
        endpoint = cy.request('http://localhost:3000/posts') /* Requiero el endpoint */
        endpoint.should((response) => { /* Funcion de flecha donde asiguno una variable "response" donde llamo al status que sea igual a 200 */
            expect(response.status).to.eq(200)
        })
        
        cy.request({ /* En lugar de requerir simplemente el endpoint, le pongo que requiero un arreglo con caracteristicas especificas */
            method: 'POST', /* Le paso el metodo que quiero, en este caso POST */
            url: 'http://localhost:3000/posts', /* Le paso la URL, es decir el endpoint */
            body: { /* Le digo que inserte en el BODY los siguientes campos.. */
                'id': 10, /* Inserto dato 1 */
                'title': 'Insertando desde cypress..', /* Inserto dato 2 */
                'nombre': 'Martin Diaz' /* Inserto dato 3 */
            }
        }).then((response) => { /* Funcion ".then" diciendo "Haceme el request solicitado anterior y entonces hace..."  */
           expect(response.status).to.eq(201) /* En este verificamos el response del POST arroja 201 en caso de ejecutar OK */
           /* Luego de ejecutar esto, actualizando la pagina veremos insertados los datos correspondientes.. */
        })
    })
})