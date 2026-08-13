import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/styles/Contact.scss';

interface ContactLink {
    icon: React.ReactNode;
    label: string;
    href: string;
}

const contactLinks: ContactLink[] = [
    {
        icon: <EmailIcon fontSize="inherit" />,
        label: "margauxd@bu.edu",
        href: "mailto:margauxd@bu.edu",
    },
    {
        icon: <LocalPhoneIcon fontSize="inherit" />,
        label: "(610) 730-8284",
        href: "tel:+16107308284",
    },
    {
        icon: <LinkedInIcon fontSize="inherit" />,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/margaux-delizee",
    },
    {
        icon: <GitHubIcon fontSize="inherit" />,
        label: "GitHub",
        href: "https://github.com/margauxdelizee",
    },
];

function Contact() {
    return (
        <div className="contact-container" id="contact">
            <h2 className="section-label">Get In Touch</h2>
            <h1 className="about-tagline">Open to what's next.</h1>

            <p className="contact-text">
                My background spans control systems, physiological modeling, and
                hands-on hardware work, from closed-loop algorithms for medical devices
                to fieldwork in industrial robotics. I'm available starting June 2027,
                and always glad to hear from people working on interesting problems.
            </p>

            <div className="contact-links">
                {contactLinks.map((link, index) => (
                    <a
                        className="contact-link"
                        key={index}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                        <span className="contact-link-icon">{link.icon}</span>
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Contact;
