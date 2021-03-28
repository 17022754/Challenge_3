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
		map.innerHTML = loadMap(response);
	});
}

function loadMap(response){
	// Initialate map
var worldMap = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',

  // Positioning the map on a certain longitute + latitude and zooming in
  center: [-79.4512, 43.6568],
  zoom: 13,
});

// console.log(loadMap);}

document.getElementById('city-button').onclick = function(){
	// init data stream
	getData();
};