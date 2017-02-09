var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Dropdown = require('../../../app/components/common/dropdown.jsx');
var Input = ReactBootstrap.Input;

var priorityOpt = [{description: 'Low', code: 'pa'},
                   {description: 'Medium', code: 'pb'},
                   {description: 'High', code: 'pc'}];

var statusOpt = [ {description: 'To Do', code: 'sa'},
                  {description: 'In Progress', code: 'sb'},
                  {description: 'Done', code: 'sc'}];

var TaskEdit = React.createClass({  
  priorityDropDownOnChange: function(change) {            
              for (var i = 0; i < priorityOpt.length; i++) {
              if (priorityOpt[i].code === change.newValue) {
                globalPriority = priorityOpt[i].description;                    
                break;
              }
            }
          },
    statusDropDownOnChange: function(change) {    
              for (var i = 0; i < statusOpt.length; i++) {
              if (statusOpt[i].code === change.newValue) {
                globalStatus = statusOpt[i].description;                    
                break;
              }
            }     
          },  
  render: function(){
    return (
      <div className="row">
          <div className="col-md-4">        
              <p>
              
              </p>
          </div>
          <div className="col-md-3 fieldmid" >        
             <Dropdown id='myDropdown' 
                  options={priorityOpt} 
                  value='pa'
                  labelField='description'
                  valueField='code'
                  onChange={this.priorityDropDownOnChange}/>                 
          </div>
          <div className="col-md-3 fieldmid">        
              <Dropdown id='myDropdown' 
                  options={statusOpt} 
                  value='sa'
                  labelField='description'
                  valueField='code'
                  onChange={this.statusDropDownOnChange}/>                                
          </div>
          <div className="col-md-2 fieldmid">                      
                  <button type="button" className="btn btn-primary btn-sm" ><span className="glyphicon glyphicon-floppy-disk"></span></button>
                  <button type="button" className="btn btn-danger btn-sm"><span className="glyphicon glyphicon-remove"></span></button>               
          </div>
      </div>
    )
  }
});

//<Input type="text" label="Task Name" placeholder="Task Name" id="name" /> <br/>
//<Input type="textarea" label="Description" placeholder="Enter Task Description" id="description"/>

module.exports = TaskEdit;