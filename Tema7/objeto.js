datosPersonales = {
    nombre: "Andreina",
    apellido: "Cabeza",
    edad: 35,
    altura: "165cm",
    eresDesarrollador: true
}

let edad = datosPersonales.edad

const lista = [{...datosPersonales}, 
    {
        nombre: "Angelis",
        apellido: "Centofanti",
        edad: 31,
        altura: "160cm",
        eresDesarrollador: false
    }, 
    {   nombre: "Marian",
        apellido: "Cabello",
        edad: 38,
        altura: "150cm",
        eresDesarrollador: false
    }]

    lista.sort((a,b)=>b.edad - a.edad)

    