import React from 'react';
import './MentorPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MentorPage() {
    return (
        <div className="mentor-page">
            <Navbar />
            <div className="mentor-container">
                <h2>Find a Mentor</h2>
                {/* Mentor content */}
            </div>
            <Footer />
        </div>
    );
}

export default MentorPage;
