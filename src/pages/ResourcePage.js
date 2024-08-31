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
                {/* List of resources */}
            </div>
            <Footer />
        </div>
    );
}

export default ResourcePage;
