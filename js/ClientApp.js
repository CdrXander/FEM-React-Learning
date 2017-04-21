var div = React.DOM.div
var h1 = React.DOM.h1


var myTitle = React.createClass({
	render: function() {
		return (
			div(null,
				h1({style:{color:this.props.color}},this.props.title)
			)
		)
	}
})

var MyTitleFactory = React.createFactory(myTitle)


var myFirstComponent = React.createClass({
	render: function() {
		return (
			div(null,
				MyTitleFactory({title: 'props are the best', color:'peru'}),
				MyTitleFactory({title: 'Semicolons are the worst', color:'mediumaquamarine'}),
				MyTitleFactory({title: 'wassup', color:'rebeccapurple'}),
				MyTitleFactory({title: 'The final countdown', color:'darkviletred'})
			)
		)
	}
})


ReactDOM.render(React.createElement(myFirstComponent), document.getElementById('app'));