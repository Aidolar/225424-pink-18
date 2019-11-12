'use strict'

// Initialize and add the map
      function initMap() {
// The location of Pink
      var pink = {lat: 59.936241, lng: 30.321356};
// The map, centered at Pink
      var map = new google.maps.Map(
      document.getElementById('pink-map'), {zoom: 17, center: pink});
// The marker, positioned at Pink
      var marker = new google.maps.Marker({position: pink, map: map, icon: 'pin.png'});
}
// pin.png потом будет в другой папке, и не png, а svg :-) Не забыть подстроить под ширину вьюпорта
