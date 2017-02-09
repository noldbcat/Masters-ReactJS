'use strict';

var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var TaskList = require('../../../app/components/tasks/tasklist.jsx');
var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button;
var FormGroup = ReactBootstrap.FormGroup;
var FieldGroup = ReactBootstrap.FieldGroup;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl;
var Dropdown = require('../../../app/components/common/dropdown.jsx');

if (localStorage.getItem('reactjs-data') != null) {
    localStorage.clear();
}
 var reactjsJSON = [{taskid: 1, name:"Task 1", description:"The quick brown fox jumps", priority:"High", status:"Done"}, 
                     {taskid: 2, name:"Task 2", description:"The quick brown fox jumps", priority:"Low", status:"Done"}, 
                     {taskid: 3, name:"Task 2", description:"The quick brown fox jumps", priority:"Medium", status:"Done"},
                     {taskid: 4, name:"Task 2", description:"The quick brown fox jumps", priority:"Low", status:"Done"}];  

var statusOpt = [{description: 'To Do', code: 'sa'},
                 {description: 'In Progress', code: 'sb'},
                 {description: 'Done', code: 'sc'}];
var priorityOpt = [{description: 'Low', code: 'pa'},
                   {description: 'Medium', code: 'pb'},
                   {description: 'High', code: 'pc'}];

 var globalName = "", globalDescription ="", globalPriority="", globalStatus=""; 

  localStorage.setItem('reactjs-data',JSON.stringify(reactjsJSON));

 var Panel = ReactBootstrap.Panel;

 var TaskContainer = React.createClass( {  
   getInitialState: function(){
        return {data:[],
        showModal: false};        
    },
    loadData: function (){
        var reactdata = JSON.parse(localStorage.getItem('reactjs-data'));
        this.setState({data: reactdata});
    },
    close: function() {
      globalName = "";
      globalDescription = "";
      globalPriority = "";
      globalStatus = "";
      this.setState({ showModal: false });
  },
    componentDidMount: function () {
    this.loadData();        
    },
    open: function() {
          this.setState({ showModal: true });
          globalPriority = "Low";
          globalStatus = "To Do";
          if (document.getElementById("taskName") && document.getElementById("taskDesc")) {
            document.getElementById("taskName").value = globalName;
            document.getElementById("taskDesc").value = globalDescription;
            if (globalName != "") {
              document.getElementById("modalTitle").text("Edit Recipe");
              document.getElementById("addButton").text("Edit Recipe");
            }
          }
          else requestAnimationFrame(this.open);},
     add: function() {
            var tName = document.getElementById("taskName").value;
            var tDescription = document.getElementById("taskDesc").value;
            var exists = false;
            var reactdata = this.state.data;
            var newId =  reactdata.length + 1;

            for (var i = 0; i < reactdata.length; i++) {
              if (reactdata[i].name === tName) {
                reactdata[i].description = tDescription;
                reactdata[i].priority = globalPriority;
                reactdata[i].status = globalStatus;
                exists = true;
                break;
              }
            }
            if (!exists) {
              if (tName.length < 1) tName = "Untitled";
              reactdata.push({taskid: newId, name:tName, description:tDescription, priority:globalPriority, status:globalStatus});
            }
            //update();
            this.close();
          },
    priorityDropDownOnChange: function(change) {
              //alert('onChangeForSelect:\noldValue: ' + 
              //        change.oldValue + 
              //        '\nnewValue: ' 
              //        + change.newValue);              
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
   render: function() {
     return (
         <div className="innersection">
            <Panel header='Task Master List' bsStyle="primary">
                  <div className="tableHeader" >
                    <div className="col-md-4" >Task Details</div>
                    <div className="col-md-3" >Priority</div>
                    <div className="col-md-3" >Status</div>
                    <div className="col-md-2" >Tools</div>        
                    </div>
                    <TaskList data = {this.state.data} />  
                    <br/>
                    <button className="btn btn-primary btn-sm" onClick={this.open} >Add New</button>
                    <br/>
                    <Modal show={this.state.showModal} onHide={this.close}>
                      <Modal.Header closeButton>
                        <Modal.Title id="modalTitle">Add New</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>  
                              <FormGroup controlId="taskName">
                                      <ControlLabel>Task Name</ControlLabel>
                                      <FormControl componentClass="input" placeholder="Please enter Task Name" />
                              </FormGroup>                          
                              <FormGroup controlId="taskDesc">
                                    <ControlLabel>Description</ControlLabel>
                                    <FormControl componentClass="textarea" placeholder="Please enter task description here"/>
                              </FormGroup> 
                              <strong>Priority</strong><br/>
                              <Dropdown id='priorityDropdown' options={priorityOpt} value='pa'
                                         labelField='description'
                                         valueField='code'
                                         onChange={this.priorityDropDownOnChange}/>
                                         <br/>
                               <strong>Status</strong> <br/>
                               <Dropdown id='statusDropdown' options={statusOpt} value='sa'
                                         labelField='description'
                                         valueField='code'
                                         onChange={this.statusDropDownOnChange}/>
                                                         
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button onClick={this.add} bsStyle="primary" id="addButton">Add Task</Button>
                        <Button onClick={this.close}>Close</Button>
                      </Modal.Footer>
                    </Modal>                  
            </Panel>                                
         </div>                  
         )
   }
 });

module.exports = TaskContainer;

