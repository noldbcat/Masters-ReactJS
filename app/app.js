'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');

import '../public/css/style.css';
var Panel = ReactBootstrap.Panel;


function CardPanel(props)
{
    return <div className="col-md-4">
    <Panel header={props.name} bsStyle="primary" className="section">
        Panel content
        </Panel>
    </div>;
}

var Section = React.createClass( {  
  render: function() {
    return (
        <div>
        <div className="section">
            Section        
        <div>
            <CardPanel name='Card1' />
            <CardPanel name='Card2' />
            <CardPanel name='Card3' />
        </div>
        </div>
        </div>
        );
  }
});

var Header = React.createClass( {  
  render: function() {
    return (
        <div className="header">
            Header
        </div>);
  }
});

var Footer = React.createClass( {  
  render: function() {
    return (
        <div className="footer">
            Copyright(c) Footer
        </div>);
  }
});

var Layout = React.createClass( {  
  render: function() {
    return (
        <div>
        <Header/>
        <Section/>
        <Footer />
        </div>);
  }
});


ReactDOM.render( <Layout />,                          
                document.getElementById('root'));