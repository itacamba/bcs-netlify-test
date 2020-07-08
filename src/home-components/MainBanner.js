import React from 'react';

const MainBanner = () => {
    return (
        <div id="main-banner">
            <div id="banner-img">
                <img src="../../girl-code-smaller.jpg"/>
            </div>
            <div id="banner-content">
                <h1>A Partnership for Better Security</h1>
                <div className="spacer"></div>
                <p>When you work with Business Cyber Shield you'll know that your company is protected from an ever-changing environment of cyber risks and threats.</p>
                <div className="spacer"></div>
                <button className="blue-button">Scheedule a Free Consultation</button>
            </div>
            
        </div>
    );
};

export default MainBanner;