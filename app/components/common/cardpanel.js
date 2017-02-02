
var React = require('react');

var ReactBootstrap = require('react-bootstrap');
var Panel = ReactBootstrap.Panel;

function CardPanel(props)
{
    return <div className="col-md-4">
    <Panel header={props.name} bsStyle="primary" className="section">
        Panel content
    </Panel>
    </div>;
}

module.exports = CardPanel;