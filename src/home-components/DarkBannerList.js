import React from 'react';

const DarkBannerList = () => {
    return (
        <div id="dark-list">
            <h1>Why Business Cyber Shield?</h1>
            <div className="spacer"></div>
            <h2>We are Experts in Cybersecurity</h2>
            <div className="spacer"></div>
            <div className="spacer"></div>
            <div id="dark-list-content">
                <div><i class="fas fa-check"></i><p>Running an organization isn't easy.</p></div>
                <div className="spacer"></div>
                <div><i class="fas fa-check"></i><p>You need a better way to combat cyberattacks that can bring your operations down.</p></div>
                <div className="spacer"></div>
                <div><i class="fas fa-check"></i><p>Having experts working 24/7 on your behalf is important.</p></div>
                <div className="spacer"></div>
                <div><i class="fas fa-check"></i><p>That is where we come in.</p></div>
            </div>
        </div>
    );
};

export default DarkBannerList;