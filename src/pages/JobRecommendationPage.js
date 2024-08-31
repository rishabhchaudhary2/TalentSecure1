import React, { useState } from 'react';
import './JobRecommendationPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function JobRecommendationPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 3;

    // Mock data for jobs (you can replace this with data fetched from an API)
    const jobs = [
        { title: 'Software Engineer', company: 'Tech Innovations Ltd.', location: 'San Francisco, CA', experience: '2-4 years' },
        { title: 'Data Scientist', company: 'Data Insights Inc.', location: 'New York, NY', experience: '3-5 years' },
        { title: 'Front-End Developer', company: 'Web Solutions Co.', location: 'Remote', experience: '1-3 years' },
        { title: 'Back-End Developer', company: 'Web Solutions Co.', location: 'Remote', experience: '1-3 years' },
        { title: 'AI Specialist', company: 'Tech Innovations Ltd.', location: 'San Francisco, CA', experience: '3-5 years' },
        { title: 'DevOps Engineer', company: 'Data Insights Inc.', location: 'New York, NY', experience: '3-5 years' },
        // Add more job items as needed
    ];

    const totalPages = Math.ceil(jobs.length / jobsPerPage);

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

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
                        {currentJobs.map((job, index) => (
                            <div key={index} className="job-item">
                                <h3>{job.title}</h3>
                                <p>Company: {job.company}</p>
                                <p>Location: {job.location}</p>
                                <p>Experience: {job.experience}</p>
                                <button className="apply-button">Apply Now</button>
                            </div>
                        ))}
                    </div>
                    <div className="pagination">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                                onClick={() => handleClick(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                        {currentPage < totalPages && (
                            <button
                                className="next-button"
                                onClick={() => handleClick(currentPage + 1)}
                            >
                                Next
                            </button>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default JobRecommendationPage;
