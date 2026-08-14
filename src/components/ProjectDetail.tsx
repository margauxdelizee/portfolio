import React from "react";
import { useParams, Link, Navigate, useLocation } from "react-router-dom";
import Chip from '@mui/material/Chip';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { projects } from '../data/projects';
import '../assets/styles/ProjectDetail.scss';

function ProjectDetail() {
    const { slug } = useParams<{ slug: string }>();
    const location = useLocation();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return <Navigate to="/" replace />;
    }

    const cameFromProjectsPage = (location.state as { from?: string } | null)?.from === 'projects';
    const backTo = cameFromProjectsPage ? '/projects' : '/';
    const backState = cameFromProjectsPage ? undefined : { scrollTo: 'projects' };

    const coverMedia = (
        <div className={`detail-media${project.lightMedia ? ' light-media' : ''}${project.framed ? ' framed' : ''}`}>
            <img src={project.image} alt={project.title} />
        </div>
    );

    return (
        <div className="project-detail-container">
            <Link to={backTo} state={backState} className="back-link">
                <ArrowBackIcon fontSize="small" />
                {cameFromProjectsPage ? "Back to all projects" : "Back to featured projects"}
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
                                {section.video && (
                                    <figure className={`detail-section-figure${section.compact ? ' compact' : ''}`}>
                                        <video src={section.video} controls muted loop playsInline />
                                        {section.videoCaption && (
                                            <figcaption>{section.videoCaption}</figcaption>
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
                    <p className="pdf-mobile-hint">Tap below to view the full report.</p>
                    <a href={project.pdf} target="_blank" rel="noreferrer" className="pdf-download-link">
                        Open Full Report
                    </a>
                </div>
            )}
        </div>
    );
}

export default ProjectDetail;
