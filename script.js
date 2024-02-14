var map = L.map('map').setView([42.463486, 21.468315], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

// var greenIcon = L.icon({
//     iconUrl: 'download.png',
//     shadowUrl: 'download.png',

//     iconSize:     [50, 60], // size of the icon
//     shadowSize:   [50, 64], // size of the shadow
//     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//     // shadowAnchor: [4, 62],  // the same for the shadow
//     // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });

// L.marker([42.463486, 21.468315], {icon: greenIcon}).addTo(map);


var searchControl = new L.esri.Controls.Geosearch().addTo(map);

var results = new L.LayerGroup().addTo(map);

  searchControl.on('results', function(data){
    results.clearLayers();
    for (var i = data.results.length - 1; i >= 0; i--) {
      results.addLayer(L.marker(data.results[i].latlng));
    }
  });


var gjilan = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "Pema ": "Willow tree",
          "marker-color": "#08a14a",
          "marker-size": "medium",
          "marker-symbol": "circle"
        },
        "geometry": {
          "coordinates": [
            21.46899786715133,
            42.463437441681265
          ],
          "type": "Point"
        },
        "id": 0
      },
      {
        "type": "Feature",
        "properties": {
          "Pema ": "Oak tree",
          "marker-color": "#7faf28",
          "marker-size": "medium",
          "marker-symbol": "circle"
        },
        "geometry": {
          "coordinates": [
            21.4686582423883,
            42.46308433564002
          ],
          "type": "Point"
        },
        "id": 1
      },
      {
        "type": "Feature",
        "properties": {
          "Pema ": "Tilia tree",
          "marker-color": "#15540d",
          "marker-size": "medium",
          "marker-symbol": "circle"
        },
        "geometry": {
          "coordinates": [
            21.4682149728265,
            42.46253251175699
          ],
          "type": "Point"
        },
        "id": 2
      }
    ]
  }

  for (var i = 0; i < gjilan.features.length; i++) {
    var feature = gjilan.features[i];
    var coordinates = feature.geometry.coordinates.reverse(); 
    var marker = L.marker(coordinates)
    .addTo(map)
    .bindPopup(feature.properties["Pema "]);


  }