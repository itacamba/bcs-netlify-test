import React from 'react';
import FormContact from '../FormContact'
const FormAndPhoto = () => {
    return (
        <div id="form-and-p-container">
            <div className="half-page-photo">
                <div className="half-photo">
                    <img alt="cybersecurity" src="../../cyber-lock-opaque.jpg"/>
                </div>
                <div className="half-content">
                    <h2>Ready to start your business on a more</h2>
                    <div className="spacer"></div>
                    <h1>SECURE PATH?</h1>
                </div>
            </div>
            <FormContact/>
        </div>
    );
};

export default FormAndPhoto;