const boton = document.querySelector("button")

boton.addEventListener("click", function() {
    $("button").click( () => {
        console.log("Hola estoy usando JQuery")
    })
})