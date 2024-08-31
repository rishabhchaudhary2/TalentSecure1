import React from 'react';
import './ResourcePage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ResourcePage() {
    return (
        <div className="resource-page">
            <Navbar />
            <div className="container">
                <h1 className="page-title">Resources to Boost Your Career</h1>
                <div className="resources-section">
                    <div className="resource-card">
                        <h2>Learning Resources</h2>
                        <p>Access a variety of learning materials, courses, and tutorials to enhance your skills.</p>
                        <a href="/learning-resources" className="resource-link">Explore Learning Resources</a>
                    </div>
                    <div className="resource-card">
                        <h2>Skill Practice</h2>
                        <p>Find tools and exercises to practice and improve your skills in various domains.</p>
                        <a href="/skill-practice" className="resource-link">Start Practicing</a>
                    </div>
                    <div className="resource-card">
                        <h2>Resume Making Tools</h2>
                        <p>Use our resume templates and guides to create a professional resume that stands out.</p>
                        <a href="/resume-tools" className="resource-link">Create Your Resume</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ResourcePage;
