import React from 'react';

const ThreeClearBoxes = () => {
    return (
        <div id="three-boxes-section">
            <div className="clear-box">
                <div className="clear-box-content">
                    <div id="number-border-blue">01</div>
                    <div className="spacer"></div>
                    <h2>Emerging threats are a moving target.</h2>
                    <div className="spacer"></div>
                    <p>Cybercriminals capitalize on the unknown and the unprepared. We provide expert resources so you stay vigilant and minimize vulnerabilities.</p>
                </div>
            </div>
            <div className="clear-box">
                <div className="clear-box-content">
                    <div id="number-border-blue">02</div>
                    <div className="spacer"></div>
                    <h2>We make cybersecurity easy and cost-effective.</h2>
                    <div className="spacer"></div>
                    <p>For less than the price of a single security analyst, we offer strong, future-proof cybersecurity and compliance without complexity.</p>
                </div>
            </div>
            <div className="clear-box">
                <div className="clear-box-content">
                    <div id="number-border-blue">03</div>
                    <div className="spacer"></div>
                    <h2>Never a cookie-cutter approach.</h2>
                    <div className="spacer"></div>
                    <p>Every organization has its own risks and requirements. No matter your size, or current security posture, we always take a customer-centric approach.</p>
                </div>
            </div>
            
        </div>
    );
};

export default ThreeClearBoxes;