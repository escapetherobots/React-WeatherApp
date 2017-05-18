var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({

	getDefaultProps() {
		return {
			title: 'Error'
		};
	},

	propTypes: {
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired
	},

	componentDidMount() {
		var {message, title} = this.props;

		var modalMarkup = (
			<div className="reveal tiny text-center" id="error-modal" data-reveal="">
			  <h1>{title}</h1>
			  <p>{message}</p>
			  <button className="close-button hollow" data-close="" aria-label="Close modal" type="button">
			    <span aria-hidden="true">&times;</span>
			  </button>
			</div>
		);

		var $modal = $(ReactDOMServer.renderToString(modalMarkup));
		$(ReactDOM.findDOMNode(this)).html($modal);

		var modal = new Foundation.Reveal( $('#error-modal') );
		modal.open();
	},

	render: function (){
		return (
			<div>
			</div>
		);
	}
});

module.exports = ErrorModal;