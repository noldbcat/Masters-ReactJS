var React = require('react');
var ReactDOM = require('react-dom');
var TaskItem = require('../../../app/components/tasks/taskitem.jsx');

var TaskList = React.createClass({
render: function(){    
      var key = 0;
      var taskNodes = this.props.data.map(function(data){
        return(
            <TaskItem name={data.name} description = {data.description} priority={data.priority} status={data.status} key={++key} />                        
            );
    });
return (
  <div>
    {taskNodes}
  </div>
);
}
})


module.exports = TaskList;

