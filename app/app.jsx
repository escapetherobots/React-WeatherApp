var React = require('react');
var ReactDOM = require('react-dom');

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
var Schedule = require('Schedule');

//object destructuring
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


//Foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App Styles
require('style!css!sass!AppStyles');

ReactDOM.render( 
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Weather}/>
			<Route path="about" component={About} />
			<Route path="examples" component={Examples} />
			<Route path="schedule" component={Schedule} />
		</Route>
	</Router>,
	document.getElementById('app')
);