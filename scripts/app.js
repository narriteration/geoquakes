// define globals
var endpoint = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

$(document).on("ready", function() {
    $.ajax({
        method: 'GET',
        url: endpoint,
        dataType: 'Json',
        success: onSuccess,
        error: onError
    });


    function onSuccess(successJson) {
        console.log(successJson);

        var featuresArray = successJson.features;
        //features is an array, traverse it. el represents an element in the array (an earthquake)
        featuresArray.forEach(function(el){

          var titlePath = el.properties.title;
          var timePath = el.properties.time;
          var typePath = el.geometry.type;
          var coordXPath = el.geometry.coordinates[0];
          var coordYPath = el.geometry.coordinates[1];
          var magPath = el.properties.mag;

          var path = el.properties.title;

            $('#headline').append("<p>" + path + "</p>");
        });



    };

    function onError(errorJson, status, errorThrown) {
        console.log(errorThrown);
    }






});
