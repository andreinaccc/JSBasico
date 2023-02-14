let marker, map;

function initMap() {
    const posicion = {
        lat: 10.134379729944545,
        lng: -64.66569766453637
    }
    map = new google.maps.Map(document.getElementById("map"), {
        zoom:4,
        center: posicion
    })

    marker = new google.maps.Marker({
        position: posicion = {
            lat: 10.134379729944545,
            lng: -64.66569766453637
        },
        map,
        title: "Barcelona Venezuela"
    })

    marker = new google.maps.Marker({
        position: posicion = {
            lat: 10.21041307343161,
            lng: -64.69110354167046
        },
        map,
        title: "Playa Lido Venezuela"
    })

    marker = new google.maps.Marker({
        position: posicion = {
            lat: 10.21041307343161,
            lng: -64.69110354167046
        },
        map,
        title: "Mariguitar Venezuela"
    })


}

