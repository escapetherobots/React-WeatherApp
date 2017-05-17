var React = require('react');

var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

	onSearch(e){
		e.preventDefault();
		var city = this.refs.navSearch.value;
		console.log(city);
	},

	render: function(){
		return (
			<div className="top-bar">
				<div className="top-bar-left">
			
					<ul className="menu">
						<li className="menu-text">CRUX WEATHER</li>
						<li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bolder'}}>CHECK WEATHER</IndexLink></li>
						<li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bolder'}}>ABOUT</Link></li>
						<li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bolder'}}>EXAMPLES</Link></li>
						
					</ul>
				</div>
				<div className="top-bar-right">
					<form onSubmit={this.onSearch}>
						<ul className="menu">
							<li><input type="text" placeholder="city" ref="navSearch"></input></li>
							<li><input type="submit" className="button" value="CHECK WEATHER"></input></li>

						</ul>
					</form>
				</div>
			</div>
		);
	}

});

module.exports = Nav;