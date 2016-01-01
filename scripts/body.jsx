var React = require("react");
var ReactDOM = require("react-dom");
var Jumbotron = require("react-bootstrap").Jumbotron;
var Dialog = require("./dialog.jsx");
var CircleImage = require("./image.jsx");
var Alert = require("./alert.jsx");

//ボディの定義
var Body = React.createClass({
  render: function(){
    return (
      <Main/>
    );
  }
});

var Main = React.createClass({
    render: function() {
        return (
        	<div>
  				<Dialog/>
  				<CircleImage/>
  				<Alert/>
  			</div>
        );
    }
});

module.exports = Body;