var React = require('react');

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
		var modal = new Foundation.Reveal( $('#error-modal') );
		modal.open();
	},

	render: function (){
		var {message, title} = this.props;

		return (
			<div className="reveal tiny text-center" id="error-modal" data-reveal="">
			  <h1>{title}</h1>
			  <p>{message}</p>
			  <button className="close-button hollow" data-close="" aria-label="Close modal" type="button">
			    <span aria-hidden="true">&times;</span>
			  </button>
			</div>
		);
	}
});

module.exports = ErrorModal;