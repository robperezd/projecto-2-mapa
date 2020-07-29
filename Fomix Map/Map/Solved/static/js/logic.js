// Creating map object
var myMap = L.map("map", {
  center: [22.5162025, -120.9981776],
  zoom: 5
});
// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);
// Load in GeoJson data
var geoData = "static/data/gdf.geojson";
var geojson;
console.log("Oki")
d3.json(geoData).then( data => {
  console.log(data.features)
  console.log(data.features[345])
  L.choropleth(data, {
    valueProperty: 'Monto', // which property in the features to use
    scale: ['white', 'red'], // chroma.js scale - include as many as you like
    steps: 10, // number of breaks or steps in range
    mode: 'q', // q for quantile, e for equidistant, k for k-means
    style: {
      color: '#fff', // border color
      weight: 2,
      fillOpacity: 0.8
    },
    onEachFeature: function(feature, layer) {
      layer.bindPopup(`<h3>Nombre: ${feature.properties.Iniciales}</h3> Recursos Destinados 2015-2017: ${feature.properties.Monto}`)
    }
  }).addTo(myMap)
})
// Grab data with d3
//d3.json(geoData, function(data) {

  // Create a new choropleth layer
  //geojson = L.choropleth(data, {

    // Define what  property in the features to use
    //valueProperty: "MHI2016",

    // Set color scale
    //scale: ["#ffffb2", "#b10026"],

    // Number of breaks in step range
    //steps: 10,

    // q for quartile, e for equidistant, k for k-means
    //mode: "q",
    //style: {
      // Border color
     // color: "#fff",
     // weight: 1,
     // fillOpacity: 0.8
    //},

    // Binding a pop-up to each layer
    //onEachFeature: function(feature, layer) {
      //layer.bindPopup("Zip Code: " + feature.properties.ZIP + "<br>Median Household Income:<br>" +
      //  "$" + feature.properties.MHI2016);
    //}
  //}).addTo(myMap);

  // Set up the legend
  //var legend = L.control({ position: "bottomright" });
  //legend.onAdd = function() {
   // var div = L.DomUtil.create("div", "info legend");
   // var limits = geojson.options.limits;
    //var colors = geojson.options.colors;
    //var labels = [];

    // Add min & max
    //var legendInfo = "<h1>Median Income</h1>" +
     // "<div class=\"labels\">" +
      //  "<div class=\"min\">" + limits[0] + "</div>" +
        //"<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
      //"</div>";

   // div.innerHTML = legendInfo;

   // limits.forEach(function(limit, index) {
    //  labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
    //});

   // div.innerHTML += "<ul>" + labels.join("") + "</ul>";
   // return div;
  //};

  // Adding legend to the map
  //legend.addTo(myMap);

//});
