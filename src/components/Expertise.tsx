import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faChartLine, faRobot, faServer } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "Python",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Scikit-learn",
  "Power BI",
];

const labelsSecond = [
  "Scikit-learn",
  "XGBoost",
  "LightGBM",
  "TensorFlow",
  "Keras",
  "Jupyter Notebook",
  "MLflow"
];

const labelsThird = [
  "SQL",
  "Airflow",
  "Docker",
  "Flask",
  "FastAPI",
  "Git",
  "AWS",
  "GCP"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">

          <div className="skill">
            <FontAwesomeIcon icon={faChartLine} size="3x" title="Data Analysis & Visualization" />
            <h3>Data Analysis & Visualization</h3>
            <p>I specialize in analyzing large datasets, identifying trends, and turning raw data into actionable insights. My expertise includes exploratory data analysis (EDA), statistical analysis, and building clear, insightful visualizations.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faRobot} size="3x" title="Machine Learning & Predictive Modeling" />
            <h3>Machine Learning & Predictive Modeling</h3>
            <p>I build and deploy machine learning models to solve real-world problems. I have experience with supervised and unsupervised learning, model evaluation, and optimization.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faServer} size="3x" title="Data Engineering & Deployment" />
            <h3>Data Engineering & Deployment</h3>
            <p>I prepare clean, scalable data pipelines and automate model deployment workflows to make ML models production-ready.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;
