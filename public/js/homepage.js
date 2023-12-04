// cords the map is taking in, we need to pass brewery lat and long here
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// this marker should be used for brewery location ideally 
var marker = L.marker([51.5, -0.09]).addTo(map);

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(map);

// our markers we can make custom prompts for 
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");

// the following is for a cusotm prompt when the user clicks the map 
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

map.on('click', onMapClick);


// custom standalone message the user is greeted with when they see the map
var popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);

    // city look up function to create out api field values
const cityLookup = async (event) => {
     event.preventDefault();

        const searchCity = document.getElementById('searchText').value;
        document.location.replace(`/citySearch/${searchCity}`);       
    };


document.querySelector('#searchButton').addEventListener('click', cityLookup);
