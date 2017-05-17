var React = require('react');


//stateless function component

// also uses destructuring for parameters!!!
var WeatherDisplay = ({city, weather}) => {

	return (
		<div>
			<h2>Weather Display</h2>
			<p>{city}</p>
			<p>{weather}</p>
		</div>
	);


};

module.exports = WeatherDisplay;