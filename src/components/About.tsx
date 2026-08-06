import React from "react";
import '../assets/styles/About.scss';

function About() {
  return (
    <div id="about">
      <div className="items-container">
        <h2 className="section-label">About Me</h2>
        <h1 className="about-tagline">Precision, applied to life.</h1>

        <div className="about-layout">
          <div className="about-content">
            <p>
              I hold an M.S. in Electrical Engineering from the University of Mons, Belgium (June 2026, summa cum laude), where my previous work focused on control systems, the same principles that stabilize aircraft and power grids, applied here to drive human hemodynamic variables. I'm now an incoming M.Eng. student in Biomedical Engineering at Boston University, ready to apply that expertise toward designing the next generation of medical devices.
            </p>
            <p>
              My Master's thesis at Lehigh University developed closed-loop MPC algorithms for vagus nerve stimulation, targeting cardiovascular diseases, with a manuscript now in preparation. Previously, as a System Engineer Intern at <a href="https://www.iba-worldwide.com" target="_blank" rel="noreferrer">IBA</a>, I contributed to control algorithms for proton therapy systems, an experience that showed me firsthand how precision engineering saves lives.
            </p>
          </div>

          <div className="stats-column">
            <div className="stat-card">
              <span className="stat-label">Program</span>
              <span className="stat-value">M.Eng. Biomedical Engineering</span>
            </div>
            <div className="stat-card">
              <span className="stat-label">University</span>
              <span className="stat-value">Boston University</span>
            </div>
            <div className="stat-card">
              <span className="stat-label">Graduation</span>
              <span className="stat-value">May 2027</span>
            </div>
            <div className="stat-card">
              <span className="stat-label">Scholarship</span>
              <span className="stat-value"><a href="https://www.baef.be" target="_blank" rel="noreferrer">BAEF</a> & BU Dean's Scholarship</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;