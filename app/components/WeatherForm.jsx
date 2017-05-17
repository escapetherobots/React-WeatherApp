var React = require('react');

var WeatherForm = React.createClass({

	onFormSubmit(e){
		e.preventDefault();
		var city = this.refs.weatherInput.value;
		
		if ( typeof city === 'string' && city.length > 0 ) {
			this.refs.weatherInput.value = '';

			this.props.onFormEvent(city);
		}
	},

	render: function(){
		return (
			<div>
				<h2>What&#8217;s The Weather Like?</h2>
				<form onSubmit={this.onFormSubmit}>
					<input type="text" ref="weatherInput" placeholder="Enter City Name"></input>
					<button type="submit">Submit</button>
				</form>
			</div>	
		);
	}


});

module.exports = WeatherForm;