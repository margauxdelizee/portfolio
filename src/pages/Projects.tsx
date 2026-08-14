import React from "react";
import Chip from '@mui/material/Chip';
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { projects } from '../data/projects';
import '../assets/styles/Project.scss';
import '../assets/styles/ProjectDetail.scss';

function Projects() {
    return (
        <div className="projects-container">
            <Link to="/" className="back-link">
                <ArrowBackIcon fontSize="small" />
                Back to home
            </Link>

            <h1 className="projects-page-title">All Projects</h1>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <Link
                        to={`/projects/${project.slug}`}
                        state={{ from: 'projects' }}
                        className="project-card"
                        key={index}
                    >
                        <div className={`project-media${project.lightMedia ? ' light-media' : ''}${project.framed ? ' framed' : ''}`}>
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-body">
                            <p className="project-meta">{project.meta}</p>
                            <h2>{project.title}</h2>
                            <p className="project-desc">{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag, i) => (
                                    <Chip key={i} className="project-tag" label={tag} />
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Projects;
