import React from "react";

import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Naveen220104/Medical-Insurance-Price-Prediction" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Naveen220104/Medical-Insurance-Price-Prediction" target="_blank" rel="noreferrer"><h2>Medical Insurance Price Predictio</h2></a>
                <p>Developed a medical insurance price prediction app using machine learning with Scikit-learn, Flask, and React, enabling users to estimate charges based on inputs like age, BMI, and smoking status.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Naveen220104/Customer-Segmentation" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Naveen220104/Customer-Segmentation" target="_blank" rel="noreferrer"><h2>Customer Segmentation</h2></a>
                <p>Designed and implemented a customer segmentation model using Python and machine learning techniques. Leveraged KMeans and Hierarchical clustering to group customers based on spending behavior and income. Delivered actionable insights to enhance targeted marketing strategies.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Naveen220104/Anomaly-Detection" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Naveen220104/Anomaly-Detection" target="_blank" rel="noreferrer"><h2>Anomaly Detection Using AI</h2></a>
                <p>Developed and deployed an AI-based anomaly detection system using machine learning algorithms to identify unusual patterns in cybersecurity data. Enhanced system reliability by detecting threats in real time, enabling proactive risk mitigation.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Naveen220104/Naan-Mudhalvan-Project" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Naveen220104/Naan-Mudhalvan-Project" target="_blank" rel="noreferrer"><h2>Freelancing Website</h2></a>
                <p>Designed and developed a full-stack freelancing website using the MERN stack (MongoDB, Express.js, React, Node.js). The platform connects clients and freelancers with features like project posting, bidding, secure authentication, and real-time messaging.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;