import React from 'react';

const ThreeBoxes = () => {
    return (
        <div id="three-boxes-section">
            <div className="blue-box">
                <div className="blue-box-content">
                    <p>Cyberattacks now cost companies on average</p>
                    <h2>200<span>K</span></h2>
                    <h4>putting many of them out of business</h4>
                    <p>(CNBC)</p>
                </div>
            </div>
            <div className="blue-box">
                <div className="blue-box-content">
                    <p>Web-based attacks pose a huge risk, cyberattacks are </p>
                    <h2>300</h2>
                    <h4>times likely to hit financial firms. A sweeping new report finds they're not prepared</h4>
                    <p>(Forbes)</p>
                </div>
            </div>
            <div className="blue-box">
                <div className="blue-box-content">
                    <p>Mobile malware attacks are booming.</p>
                    <h2>%60</h2>
                    <h4>percent of small businesses fold within 6 months of a cyberattack</h4>
                    <p>(Inc.)</p>
                </div>
            </div>
            
        </div>
    );
};

export default ThreeBoxes;