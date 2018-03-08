//Seccion dedicada al control de maps
;(function(){

  class UserLocation{
    static get(callback){
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((location)=>{
          callback({
            lat: location.coords.latitude,
            lng: location.coords.longitude
          })
        })
      }
      else {
        alert("No es posible detectar la posicion donde te ubicas")
      }
      return {
        lat: 0,
        lng: 0
      }
    }
  }

  const myPlace = {
    lat: 19.3906274,
    lng: -99.0797393
  }
  google.maps.event.addDomListener(window, "load", ()=>{
    const maps = new google.maps.Map(
      document.getElementById('map'),
      {
        center: myPlace,
        zoom: 15
      })

      const marker = new google.maps.Marker({
        map: maps,
        position: myPlace,
        title: "Le Grand Touché",
        visible: true,
        animation: google.maps.Animation.BOUNCE
      })

      UserLocation.get((coords)=>{
        //una vez obtenidas las coordenadas del usuario, se calcula el tiempo

        let origen = new google.maps.LatLng(coords.lat, coords.lng) //Seran de tipo LatLng
        let destino = new google.maps.LatLng(myPlace.lat, myPlace.lng) //Seran de tipo LatLng

        let service = new google.maps.DistanceMatrixService()
        service.getDistanceMatrix({
          origins: [origen], //acepta un arreglo de origenes y..
          destinations: [destino], //acepta un arreglo de destinos
          travelMode: google.maps.TravelMode.DRIVING
        }, (response, status)=>{
          if(status ===google.maps.DistanceMatrixStatus.OK){
            const duracionViaje = response.rows[0].elements[0] //donde rows es origen, y elements es el destino
            // console.log(duracionViaje)
            // console.log(duracionViaje.duration.text)
            // console.log(duracionViaje.distance)
            document.querySelector("#mesaageMap").innerHTML = `
                                                                Estás a ${duracionViaje.distance.text} o
                                                                ${duracionViaje.duration.text} de
                                                                <span class="great-vibes font-size-medium">Le Grand Touchê -  55 5756 2858</span>
                                                              `
          }
        })
      })
  })

})()
