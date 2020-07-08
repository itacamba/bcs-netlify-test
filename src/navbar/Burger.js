import React, { Component } from 'react';

class Burger extends Component {
    render() {
        return (
            <div className="hamburger" onClick={this.props.clicked}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
        );
    }
}

export default Burger;