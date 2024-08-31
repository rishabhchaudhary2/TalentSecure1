import React, { useState } from 'react';
import './SkillTestPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function SkillTest() {
    const [resumeUploaded, setResumeUploaded] = useState(false);

    const handleResumeUpload = (e) => {
        // Logic to handle resume upload
        setResumeUploaded(true);

        // Simulate skill extraction and redirect to test preparation
        setTimeout(() => {
            console.log("Redirecting to skill test preparation page...");
            // Redirect logic here
        }, 2000);
    };

    return (
        <div className="skill-test-page">
            <Navbar />
            <div className="skill-test-container">
                <h2>Skill Test</h2>
                {!resumeUploaded ? (
                    <div className="upload-section">
                        <p>Please upload your resume to start the skill test process.</p>
                        <input type="file" onChange={handleResumeUpload} />
                    </div>
                ) : (
                    <p>Processing your resume... Redirecting to skill test preparation.</p>
                )}
                <p>This is where users will take their skill tests.</p>
            </div>
            <Footer />
        </div>
    );
}

export default SkillTest;
