import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserDashboardPage.css';

function UserDashboardPage() {
    const [user, setUser] = useState(null);
    const [applications, setApplications] = useState([]);
    const [skills, setSkills] = useState([]);
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.post('http://localhost:3001/api/user'); // Update the URL as per your API endpoint
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        const fetchUserApplications = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/applications'); // Update the URL as per your API endpoint
                setApplications(response.data);
            } catch (error) {
                console.error('Error fetching job applications:', error);
            }
        };

        const fetchUserSkills = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/skills'); // Update the URL as per your API endpoint
                setSkills(response.data);
            } catch (error) {
                console.error('Error fetching skills:', error);
            }
        };

        const fetchMentorshipDetails = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/mentors'); // Update the URL as per your API endpoint
                setMentors(response.data);
            } catch (error) {
                console.error('Error fetching mentors:', error);
            }
        };

        fetchUserProfile();
        fetchUserApplications();
        fetchUserSkills();
        fetchMentorshipDetails();
    }, []);

    return (
        <div className="user-dashboard-page">
            <div className="user-dashboard-container">
                <h2>User Dashboard</h2>
                <div className="dashboard-content">

                    {/* Profile Section */}
                    <section className="profile-section">
                        <h3>Profile Overview</h3>
                        {user ? (
                            <div>
                                <p><strong>Name:</strong> {user.name}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Resume Files:</strong></p>
                                <ul>
                                    {user.resume.map(file => (
                                        <li key={file.id}>{file.fileName}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <p>Loading profile...</p>
                        )}
                    </section>

                    {/* Job Application Section */}
                    <section className="job-application-section">
                        <h3>Job Applications</h3>
                        {applications.length > 0 ? (
                            <ul>
                                {applications.map(application => (
                                    <li key={application.id}>
                                        <strong>{application.jobTitle}</strong> - {application.status}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No job applications found.</p>
                        )}
                    </section>

                    {/* Skill Assessment Section */}
                    <section className="skill-assessment-section">
                        <h3>Skill Assessments</h3>
                        {skills.length > 0 ? (
                            <ul>
                                {skills.map(skill => (
                                    <li key={skill.id}>
                                        <strong>{skill.name}</strong> - {skill.score}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No skill assessments found.</p>
                        )}
                    </section>

                    {/* Mentorship Section */}
                    <section className="mentorship-section">
                        <h3>Mentorship</h3>
                        {mentors.length > 0 ? (
                            <ul>
                                {mentors.map(mentor => (
                                    <li key={mentor.id}>
                                        <strong>{mentor.name}</strong> - {mentor.field}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No mentors available.</p>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
}

export default UserDashboardPage;
