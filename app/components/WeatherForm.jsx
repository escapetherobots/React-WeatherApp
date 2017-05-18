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
				<form onSubmit={this.onFormSubmit}>
					<input type="search" ref="weatherInput" placeholder="Enter City Name"></input>
					<input type="submit" value="CHECK WEATHER" className="button expanded hollow"></input>
				</form>
			</div>	
		);
	}


});

module.exports = WeatherForm;