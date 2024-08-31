import React from 'react';
import './JobRecommendationPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function JobRecommendationPage() {
    return (
        <div className="job-recommendation-page">
            <Navbar />
            <main className="job-recommendation-main">
                <div className="job-recommendation-container">
                    <h2>Job Recommendations</h2>
                    <p>
                        Based on your skills and recent assessments, we’ve curated a list of job opportunities that match your profile. Explore these opportunities to find the right fit for your career goals.
                    </p>
                    <div className="job-list">
                        <div className="job-item">
                            <h3>Software Engineer</h3>
                            <p>Company: Tech Innovations Ltd.</p>
                            <p>Location: San Francisco, CA</p>
                            <p>Experience: 2-4 years</p>
                            <button className="apply-button">Apply Now</button>
                        </div>
                        <div className="job-item">
                            <h3>Data Scientist</h3>
                            <p>Company: Data Insights Inc.</p>
                            <p>Location: New York, NY</p>
                            <p>Experience: 3-5 years</p>
                            <button className="apply-button">Apply Now</button>
                        </div>
                        <div className="job-item">
                            <h3>Front-End Developer</h3>
                            <p>Company: Web Solutions Co.</p>
                            <p>Location: Remote</p>
                            <p>Experience: 1-3 years</p>
                            <button className="apply-button">Apply Now</button>
                        </div>
                        {/* Add more job items as needed */}
                    </div>
                    <p>
                        Interested in more opportunities? <a href="/all-jobs" className="view-more">View More Jobs</a>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default JobRecommendationPage;
