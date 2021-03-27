// Set api token
mapboxgl.accessToken = 'pk.eyJ1IjoiMTcwMjI3NTQiLCJhIjoiY2ttZ2RpbTh2M2VsYzJxanhsYmlmY3AzcyJ9.DuKFJj_dInUIOJ_4OOlRIA';

function getData() {

	var city = document.getElementById('city').value;
	var request = 'https://weerlive.nl/api/json-data-10min.php?key=3f28abcc6d&locatie=' + city;

	fetch(request)

	.then(function(response) {
		return response.json();
	})

	.then(function(response) {
		console.log(response);

		var degree = document.getElementById('degree');
		degree.innerHTML = response.liveweer[0].temp + ' &#730;C ';

		var weather = document.getElementById('weather');
		weather.innerHTML = response.liveweer[0].verw;

		var freeSpace = document.getElementById('map');
		weather.innerHTML = loadMap(response);
	});
}

function loadMap(response){
	// Initialate map
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',

  // Positioning the map on a certain longitute + latitude and zooming in
  center: [-79.4512, 43.6568],
  zoom: 13,
});

console.log(loadMap);

// 	map.addControl(
// 		new MapboxGeocoder({
// 		accessToken: mapboxgl.accessToken,
// 		mapboxgl: mapboxgl
// 	})
// );

// var popup = new mapboxgl.Popup().setHTML('<h3>De Haagse Hogeschool</h3><p>Is momenteel dicht.</p>');

// // Adding a marker based on lon lat coordinates
// var marker = new mapboxgl.Marker()
//   .setLngLat(response.liveweer[0].plaats, response.liveweer[0].plaats)
//   .setPopup(popup)
//   .addTo(map);
}

document.getElementById('city-button').onclick = function(){
	// init data stream
	getData();
};	

// function showInfo(){
// 	var data = getData();
// 	var degree = document.getElementById('weather');
// 	var weather = document.getElementById('weather');
// 	var text = ['Het is geen mooi weer om te landen. Probeer een andere locatie of probeer het een andere dag nog een keer!'];

// 	if (degree > 10) && (weather == 'droog'){

// 	}
// }


// https://api.nasa.gov/planetary/apod?api_key=PB89TzMWPMgNP3JwQ4Mk5QUZajbiH7xGBpmEdlj9

// PB89TzMWPMgNP3JwQ4Mk5QUZajbiH7xGBpmEdlj9
