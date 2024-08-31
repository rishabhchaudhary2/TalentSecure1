import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UserDashboardPage from '../pages/UserDashboardPage';
import CompanyDashboardPage from '../pages/CompanyDashboardPage';
import './DashboardPage.css';

function DashboardPage() {
    const [activeTab, setActiveTab] = useState('user');

    return (
        <div className="dashboard-page">
            <Navbar />
            <div className="dashboard-container">
                <div className="dashboard-tabs">
                    <button 
                        className={`tab-button ${activeTab === 'user' ? 'active' : ''}`}
                        onClick={() => setActiveTab('user')}
                    >
                        User Dashboard
                    </button>
                    <button 
                        className={`tab-button ${activeTab === 'company' ? 'active' : ''}`}
                        onClick={() => setActiveTab('company')}
                    >
                        Company Dashboard
                    </button>
                </div>
                <div className={`dashboard-content ${activeTab}`}>
                    {activeTab === 'user' && <UserDashboardPage />}
                    {activeTab === 'company' && <CompanyDashboardPage />}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DashboardPage;
