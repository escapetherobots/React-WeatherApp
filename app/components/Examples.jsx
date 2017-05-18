var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
	render: function(){
		return (
			<div className="row">
				<div className="columns medium-8 large-8 small-centered">
					<h2 className="text-center page-title">Examples Component</h2>
					<p>A few examples</p>
					<ol>
						<li>
							<Link to="/?location=miami">Miami</Link>
						</li>
					</ol>
				</div>
			</div>
		);
	}


});

module.exports = Examples;