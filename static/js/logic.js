
let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


d3.json(queryUrl).then(function (data) {
    console.log(data.features)
    let earthquakes = L.geoJSON(data, {
        pointToLayer: function (feature, layer) {
            let radius = Math.max(feature.properties.mag) * 4;
            let depth = feature.geometry.coordinates[2];
            let color = getColor(depth);

            let markerOptions = {
                radius: radius,
                fillColor: color,
                color: "black",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.6
            };

            return L.circleMarker(layer, markerOptions);
        },
        onEachFeature: function (feature, layer) {
            layer.bindPopup(`<h3>Place:</h3> ${feature.properties.place} <br/> 
                            <h3>Magnitude:</h3> ${feature.properties.mag} <br/>
                            <h3>Time:</h3> ${new Date(feature.properties.time)}`);
        }
    });

    var Stadia_AlidadeSmooth = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}', {
        minZoom: 0,
        maxZoom: 20,
        attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        ext: 'png'
    });

    let myMap = L.map("map", {
        center: [37.0902, -95.7129],
        zoom: 5,
        layers: [Stadia_AlidadeSmooth, earthquakes]
    });

    var legend = L.control({ position: "bottomright" });

    legend.onAdd = function (map) {
        var div = L.DomUtil.create("div", "info legend");
        var depths = [-10, 10, 30, 50, 70, 90]; // Define depth ranges
    
        div.style.backgroundColor = 'white';
        div.style.padding = '10px';
        
        for (var i = 0; i < depths.length; i++) {
            div.innerHTML +=
            `<i style="background: ${getColor(depths[i])}; color: ${getColor(depths[i])} ">" "</i> ` +
                depths[i] + (depths[i+1] ? '&ndash;' + depths[i + 1] : '+') + '<br>';
                // console.log(getColor(depths[i]))
                // console.log(depths[i])
        }
        return div;
    };

    legend.addTo(myMap);

    function getColor(d) {
        return d < 10 ? 'lime' :
               d < 30 ? 'greenyellow' :
               d < 50 ? 'gold' :
               d < 70 ? 'orange' :
               d < 90 ? 'darkorange' :
               'red';
    }
});