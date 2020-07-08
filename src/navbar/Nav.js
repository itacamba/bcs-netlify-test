import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import NavLinks from './NavLinks'
import Burger from './Burger';
class Nav extends Component {
    constructor(){
        super();
        this.state = {
            navClicked: false
        }
    }

    handleClick = () => {
        this.setState({
            navClicked: !this.state.navClicked
        })
    }

    render() {
        return (
            <div id="nav-section">
                <div id="nav-container">
                    <div id="logo">
                            <Link to="/"><img alt="bcs-logo" src="../../logo.png" /></Link>
                    </div>
                    <ul>
                        <Link><li>Resources</li></Link>
                        <Link><li>Company</li></Link>
                        <Link><li className="blue-button">Contact Us</li></Link>
                    </ul>
                    <nav >
                        <Burger clicked={this.handleClick}/>
                        {this.state.navClicked? <NavLinks/> : null}
                    </nav>
                </div>
            </div>
        );
    }
}

export default Nav;


{/* <div id="nav-section">
                <div id="nav-container">
                    <div id="logo">
                        <Link to="/"><img alt="bcs-logo" src="../../logo.png" /></Link>
                    </div>
                    <nav >
                            <Link >Resources</Link>
                            <Link >Company</Link>
                            <Link ><button className="blue-button">Contact Us</button></Link>
                    </nav>
                </div>
            </div> */}