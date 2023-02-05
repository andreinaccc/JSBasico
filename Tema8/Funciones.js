function siempreTrue() {
    return true
}

function Promesa() {
    return setTimeout(()=>console.log("Soy una Promesa"),5000)
}

function* generadoraPares() {
    let id=0
    while (true){
        id = id+2
        yield id
    }
}
