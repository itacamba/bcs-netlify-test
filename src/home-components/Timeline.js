import React from 'react';

const JourneySteps = () => {
    return (
        <div id="journey-section">
            <h1>The BCS Partnership Journey</h1>
            <div className="timeline">
                <ul>
                    <li>
                        <div className="timeline-icon">
                            <img src="../../virtual.png"/>
                        </div>
                        <div className="timeline-content">
                            <h1>Onboarding.</h1>
                            <p>
                                Experience has taught us the great value in understanding your unique business needs including the laws and regulations your firm is goverened by. When we have a clear picture of your operations, the security recommendations we make will match your objectives.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-icon">
                        <img src="../../virtual.png"/>
                        </div>
                        <div className="timeline-content">
                            <h1>Cyber Risk Assessment.</h1>
                            <p>Our team of experts evaluates your security posture, identifying your unique risks and laying the foundation for effective cybersecurity practices. </p>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-icon">
                        <img src="../../virtual.png"/>
                        </div>
                        <div className="timeline-content">
                            <h1>Systems Remediation.</h1>
                            <p>Our team of experts evaluates your security posture, identifying your unique risks and laying the foundation for effective cybersecurity practices.</p>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-icon">
                            <img src="../../virtual.png"/>
                        </div>
                        <div className="timeline-content">
                            <h1>Managed Threat Detection and Response.</h1>
                            <p>
                            Combating new and emerging threats requires more than a prevention-only approach. It requires quick identification of stealthy behavior and real-time threat response. We protect your business with continuous, proactive monitoring, threat detection, analysis and incident management. 
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-icon">
                        <img src="../../virtual.png"/>
                        </div>
                        <div className="timeline-content">
                            <h1>Ongoing Risk Management.</h1>
                            <p>Organizations are dynamic; regulations, internal business processes, employees, and technology constantly change. We continuously provide analysis and maintenance services that maintain a strong security posture as you grow. </p>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-icon">
                        <img src="../../virtual.png"/>
                        </div>
                        <div className="timeline-content">
                            <h1>Virtual CSO.</h1>
                            <p>Every organization should have a chief security officer (CSO), yet few have the resources. Our advisory services provide all the benefits of an executive security professional, including strategic planning, program development, and budgeting guidance. </p>
                        </div>
                    </li>
                    <div style={{clear: "both"}}></div>
                </ul>
            </div>
        </div>
    );
};

export default JourneySteps;