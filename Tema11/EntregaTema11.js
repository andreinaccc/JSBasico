class Estudiante {
    nombre;
    asignaturas = ["JavaScript", "HTML","CSS"];
    constructor (nombre,edad){
        this.nombre = nombre;
    }

    obtenDatos (){
        return this.nombre, this.asignaturas
    }
}

const nuevo= new Estudiante("Andreina")
console.log(nuevo)