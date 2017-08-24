var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherDisplay = require('WeatherDisplay');
import graphData from './../api/graphData';
import D3Test01 from './D3Test01';
import D3Test02 from './D3Test02';
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

	getInitialState() {
		return {
			city: undefined,
			isLoading: false,
			errorMessage: undefined,
			location: undefined,
			weather: undefined,
			forecast: [],
			width: 960,
			height: 600,
			graphData: graphData,
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

		// openWeatherMap.getTemp(city).then(
		// 	(temp) => {
		// 		return this.setState({
		// 			city: city,
		// 			weather: temp,
		// 			isLoading: false
		// 		});
		// 	}
		// ,
		// 	(errObj) => {
		// 		this.setState({
		// 			isLoading: false,
		// 			errorMessage: errObj.message,
		// 			errorTitle: 'Error'
		// 		});
		// 	}
		// );

		openWeatherMap.getFiveDayTemp(city).then(
			(res) => {
				return this.setState({
					isLoading: false,
					forecast: res.list,
					city: res.city.name,
					weather: res.list[0].main.temp
				});

			}
		,
			(errObj) => {
				console.log(errObj);
				this.setState({
					isLoading: false,
					errorMessage: errObj.message,
					errorTitle: 'Error'
				});
			}
		);



	},

	render: function(){
		var {isLoading, city, weather, errorMessage, errorTitle, forecast} = this.state;

		function renderMessage() {
			if (isLoading){
				return (<h3>...Fetching Weather</h3>);
			} else if(weather && city) {
				return <WeatherDisplay city={city} weather={weather} forecast={forecast}/>;
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
					<D3Test01 />
					<D3Test02 />
				</div>
			</div>
		);
	}


});

module.exports = Weather;
