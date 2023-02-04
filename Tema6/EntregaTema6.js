const listadecompra = ["Azucar", "cafe", "manzana", "pollo", "sal"]
listadecompra.push("Aceite de Girasol")
listadecompra.pop()

const peliculas = [
    {titulo: "Titanic", director: "James Cameron", fecha: new Date(1997,01,01),},
    {titulo: "El gato con botas 2", director: "Joel Crawford", fecha: new Date(2022,12,01),},
    {titulo: "El retrato de una mujer en llamas", director: "Celine Sciamma", fecha: new Date(2019,01,01),}

]
const NewPelis = peliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1))


const directores = peliculas.map(valor => valor.director)
const titulos = peliculas.map(valor => valor.titulo)

const directoresytitulos = directores.concat(titulos)
const dirytitle = [...directores, ... titulos]

