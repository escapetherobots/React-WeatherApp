var React = require('react');

// var About = React.createClass({
// 	render: function(){
// 		return (
// 			<h2>About</h2>
// 		);
// 	}


// });

var About = (props) => {
	return (
		<div className="row">
			<div className="columns medium-8 large-8 small-centered">
				<h2 className="text-center page-title">About</h2>
			</div>
		</div>
	);
}

module.exports = About;