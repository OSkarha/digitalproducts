
    let map = null,
    marker = null,
    center = {lat: -7.9344906, lng: 112.632868},
    centerMarker = {lat: -7.9314303, lng: 112.636371},
    style=[
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.business",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        }
      ]
      

    function initMap() {
        
        
        myMap = new google.maps.Map(document.getElementById('map'), {
            center: center,
            zoom: 15,
            disableDefaultUI: true
          })


          marker = new google.maps.Marker({
            position: centerMarker,
            icon: 'img/pin.webp',
            map: myMap,
            
        })

        myMap.setOptions({styles: style});
    }




   
   