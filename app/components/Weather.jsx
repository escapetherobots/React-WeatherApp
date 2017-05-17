var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherDisplay = require('WeatherDisplay');

var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

	getInitialState() {
		return {
			city: '',
			isLoading: false,
			errorMessage: undefined
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
			(errObj) => {
				this.setState({
					isLoading: false,
					errorMessage: errObj.message,
				});
			}
		);

	},

	render: function(){
		console.log(this.state);
		var {isLoading, city, weather, errorMessage} = this.state;

		function renderMessage() {
			if (isLoading){
				return (<h3>...Fetching Weather</h3>);
			} else if(weather && city) {
				return (<WeatherDisplay city={city} weather={weather}/>);
			}
		}

		function renderError(){
			if(typeof errorMessage === 'string'){
				return (<ErrorModal message={errorMessage} title={'hello'} />)
			}
		}

		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm onFormEvent={this.handleForm} />
				{renderMessage()}
				{renderError()}
			</div>
		);
	}


});

module.exports = Weather;