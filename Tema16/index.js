const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event =>{
        console.log("Estoy arrastrando el parrfafo " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)

    })

    parrafo.addEventListener("dragend", () => {
        console.log("Ya termine de arrastar")
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach (seccion => {
    seccion.addEventListener("dragover", event  => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "move" //cpy por defecto
        console.log("dragover")
    })

    seccion.addEventListener("drop", event => {
        console.log("DROP")
        const id_parrafo = event.dataTransfer.getData("id")
        // console.log("Parrafo id: " + id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
   })

})

const papelera = document.querySelector(".papelera")

papelera.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect="copy"
})

papelera.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
})