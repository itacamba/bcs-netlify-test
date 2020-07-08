import React from 'react';
import {Link} from 'react-router-dom'


const Footer = () => {
    return (
        <div id="footer">
            <div id="footer-logo">
                <img src="../../logo.png"/>
                <p>© 2020 | Ashburn, Virginia</p>
            </div>
            <div id="footer-content">
                <div id="footer-icons">
                    <Link><i class="fab fa-facebook-square"></i></Link>
                    <Link><i class="fab fa-linkedin"></i></Link>
                    <Link><i class="fab fa-twitter-square"></i></Link>
                </div>
                <div className="spacer"></div>
                <div id="footer-content-links">
                    <Link><button className="blue-button">Contact Us</button></Link>
                    <Link><p>Privacy Policy</p></Link>
                    <Link><p>Terms of Use</p></Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;