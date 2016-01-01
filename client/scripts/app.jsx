var React = require("react");
var ReactDOM = require("react-dom");
var Col = require("react-bootstrap").Col;
var Body = require('./body.jsx');
var Header = require('./header.jsx');

var Index = React.createClass({
  render:function(){
    return (
    	<div>
    	    <Col xs={12} md={12} >
    			<Header/>
    			<Body/>
    		</Col>
    	</div>
    );
  }
});

ReactDOM.render(
  	<Index />,
  	document.getElementById('content')
);
