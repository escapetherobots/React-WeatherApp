var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
	render: function(){
		return (
			<div>
				<h2 className="text-center page-title">Examples Component</h2>
				<p>A few examples</p>
				<ol>
					<li>
						<Link to="/?location=miami">Miami</Link>
					</li>
				</ol>
			</div>
		);
	}


});

module.exports = Examples;