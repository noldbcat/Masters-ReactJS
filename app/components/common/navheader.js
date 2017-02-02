
var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown;
var MenuItem = ReactBootstrap.MenuItem;

var NavHeader = React.createClass( {  
   render: function() {
     return (      
          <Navbar  className="bgprimary header" inverse >
            <Navbar.Header>
              <Navbar.Brand>
                   <Link to='/public/'>Home</Link>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem href="#" ><Link to='/tasklist' className='btn-primary'>TaskList</Link></NavItem>              
            </Nav>
          </Navbar>        
   )}
});

module.exports = NavHeader;

  
              /*<NavItem eventKey={1} href="#">Link</NavItem>
              <NavDropdown eventKey={2} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={2.1}>Action</MenuItem>
                <MenuItem eventKey={2.2}>Another action</MenuItem>
                <MenuItem eventKey={2.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={2.3}>Separated link</MenuItem>
              </NavDropdown>*/