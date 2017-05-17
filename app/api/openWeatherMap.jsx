var axios = require('axios');

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=';
const API_K = BASE_URL + '4c747836ffcebf6567e029f7a61a0ef0';
const FULL_URL = API_K + '&units=imperial';


module.exports = {
	getTemp: function(location) {
		//web safe encoding
		var encodedLocation = encodeURIComponent(location);
		//interpolate string
		var requestUrl = `${FULL_URL}&q=;${encodedLocation}`;

		//========================================
		// promise callback funcs
		function success(res) {
			if(res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		};

		function fail(err){
			throw new Error(err.response.data.message);
		}

		return axios.get(requestUrl).then(success, fail);
	}
} 