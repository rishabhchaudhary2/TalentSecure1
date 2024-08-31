import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function HomePage() {
    return (
        <div className="homepage">
            <Navbar />
            <section className="hero-section">
                <h1>Welcome to TalentSecure</h1>
                <p>Your gateway to career success.</p>
                <Link to="/skill-test" className="cta-button">
                    Get Started
                </Link>
            </section>
            
            <section className="mission-section">
                <h2>Our Mission</h2>
                <p>At TalentSecure, our mission is to bridge the gap between education and employment by providing a platform that connects graduates with the best job opportunities, resources, and mentorship. We aim to empower the next generation of professionals to achieve their career goals and make a meaningful impact in the workforce.</p>
            </section>
            
            <section className="target-section">
                <h2>Our Target</h2>
                <p>Our platform is designed for recent graduates, early-career professionals, and employers seeking top talent. Whether you're looking to start your career, transition to a new field, or find the perfect candidate for your company, TalentSecure is here to support your journey.</p>
            </section>
            
            <section className="how-it-works-section">
                <h2>How It Works</h2>
                <div className="how-it-works-details">
                    <div className="step">
                        <h3>Step 1: Upload Your Resume</h3>
                        <p>Start by uploading your resume. Our AI-powered system will analyze your skills and experiences to provide personalized job recommendations.</p>
                    </div>
                    <div className="step">
                        <h3>Step 2: Skill Assessment</h3>
                        <p>Take a series of tailored skill assessments to demonstrate your proficiency and readiness for your desired roles.</p>
                    </div>
                    <div className="step">
                        <h3>Step 3: Get Matched</h3>
                        <p>Receive job matches based on your skills, preferences, and assessment results. Apply directly through our platform.</p>
                    </div>
                    <div className="step">
                        <h3>Step 4: Mentorship & Support</h3>
                        <p>Connect with experienced mentors who can guide you through your job search and career development.</p>
                    </div>
                </div>
            </section>

            <section className="features-intro">
                <h2>Features That Set Us Apart</h2>
                {/* <p>Discover the unique features that make TalentSecure the ultimate platform for your career development.</p> */}
            </section>

            <section className="features">
                <div className="feature">
                    <h3>Advanced Job Matching</h3>
                    <p>Find the perfect job with our AI-driven matchmaking.</p>
                </div>
                <div className="feature">
                    <h3>Extensive Resources</h3>
                    <p>Access tools and resources to enhance your career.</p>
                </div>
                <div className="feature">
                    <h3>Mentorship Programs</h3>
                    <p>Get guidance from industry professionals.</p>
                </div>
            </section>

            <section className="explore-dashboard">
                <h2>Explore Your Dashboard</h2>
                <p>Get started with your personalized dashboard to track your progress and find the best opportunities for you.</p>
                <Link to="/dashboard" className="cta-button">Go to Dashboard</Link>
            </section>
            
            <Footer />
        </div>
    );
}

export default HomePage;
