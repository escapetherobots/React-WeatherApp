var React = require('react');
import WeatherGraph from './WeatherGraph';

//stateless function component

// also uses destructuring for parameters!!!
var WeatherDisplay = (props) => {

  const convertToFahr = (kelv) => {
    const fahr = 1.8 * (kelv - 273) + 32;
    return fahr.toFixed(0);
  }

	const onlyTemps = props.forecast.map( (item) => {
		return convertToFahr(item.main.temp);
	})

	return (
		<div>
			<h2>Weather Display</h2>
			<p>{props.city}</p>
			<p>{convertToFahr(props.weather)}&#176;</p>
			<WeatherGraph data={onlyTemps}/>
		</div>
	);


};

module.exports = WeatherDisplay;
