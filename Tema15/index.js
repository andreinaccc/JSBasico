const nombre = "Andreina"
const apellido = "Apellido"

const persona = { nombre, apellido}

//sessionStorage.setItem("persona",JSON.stringify(persona))
//localStorage.setItem("perona",JSON.stringify(persona))

const ahora = new Date()
document.cookie = `datos=${JSON.stringify(persona)};expires${new Date(ahora.getTime()+1200000)}}`
