import React from "react";
import Chip from '@mui/material/Chip';
import TuneIcon from '@mui/icons-material/Tune';
import CodeIcon from '@mui/icons-material/Code';
import MemoryIcon from '@mui/icons-material/Memory';
import BuildIcon from '@mui/icons-material/Build';
import '../assets/styles/Skills.scss';

interface SkillCategory {
    icon: React.ReactNode;
    title: string;
    skills: string[];
}

const categories: SkillCategory[] = [
    {
        icon: <TuneIcon fontSize="inherit" />,
        title: "Control & Modeling",
        skills: [
            "Optimal & Predictive Control (MPC)",
            "Nonlinear Control",
            "Classical Control (PID, Pole Placement)",
            "State-Space Modeling & System Identification",
            "Stability Analysis (Routh-Hurwitz)",
            "Optimal Estimation (Kalman Filtering)",
            "Data-Driven Modeling (LSTM)",
            "Physiological & PK-PD Modeling",
            "Kinematics & Trajectory Planning",
        ],
    },
    {
        icon: <CodeIcon fontSize="inherit" />,
        title: "Languages & Software",
        skills: [
            "Python",
            "MATLAB",
            "Simulink",
            "C++",
            "LaTeX",
            "SQL",
            "Arduino",
            "SolidWorks",
            "Visual Studio Code",
            "Jupyter Notebook",
            "GitHub",
        ],
    },
    {
        icon: <MemoryIcon fontSize="inherit" />,
        title: "Embedded Systems & Hardware",
        skills: [
            "Sensor Selection",
            "Datasheet Analysis",
            "Breadboard Prototyping & Wiring",
            "Analog Circuit Design",
            "Instrumentation Amplifiers",
            "Active Filter Design",
            "Digital Signal Processing",
            "WiFi Connectivity",
            "API Integration",
            "Microcontroller Programming",
        ],
    },
    {
        icon: <BuildIcon fontSize="inherit" />,
        title: "Systems Engineering & Tools",
        skills: [
            "Laser Cutting",
            "3D Printing",
            "Biopac",
            "Oscilloscope",
            "Industrial Controllers (B&R)",
            "Technical Documentation (Polarion)",
            "Instructional Design (EasyGenerator)",
            "Technical Writing",
            "Business Model Canvas & Market Research",
            "Stakeholder Communication & Pitching",
        ],
    },
];

function Skills() {
    return (
        <div className="skills-container" id="skills">
            <h2 className="section-label">Skills</h2>

            <div className="skills-grid">
                {categories.map((category, index) => (
                    <div className="skill-card" key={index}>
                        <div className="skill-header">
                            <div className="skill-icon">{category.icon}</div>
                            <h3>{category.title}</h3>
                        </div>
                        <div className="flex-chips">
                            {category.skills.map((label, i) => (
                                <Chip key={i} className="skill-chip" label={label} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
