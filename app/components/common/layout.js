var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');

var Layout = React.createClass( {  
  render: function() {
    return (<div>{this.props.children}</div>);
  }
});

module.exports = Layout;