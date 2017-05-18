var React = require('react');

var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

	onSearch(e){
		e.preventDefault();
		var city = this.refs.navSearch.value;
		var encodedLocation = encodeURIComponent(city);
		console.log(encodedLocation);

		if(encodedLocation.length > 0) {
			this.refs.navSearch.value = '';
			// set URL
			window.location.hash = '#/?location=' + encodedLocation;
		}
		
	},

	render: function(){
		return (
			<div  >
				<nav className="top-bar" data-responsive-toggle="example-menu" data-hide-for="medium">
					<div className="top-bar-left">
				
						<ul className="menu" data-hide-for="medium">
							<li className="menu-text">CRUX WEATHER</li>
							<li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bolder'}}>CHECK WEATHER</IndexLink></li>
							<li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bolder'}}>ABOUT</Link></li>
							<li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bolder'}}>EXAMPLES</Link></li>
							
						</ul>
					</div>
					<div className="top-bar-right">
						<form onSubmit={this.onSearch}>
							<ul className="menu">
								<li><input type="search" placeholder="Find City" ref="navSearch"></input></li>
								<li><input type="submit" className="button" value="CHECK WEATHER"></input></li>

							</ul>
						</form>
					</div>
				</nav>
			</div>
		);
	}

});

module.exports = Nav;