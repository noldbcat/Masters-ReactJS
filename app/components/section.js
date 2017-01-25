var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');

var CardPanel = require('../../app/components/cardpanel.js');

var Panel = ReactBootstrap.Panel;

 var Section = React.createClass( {  
   render: function() {
     return (
         <div className="col-md-5  innersection">
            <Panel header='Section' bsStyle="primary">
                    Section        
            </Panel>
            <div>   
                <CardPanel name='Card1' />
                <CardPanel name='Card2' />
                <CardPanel name='Card3' />
            </div>                      
         </div>                  
         );
   }
 });



module.exports = Section;