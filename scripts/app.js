// define globals
var endpoint = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";
var map;
$(document).ready(function() {
  initMap();
  ajaxCall();

  // AIzaSyCOK8SNjHvdiuqLuxKs_e7sHA9dX59Mmzw <=== Chelsea's API key for this project
}); // <== end of document(ready)

//TODO: move THIS ajax request into a function.
function ajaxCall() {
  $.ajax({
    method: 'GET',
    url: endpoint,
    dataType: 'Json',
    success: onSuccess,
    error: onError
  }); //<== end of .ajax
};

function onError(errorJson, status, errorThrown) {
  console.log(errorThrown);
};

function onSuccess(successJson) {
  console.log(successJson);

  var featuresArray = successJson.features;
  //features is an array, traverse it. el represents an element in the array (an earthquake)
  featuresArray.forEach(function(el) {

    var titlePath = el.properties.title;
    var timePath = el.properties.time;
    var typePath = el.geometry.type;
    var lat = el.geometry.coordinates[1];
    var lng = el.geometry.coordinates[0];
    setMarker(lat, lng);
    var magPath = el.properties.mag;

    $('#headline').append("<p>" + titlePath + "</p>");


    // <== this is for markers (red pointer things)
  }); // <== end of .forEach function
  //marker();
}; // <== end of onSuccess function



function initMap() {

  var homeLatLng = { lat: 37.78, lng: -122.44};
  map = new google.maps.Map(document.getElementById('map'), {
    center: homeLatLng,
    zoom: 8
  }); // <== this is for the map itself
} // <== end of initMap function

//TODO: verify that lat and long are properly what they should be.

function setMarker(lat, lng){
  var marker = new google.maps.Marker({
    map: map,
    position: {lat: lat, lng: lng},
    title: "Justin"
  });
}
