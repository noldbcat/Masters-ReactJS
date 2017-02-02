'use strict';

var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var TaskList = require('../../../app/components/tasks/tasklist.jsx');

if (localStorage.getItem('reactjs-data') != null) {
    localStorage.clear();
}
  var reactjsJSON = '[{"taskid": "001", "name":"Task 1", "description":"The quick brown fox jumps", "priority":"1", "status":"Done"}, {"taskid": "002", "name":"Task 2", "description":"The quick brown fox jumps", "priority":"1", "status":"Done"}, {"taskid": "003", "name":"Task 2", "description":"The quick brown fox jumps", "priority":"1", "status":"Done"}, {"taskid": "004", "name":"Task 2", "description":"The quick brown fox jumps", "priority":"1", "status":"Done"}]';  

  localStorage.setItem('reactjs-data', reactjsJSON);

var Panel = ReactBootstrap.Panel;

 var TaskContainer = React.createClass( {  
   getInitialState: function(){
        return {data:[]};
    },
    loadData: function (){
        var reactdata = JSON.parse(localStorage.getItem('reactjs-data'));
        this.setState({data: reactdata});
    },
    componentDidMount: function () {
    this.loadData();        
    },
   render: function() {
     return (
         <div className="innersection">
            <Panel header='Task Master List' bsStyle="primary">
                  <div className="tableHeader" >
                    <div className="col-md-4" >Task Details</div>
                    <div className="col-md-4" >Priority</div>
                    <div className="col-md-4" >Status</div>        
                    </div>
                    <TaskList data = {this.state.data} />                    
            </Panel>                                
         </div>                  
         )
   }
 });


module.exports = TaskContainer;