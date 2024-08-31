import React from 'react';
import './ResourcePage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ResourcePage() {
    const handleResumeClick = () => {
        // URL of the free resume builder tool
        window.open('https://www.overleaf.com/', '_blank'); // Replace with the actual URL of the tool
    };

    return (
        <div className="resource-page">
            <Navbar />
            <div className="container">
                <h1 className="page-title">Resources for Your Career Development</h1>
                <div className="resources-section">
                    <div className="resource-card">
                        <h2>Learning Resources</h2>
                        <p>Access a curated list of learning resources to enhance your skills.</p>
                        <a href="https://example.com/learning-resources" className="resource-link" target="_blank" rel="noopener noreferrer">Explore Resources</a>
                    </div>
                    <div className="resource-card">
                        <h2>Skill Practice</h2>
                        <p>Practice your skills with our collection of exercises and challenges.</p>
                        <a href="https://example.com/skill-practice" className="resource-link" target="_blank" rel="noopener noreferrer">Start Practicing</a>
                    </div>
                    <div className="resource-card">
                        <h2>Resume Making</h2>
                        <p>Create a professional resume using our recommended tool.</p>
                        <button className="resource-link" onClick={handleResumeClick}>Create Your Resume</button>
                    </div>
                </div>
                <p className="motivational-quote">"Your career is your business. It's time for you to manage it as a CEO." - Dorit Sher</p>
            </div>
            <Footer />
        </div>
    );
}

export default ResourcePage;
