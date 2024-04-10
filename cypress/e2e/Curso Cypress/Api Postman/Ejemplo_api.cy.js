describe('API', () =>{
    it('Ejemplo de JSON y mostrando por consola sus datos', () =>{

        const EjemploJSON = { /* Creo variable donde asigno el json mediante {} asignando columna propiedad y valor mediante los dos puntos*/
            "nombre": "martin",
            "apellido": "diaz",
            "edad": "25",
            "sexo": "masculino",
            "cursos": [ /* Podriamos tener anidado mas json/valores dentro de arreglos incluso si quisieramos donde tendrian asignado una posicion para poder invocarlo */
                {
                    "posicion": "0", /* Posicion asignada dentro del arreglo a modo ejemplo */
                    "nombre": "Cypress"
                },
                {
                    "posicion": "1",
                    "nombre": "Selenium"
                },
                {
                    "posicion": "2",
                    "nombre": "Tosca"
                }
            ]
        }
        cy.log(EjemploJSON["nombre"]) /* Escribiendo el nombre de la variable asignada a un json agregandole [] podremos invocar esas propiedades creadas o asignadas, automaticamente el editor de texto te tira la ayuda rapida de las variables creadas */
        cy.log(EjemploJSON["apellido"])
        cy.log(EjemploJSON["edad"])
        cy.log(EjemploJSON["sexo"])
        cy.log(EjemploJSON.cursos[1].nombre) /* Le digo que me llame del arreglo creado donde contiene jsons, que me llame al numero 1 y me traiga de ese arreglo el nombre */
    })
})