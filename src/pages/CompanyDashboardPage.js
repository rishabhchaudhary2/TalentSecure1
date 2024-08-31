import React from 'react';
import './CompanyDashboardPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function CompanyDashboardPage() {
    return (
        <div className="company-dashboard-page">
            {/* <Navbar /> */}
            <div className="company-dashboard-container">
                <h2>Company Dashboard</h2>

                {/* Dashboard Overview Section */}
                <div className="dashboard-overview">
                    <div className="overview-card">
                        <h3>Total Job Listings</h3>
                        <p>15 Active Listings</p>
                    </div>
                    <div className="overview-card">
                        <h3>Applicants</h3>
                        <p>120 Pending Applications</p>
                    </div>
                    <div className="overview-card">
                        <h3>Interviews Scheduled</h3>
                        <p>10 Interviews This Week</p>
                    </div>
                </div>

                {/* Job Listings Section */}
                <section className="job-listings">
                    <h3>Your Job Listings</h3>
                    <table className="job-table">
                        <thead>
                            <tr>
                                <th>Job Title</th>
                                <th>Status</th>
                                <th>Applications</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Software Engineer</td>
                                <td>Active</td>
                                <td>45</td>
                                <td><button>View</button></td>
                            </tr>
                            <tr>
                                <td>Data Analyst</td>
                                <td>Closed</td>
                                <td>30</td>
                                <td><button>View</button></td>
                            </tr>
                            <tr>
                                <td>Product Manager</td>
                                <td>Active</td>
                                <td>20</td>
                                <td><button>View</button></td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* Applicant Tracking Section */}
                <section className="applicant-tracking">
                    <h3>Applicant Tracking</h3>
                    <div className="applicant-list">
                        <div className="applicant">
                            <p><strong>John Doe</strong> - Software Engineer</p>
                            <button>View Profile</button>
                        </div>
                        <div className="applicant">
                            <p><strong>Jane Smith</strong> - Data Analyst</p>
                            <button>View Profile</button>
                        </div>
                        <div className="applicant">
                            <p><strong>Mike Johnson</strong> - Product Manager</p>
                            <button>View Profile</button>
                        </div>
                    </div>
                </section>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default CompanyDashboardPage;
