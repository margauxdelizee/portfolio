import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profileImage from '../assets/images/profile.jpg';
import '../assets/styles/Main.scss';
import { Link } from "react-router-dom";

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="hero-flex">
          <div className="image-wrapper">
            <img src={profileImage} alt="Avatar" />
          </div>
          <div className="content">
            <div className="social_icons">
              <a href="https://www.linkedin.com/in/margaux-delizee" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
              <p className="eyebrow">M.Eng. Biomedical Engineering · Boston University </p>
            </div>

            <h1>Margaux Delizée</h1>
            <p>Biomedical Engineer | Electrical Engineering Background</p>

            <div className="hero-buttons">
              <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download="Resume Margaux Delizée.pdf" className="resume-button">Download Resume</a>
              <Link to="/" state={{ scrollTo: "projects" }} className="resume-button">View My Work</Link>
            </div>

            <div className="mobile_social_icons">
              <a href="https://www.linkedin.com/in/margaux-delizee" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;