import React from 'react';
import './ResourcePage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ResourcePage() {
    return (
        <div className="resource-page">
            <Navbar />
            <div className="resources-container">
                <h2>Resources</h2>

                <div className="resource-section">
                    <h3>Learning Resources</h3>
                    <ul>
                        <li className="resource-item">
                            <a href="#">Data Science Tutorials</a> - Comprehensive guides to master Data Science.
                        </li>
                        <li className="resource-item">
                            <a href="#">AI & Machine Learning</a> - Learn AI and ML concepts from scratch.
                        </li>
                        <li className="resource-item">
                            <a href="#">Web Development</a> - Resources to become a full-stack developer.
                        </li>
                    </ul>
                </div>

                <div className="resource-section">
                    <h3>Skill Practice Resources</h3>
                    <ul>
                        <li className="resource-item">
                            <a href="#">Coding Challenges</a> - Practice coding problems on various platforms.
                        </li>
                        <li className="resource-item">
                            <a href="#">Mock Interviews</a> - Prepare with mock interviews and expert feedback.
                        </li>
                        <li className="resource-item">
                            <a href="#">Project Ideas</a> - Find ideas for projects to enhance your portfolio.
                        </li>
                    </ul>
                </div>

                <div className="resource-section">
                    <h3>Resume Building Tools</h3>
                    <ul>
                        <li className="resource-item">
                            <a href="#">Resume Builder</a> - Create a professional resume using our tool.
                        </li>
                        <li className="resource-item">
                            <a href="#">Resume Templates</a> - Explore and download resume templates.
                        </li>
                        <li className="resource-item">
                            <a href="#">Resume Review</a> - Get your resume reviewed by industry experts.
                        </li>
                    </ul>
                </div>

                <div className="resource-section">
                    <h3>Job Search Tools</h3>
                    <ul>
                        <li className="resource-item">
                            <a href="#">Job Board</a> - Explore job opportunities across various domains.
                        </li>
                        <li className="resource-item">
                            <a href="#">Company Reviews</a> - Read reviews about companies from current and former employees.
                        </li>
                        <li className="resource-item">
                            <a href="#">Salary Insights</a> - Get insights on salary trends in your industry.
                        </li>
                    </ul>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default ResourcePage;
