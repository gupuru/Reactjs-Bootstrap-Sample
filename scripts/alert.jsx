var React = require("react");
var ReactDOM = require("react-dom");
var Button = require("react-bootstrap").Button;
var Panel = require("react-bootstrap").Panel;
var Accordion = require("react-bootstrap").Accordion;

function handleClick() {
  alert('アラート');
}

var Alert = React.createClass({
 render: function(){
    return (
      <div>
        <Button onClick={handleClick}>あらーと</Button>
        <Accordion>
          <Panel header="くりっくでひらくやつ" eventKey="1">ふはははは</Panel>
        </Accordion>
      </div>
    );
  }
});

module.exports = Alert;