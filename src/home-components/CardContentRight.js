import React from 'react';

const CardContentRight = () => {
    return (
        <div id="card-content-right">
            <div id="card-img">
                <img alt="cybersecurity-icon" src="../../girl-computer.jpg"/>
            </div>
            <div id="card-content">
                <h3>The Journey to Better Cybersecurity Protection</h3>
                <div className="spacer"></div>
                <p>Managed cybersecurity alone isn't enough. You also need a partnership built on trust, accountability, and results. Our service delivery model is a process-driven, multi-level approach that is both comprehensive and responsive to your specific needs. We secure your business through proactive management and solution implementation.</p>
                <div className="spacer"></div>
                <button className="blue-button">Learn More</button>
            </div>
        </div>
    );
};

export default CardContentRight;