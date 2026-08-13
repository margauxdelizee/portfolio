import React from "react";
import Chip from '@mui/material/Chip';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";
import { projects } from '../data/projects';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h2 className="section-label">Featured Projects</h2>
            <p className="projects-subtitle">
                A selection of projects I've worked on, spanning control theory, physiological modeling, and mechanical systems, from graduate research to hands-on industry work. Click on any project below to see the full story.
            </p>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <Link to={`/projects/${project.slug}`} className="project-card" key={index}>
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

            <div className="projects-more">
                <Link to="/projects" className="see-more-btn">
                    See more projects
                    <ArrowForwardIcon fontSize="small" />
                </Link>
            </div>
        </div>
    );
}

export default Project;
