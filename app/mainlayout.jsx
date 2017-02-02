'use strict';

import '../public/css/style.css';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');

var NavHeader = require('../app/components/common/navheader.js'); 
var Footer = require('../app/components/common/footer.js');
var Layout = require('../app/components/common/layout.js');

var MainLayout = React.createClass({
    render: function() {
            return (
                <Layout>
                <div>
                <NavHeader/>
                    <div className='section'>
                        {this.props.children}
                    </div>
                <Footer />
                </div>
                </Layout>
            )
    }
})

module.exports = MainLayout;
