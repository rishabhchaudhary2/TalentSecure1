import React, { useState } from 'react';
import './OrganizationSignupPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function OrganizationSignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [organizationName, setOrganizationName] = useState('');
    const [contactNumber, setContactNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            // Handle organization signup logic here
        } else {
            // Handle password mismatch
        }
    };

    return (
        <div className="signup-page">
            <Navbar />
            <div className="form-wrapper">
                <div className="form-container">
                    <h2>Organization Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Create a password"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm-password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                placeholder="Confirm your password"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="organization-name">Organization Name</label>
                            <input
                                type="text"
                                id="organization-name"
                                value={organizationName}
                                onChange={(e) => setOrganizationName(e.target.value)}
                                required
                                placeholder="Enter your organization name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact-number">Contact Number</label>
                            <input
                                type="text"
                                id="contact-number"
                                value={contactNumber}
                                onChange={(e) => setContactNumber(e.target.value)}
                                required
                                placeholder="Enter your contact number"
                            />
                        </div>
                        <button type="submit" className="signup-button">Signup</button>
                    </form>
                    <p>
                    <p>
                       User Signup <a href="/user-signup">Sign up here</a>
                    </p>
                        Already have an account? <a href="/organization-login">Login here</a>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default OrganizationSignupPage;
