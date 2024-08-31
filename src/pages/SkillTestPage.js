// import React, { useState } from 'react';
// import './SkillTestPage.css';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// function SkillTest() {
//     const [resumeUploaded, setResumeUploaded] = useState(false);

//     const handleResumeUpload = (e) => {
//         // Logic to handle resume upload
//         setResumeUploaded(true);

//         // Simulate skill extraction and redirect to test preparation
//         setTimeout(() => {
//             console.log("Redirecting to skill test preparation page...");
//             // Redirect logic here
//         }, 2000);
//     };

//     return (
//         <div className="skill-test-page">
//             <Navbar />
//             <div className="skill-test-container">
//                 <h2>Skill Test</h2>
//                 {!resumeUploaded ? (
//                     <div className="upload-section">
//                         <p>Please upload your resume to start the skill test process.</p>
//                         <input type="file" onChange={handleResumeUpload} />
//                     </div>
//                 ) : (
//                     <p>Processing your resume... Redirecting to skill test preparation.</p>
//                 )}
//                 <p>This is where users will take their skill tests.</p>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default SkillTest;



// SkillTestPage.js

import React, { useState } from 'react';
import axios from 'axios';
import './SkillTestPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function SkillTest() {
    const [resumeUploaded, setResumeUploaded] = useState(false);

    const handleResumeUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('resume', file);

        try {
            const response = await axios.post('http://localhost:3001/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.data.success) {
                setResumeUploaded(true);
                console.log('Resume uploaded successfully:', response.data);
                
                // Simulate skill extraction and redirect to test preparation
                setTimeout(() => {
                    console.log("Redirecting to skill test preparation page...");
                    // Redirect logic here
                }, 2000);
            } else {
                console.error('Resume upload failed.');
            }
        } catch (error) {
            console.error('Error uploading resume:', error);
        }
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
