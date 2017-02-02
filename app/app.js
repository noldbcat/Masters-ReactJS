'use strict';
import '../public/css/style.css';

var React = require('react');
var ReactDOM = require('react-dom');
var AppRouter = require('../app/approuter.jsx');

ReactDOM.render(<AppRouter />,document.getElementById('root'));

