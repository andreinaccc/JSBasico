const fechahoy = new Date()

const nacimiento = new Date (1987,10,13)

let masTarde = fechahoy.getTime() > nacimiento.getTime()

let dia = nacimiento.getDate()
let mes = nacimiento.getMonth()+1
let anyo = nacimiento.getFullYear()



