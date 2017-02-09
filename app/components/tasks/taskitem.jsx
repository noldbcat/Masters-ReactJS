var React = require('react');
var Taskedit = require('../../../app/components/tasks/taskedit.jsx');


var TaskItem = React.createClass({  
  getInitialState: function(){
        return {data:[],
        showEdit: false};        
    },
  edit : function(){
    this.setState({ showEdit: true });
  },  
  cancel : function(){
    this.setState({ showEdit: false });
  },  
  render: function(){
    return (
      <div>
      {this.state.showEdit? 
        <Taskedit  />:
      <div className="row" >
          <div className="col-md-4">        
              <p>
              <span><b>{this.props.name}</b></span> <br/>
              <span>{this.props.description}</span>
              </p>
          </div>
          <div className="col-md-3 fieldmid" >        
            {this.props.priority}                 
          </div>
          <div className="col-md-3 fieldmid">        
              {this.props.status}                                
          </div>
          <div className="col-md-2 fieldmid">                      
                  <button type="button" className="btn btn-primary btn-sm" onClick={this.edit}><span className="glyphicon glyphicon-pencil"></span></button>
                  <button type="button" className="btn btn-danger btn-sm"  onClick={this.cancel}><span className="glyphicon glyphicon-trash"></span></button>               
          </div>
      </div>  
      }
      
      </div>
    )
  }
});



module.exports = TaskItem;