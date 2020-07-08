import React, { Component } from 'react';

class NavLinks extends Component {
    render() {
        return (
                <ul className="nav-links">
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">Company</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
        );
    }
}

export default NavLinks;