var React = require('react');

var TaskItem = React.createClass({  
  render: function(){
    return (
      <div className="row">
      <div className="col-md-4">        
          <p>
          <span><b>{this.props.name}</b></span> <br/>
          <span>{this.props.description}</span>
          </p>
      </div>
      <div className="col-md-4 fieldmid" >        
         {this.props.priority}                 
      </div>
      <div className="col-md-4 fieldmid">        
          {this.props.status}                                
      </div>
      </div>
    )
  }
});



module.exports = TaskItem;