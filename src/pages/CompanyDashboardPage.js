import React, { useState, useEffect } from 'react';
import './CompanyDashboardPage.css';
import Navbar from '../components/Navbar'; // Ensure the Navbar is imported
import AdminProfile from './AdminProfile'; // Import the AdminProfile component

const JobListingComponent = () => {
    const [jobs, setJobs] = useState([]); // State for job listings
    const [selectedJob, setSelectedJob] = useState(null); // State for the selected job

    // Sample data for demonstration
    useEffect(() => {
        const sampleJobs = [
            {
                id: 1,
                title: 'Software Engineer',
                applicants: 15,
                vacancies: 5,
                candidates: ['John Doe', 'Jane Smith', 'Mike Johnson'],
            },
            {
                id: 2,
                title: 'Frontend Developer',
                applicants: 20,
                vacancies: 3,
                candidates: ['Alice Brown', 'Chris Davis', 'Karen White'],
            },
            {
                id: 3,
                title: 'Backend Developer',
                applicants: 10,
                vacancies: 2,
                candidates: ['David Green', 'Emma Wilson', 'James Clark'],
            },
        ];
        setJobs(sampleJobs);
    }, []);

    const handleJobClick = (job) => {
        setSelectedJob(job);
    };

    const handleVacancyUpdate = (e) => {
        const updatedVacancies = e.target.value;
        setSelectedJob((prevJob) => ({
            ...prevJob,
            vacancies: updatedVacancies,
        }));

        setJobs((prevJobs) => 
            prevJobs.map((job) =>
                job.id === selectedJob.id ? { ...job, vacancies: updatedVacancies } : job
            )
        );
    };

    const handleSendNotification = (candidate) => {
        alert(`Interview notification sent to ${candidate}`);
    };

    return (
        <div className="job-listing-component">
            <Navbar />
            <div className="main-content">
                <h2>Job Listings</h2>
                <div className="job-list">
                    {jobs.map((job) => (
                        <div key={job.id} className="job-item">
                            <h3>{job.title}</h3>
                            <p>Applicants: {job.applicants}</p>
                            <p>Vacancies: {job.vacancies}</p>
                            <button onClick={() => handleJobClick(job)}>View Details</button>
                        </div>
                    ))}
                </div>
                {selectedJob && (
                    <div className="job-details">
                        <h3>{selectedJob.title} - Details</h3>
                        <div className="vacancy-update">
                            <label htmlFor="vacancies">Update Vacancies: </label>
                            <input
                                type="number"
                                id="vacancies"
                                value={selectedJob.vacancies}
                                onChange={handleVacancyUpdate}
                            />
                        </div>
                        <div className="applicant-list">
                            <h4>Applicants:</h4>
                            {selectedJob.candidates.map((candidate, index) => (
                                <div key={index} className="applicant-item">
                                    <p>{candidate}</p>
                                    <button onClick={() => handleSendNotification(candidate)}>Send Interview Notification</button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <AdminProfile 
                firstName="John"
                lastName="Doe"
                email="john.doe@example.com"
                companyName="Tech Corp"
            />
        </div>
    );
};

export default JobListingComponent;
