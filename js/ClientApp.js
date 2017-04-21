/* global React ReactDOM */

import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)

var myFirstComponent = React.createClass({
  render: function () {
    return (
			div(null,
				MyTitleFactory({title: 'props are the best', color: 'peru'}),
				MyTitleFactory({title: 'Semicolons are the worst', color: 'mediumaquamarine'}),
				MyTitleFactory({title: 'wassup', color: 'rebeccapurple'}),
				MyTitleFactory({title: 'The final countdown', color: 'dodgerblue'})
			)
    )
  }
})

ReactDOM.render(React.createElement(myFirstComponent), document.getElementById('app'))
