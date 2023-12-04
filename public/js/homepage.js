var brewDisplay = $('.brewery-template');


// cords the map is taking in, we need to pass brewery lat and long here
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// this marker should be used for brewery location ideally 
var marker = L.marker([51.5, -0.09]).addTo(map);

// var circle = L.circle([51.508, -0.11], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);

// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(map);

// our markers we can make custom prompts for 
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
//circle.bindPopup("I am a circle.");
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

let refid = '';
let brewname = '' ;
let address = '' ;
let city = '' ;
let State = '' ;
let zipcode = '' ;
let phone = '' ;
let website = '' ;
let latitude = '' ;
let longitude = '' ;
let remark = '' ;
let comments = '' ;



function saveBrewery(){
    var brewid = $(this).attr('data-index');
    //alert(brewid);


    var breurl = `https://api.openbrewerydb.org/breweries?by_ids=${brewid}`

    fetch(breurl)
    .then (function(response) {
        return response.json();
    })
    .then(function(data){
       
        let refid = data[0].id;
        let brewname = data[0].name ;
        let address = data[0].address_1;
        let city = data[0].city;
        let state = data[0].state;
        let zipcode = data[0].postal_code;
        let phone = data[0].phone;
        let website = data[0].website_url;
        let latitude = data[0].latitude;
        let longitude = data[0].longitude;
        let remark = data[0].brewery_type;
        let comment = '';

     
        // console.log(refid);
        // console.log(brewname);
        // console.log(address);
        // console.log(city);
        // console.log(state);
        // console.log(zipcode);
        // console.log(phone);
        // console.log(website);
        // console.log(latitude);
        // console.log(longitude);
        // console.log(remark);
        // console.log(comment);


       const currentDate = new Date().toDateString();

       if (latitude == null) {
            latitude = ''
       };
       if (longitude == null) {
            longitude = ''
       };

        if (refid && brewname) {

            const response = fetch('/api/breweries/addbrewery', {
            method: 'POST',
            body: JSON.stringify({ refid, brewname, address, city, state, zipcode, phone, website, latitude, longitude, remark, comment, currentDate }),
            headers: { 'Content-Type': 'application/json' },
            });
        
            return response
            
           
        }

    })
    .then (function(response) {
        if (response.ok) {
            alert('Brewery Saved');
        } else {
            alert('Failed to save');
        }
    });    
}

function mapBrewery (){

    var brewid = $(this).attr('data-index');
    alert(brewid);


    var breurl = `https://api.openbrewerydb.org/breweries?by_ids=${brewid}`

    fetch(breurl)
    .then (function(response) {
        return response.json();
    })
    .then(function(data){
       
        let brewname = data[0].name ;
        let latitude = data[0].latitude;
        let longitude = data[0].longitude;
    
    

        //figure out map stuff here
    })

        
};

brewDisplay.on('click', '.btn-save-brewery', saveBrewery);


brewDisplay.on('click', '.btn-map-brewery', mapBrewery);