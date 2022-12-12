function init() {
  // the mapOptions object contains the information to initialise the map to how we want it
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(33.805359,-84.145882),
    mapTypeId: google.maps.MapTypeId.SATELLITE,

    panControl: false,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
      position: google.maps.ControlPosition.TOP_LEFT
    },
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.TOP_CENTER
    },
    scaleControl: true,
    scaleControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER
    },
    streetViewControl: false,
    overviewMapControl: false
  };
  var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
  var script = document.createElement('script');
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);
}

window.onload = loadScript;