var React = require("react");
var ReactDOM = require("react-dom");
var Modal = require("react-bootstrap").Modal;
var Button = require("react-bootstrap").Button;

var Dialog = React.createClass({
getInitialState: function() {
    return {
      showModal: false
    }
  },
  close: function() {
    this.setState({ showModal: false });
  },

  open: function() {
    this.setState({ showModal: true });
  },
  render: function() {
    return (

     <div>
        <Button onClick={this.open}>open dialog</Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Member</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>Dialog</h1>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.close}>Save</Button>
            <Button onClick={this.close}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

module.exports = Dialog;