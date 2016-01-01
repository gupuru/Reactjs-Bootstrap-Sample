var React = require("react");
var ReactDOM = require("react-dom");
var Jumbotron = require("react-bootstrap").Jumbotron;
var Navbar = require("react-bootstrap").Navbar;
var Jumbotron = require("react-bootstrap").Jumbotron;
var Nav = require("react-bootstrap").Nav;
var NavItem = require("react-bootstrap").NavItem;

var Header = React.createClass({
  render: function(){
    return (
      <Main />
    );
  }
});

var NavBar = React.createClass({
  handleSelect: function(first, second){
    console.log(first);
  },
    render: function() {
        return (
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">React.js Bootstrap</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} onSelect={this.handleSelect}>めいん</NavItem>
            </Nav>
          </Navbar>
        );
    }
});

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <NavBar/>
        <Jumbotron>
    		  <h1>React.js bootstrap Sample</h1>
  		  </Jumbotron>
      </div>
    );
  }
});

module.exports = Header;