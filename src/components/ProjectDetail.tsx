import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Chip from '@mui/material/Chip';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { projects } from '../data/projects';
import '../assets/styles/ProjectDetail.scss';

function ProjectDetail() {
    const { slug } = useParams<{ slug: string }>();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return <Navigate to="/" replace />;
    }

    const coverMedia = (
        <div className={`detail-media${project.lightMedia ? ' light-media' : ''}${project.framed ? ' framed' : ''}`}>
            <img src={project.image} alt={project.title} />
        </div>
    );

    return (
        <div className="project-detail-container">
            <Link to="/" state={{ scrollTo: "projects" }} className="back-link">
                <ArrowBackIcon fontSize="small" />
                Back to projects
            </Link>

            <p className="detail-meta">{project.meta}</p>
            <h1>{project.title}</h1>

            <div className="detail-tags">
                {project.tags.map((tag, i) => (
                    <Chip key={i} className="project-tag" label={tag} />
                ))}
            </div>

            {project.detail ? (
                <>
                    {project.detail[0].label && (
                        <h2 className="detail-section-label detail-hero-label">{project.detail[0].label}</h2>
                    )}
                    <div className="detail-hero">
                        <div className="detail-hero-text">
                            {project.detail[0].paragraphs.map((para, j) => (
                                <p className="detail-section-text" key={j}>{para}</p>
                            ))}
                        </div>
                        {coverMedia}
                    </div>

                    <div className="detail-sections">
                        {project.detail.slice(1).map((section, i) => (
                            <div className="detail-section" key={i}>
                                {section.label && <h2 className="detail-section-label">{section.label}</h2>}
                                {section.paragraphs.map((para, j) => (
                                    <p className="detail-section-text" key={j}>{para}</p>
                                ))}
                                {section.image && (
                                    <figure className={`detail-section-figure${section.compact ? ' compact' : ''}`}>
                                        <img src={section.image} alt={section.imageCaption || project.title} />
                                        {section.imageCaption && (
                                            <figcaption>{section.imageCaption}</figcaption>
                                        )}
                                    </figure>
                                )}
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className="detail-hero">
                    <p className="detail-description detail-hero-text">{project.description}</p>
                    {coverMedia}
                </div>
            )}

            {project.pdf && (
                <div className="detail-pdf">
                    <h2 className="detail-section-label">Full Report</h2>
                    <div className="detail-pdf-frame">
                        <iframe src={project.pdf} title={`${project.title} — Report`} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectDetail;
