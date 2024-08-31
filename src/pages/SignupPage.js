import React, { useState } from 'react';
import './SignupPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [organizationName, setOrganizationName] = useState('');
    const [domain, setDomain] = useState('');
    const [isOrganization, setIsOrganization] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            // Handle signup logic here
        } else {
            // Handle password mismatch
        }
    };

    const toggleOrganization = () => {
        setIsOrganization(!isOrganization);
    };

    return (
        <div className="login-signup-page">
            <Navbar />
            <div className="form-wrapper">
                <div className="form-container">
                    <h2>{isOrganization ? 'Organization Signup' : 'User Signup'}</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Enter your Organization mail id"
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
                        {!isOrganization && (
                            <>
                                <div className="form-group">
                                    <label htmlFor="first-name">First Name</label>
                                    <input
                                        type="text"
                                        id="first-name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                        placeholder="Enter your first name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="last-name">Last Name</label>
                                    <input
                                        type="text"
                                        id="last-name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                        placeholder="Enter your last name"
                                    />
                                </div>
                            </>
                        )}
                        {isOrganization && (
                            <>
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
                                {/* <div className="form-group">
                                    <label htmlFor="domain">Domain</label>
                                    <input
                                        type="text"
                                        id="domain"
                                        value={domain}
                                        onChange={(e) => setDomain(e.target.value)}
                                        required
                                        placeholder="Enter your organization domain"
                                    />
                                </div> */}
                            </>
                        )}
                        <button type="submit" className="signup-button">Signup</button>
                    </form>
                    <p>
                        {isOrganization ? 'Already have an account?' : 'Already have an account as an organization?'}
                        <span className="toggle-link" onClick={toggleOrganization}>
                            {isOrganization ? ' Switch to User Signup' : ' Switch to Organization Signup'}
                        </span>
                    </p>
                    <p>
                        Already have an account? <a href="/login">Login here</a>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SignupPage;
