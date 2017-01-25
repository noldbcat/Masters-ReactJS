'use strict';

import '../public/css/style.css';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');

var NavHeader = require('../app/components/navheader.js'); 
var Section = require('../app/components/section.js');
var Footer = require('../app/components/footer.js');
var Layout = require('../app/components/layout.js');

ReactDOM.render(
    <Layout>
        <div>
            <NavHeader/>
            <div className='section'>
                <Section/>
                <Section/>
            </div>
            <Footer />
        </div>);
    </Layout>,document.getElementById('root'));