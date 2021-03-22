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
	});
}

document.getElementById('city-button').onclick = function(){
	// init data stream
	getData();
};	


// https://api.nasa.gov/planetary/apod?api_key=PB89TzMWPMgNP3JwQ4Mk5QUZajbiH7xGBpmEdlj9

// PB89TzMWPMgNP3JwQ4Mk5QUZajbiH7xGBpmEdlj9
