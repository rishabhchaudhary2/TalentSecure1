import React from 'react';
import './CodingInterviewPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function CodingInterviewPage() {
    return (
        <div className="coding-interview-page">
            <Navbar />
            <div className="coding-interview-container">
                <h2>Coding & Interview Tests</h2>
                {/* Coding and interview content */}
            </div>
            <Footer />
        </div>
    );
}

export default CodingInterviewPage;
