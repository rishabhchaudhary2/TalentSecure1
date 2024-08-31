import React from 'react';
import './UserDashboardPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function UserDashboardPage() {
    return (
        <div className="user-dashboard-page">
            {/* <Navbar /> */}
            <div className="user-dashboard-container">
                <h2>User Dashboard</h2>
                <div className="dashboard-content">
                    <section className="profile-section">
                        <h3>Profile Overview</h3>
                        <p>Here you can view and update your profile information.</p>
                        {/* Add profile details or links to profile settings here */}
                    </section>
                    
                    <section className="job-application-section">
                        <h3>Job Applications</h3>
                        <p>Check the status of your job applications and manage them.</p>
                        {/* Add job application details or links to manage applications here */}
                    </section>
                    
                    <section className="skill-assessment-section">
                        <h3>Skill Assessments</h3>
                        <p>Review and take skill assessments to improve your profile.</p>
                        {/* Add links to skill assessments or details here */}
                    </section>
                    
                    <section className="mentorship-section">
                        <h3>Mentorship</h3>
                        <p>Connect with mentors to guide you through your career journey.</p>
                        {/* Add links to mentorship programs or details here */}
                    </section>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default UserDashboardPage;
