var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherDisplay = require('WeatherDisplay');

var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

	getInitialState() {
		return {
			city: undefined,
			isLoading: false,
			errorMessage: undefined,
			location: undefined,
			weather: undefined
		};
	},

	componentDidMount() {
		var urlQuery = this.props.location.query.location;
		if(urlQuery && urlQuery.length > 0) {
			this.handleForm(urlQuery);
			window.location.hash = '#/';
		}
	},

	componentWillReceiveProps(newProps) {
		var urlQuery = newProps.location.query.location;
		if(urlQuery && urlQuery.length > 0){
			this.handleForm(urlQuery);
			window.location.hash = '#/';

		}
	},


	handleForm(city) {
		//update state
		this.setState({
			isLoading: true
		})
		//debugger;
		
		// RUN PROMISE
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
					errorTitle: 'Error'
				});
			}
		);

	},

	render: function(){
		var {isLoading, city, weather, errorMessage, errorTitle} = this.state;

		function renderMessage() {
			if (isLoading){
				return (<h3>...Fetching Weather</h3>);
			} else if(weather && city) {
				return <WeatherDisplay city={city} weather={weather}/>;
			}
		}

		function renderError(){
			if(typeof errorMessage === 'string'){
				return <ErrorModal message={errorMessage} title={errorTitle} />;
			}
		}

		return (
			<div className="row">
				<div className="columns medium-8 large-8 small-centered">
					<h1 className="text-center page-title">Get Weather</h1>
					<WeatherForm onFormEvent={this.handleForm} />
					{renderMessage()}
					{renderError()}
					<hr/>
				</div>
			</div>
		);
	}


});

module.exports = Weather;