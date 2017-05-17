var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherDisplay = require('WeatherDisplay');

var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

	getInitialState() {
		return {
			city: '',
			isLoading: false
		};
	},


	handleForm(city) {

		this.setState({
			isLoading: true
		})
		//debugger;
		
		// use arrow functions to maintain this = Weather object
		openWeatherMap.getTemp(city).then(
			(temp) => {
				return this.setState({
					city: city,
					weather: temp,
					isLoading: false
				});
			}
		, 
			(errorMessage) => {
				this.setState({isLoading: false});

				return alert(errorMessage);
			}
		);

	},

	render: function(){
		console.log(this.state);
		var {isLoading, city, weather} = this.state;

		function renderMessage() {
			if (isLoading){
				return (<h3>...Fetching Weather</h3>);
			} else if(weather && city) {
				return (<WeatherDisplay city={city} weather={weather}/>);
			}
		}

		return (
			<div>
				<h2>Weather</h2>
				<WeatherForm onFormEvent={this.handleForm} />
				{renderMessage()}
			</div>
		);
	}


});

module.exports = Weather;