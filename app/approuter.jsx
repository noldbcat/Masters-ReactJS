var React = require('react');
var MainLayout = require('../app/mainlayout.jsx');
var Home = require('../app/home.jsx');
var TaskContainer = require('../app/components/tasks/taskcontainer.jsx');
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'


const NotFound = () => (
  <h1>404.. This page is not found!</h1>)

var AppRouter = React.createClass({
    render: function(){
        return( 
     <Router history={browserHistory} >
        <Route path="/public" component={MainLayout}>
        <IndexRoute component={Home} />
            <Route path="/tasklist" component={TaskContainer} />
            <Route path="/public" component={Home} />
            <Route path="*" component={NotFound} />        
        </Route>
    </Router>  )
    }
})

module.exports = AppRouter;

