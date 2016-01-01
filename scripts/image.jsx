var React = require("react");
var ReactDOM = require("react-dom");
var Image = require("react-bootstrap").Image;
var Label = require("react-bootstrap").Label;

var CircleImage = React.createClass({
 render: function(){
    return (
      <div>
        <div>
          <Label>がぞう</Label>
        </div>
        <div>
          <Image src="./img/image.jpg" responsive />
        </div>
      </div>
    );
  }
});

module.exports = CircleImage;