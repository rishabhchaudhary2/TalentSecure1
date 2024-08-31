import React, { useState } from 'react';
import './LoginPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isOrganization, setIsOrganization] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
    };

    const toggleOrganization = () => {
        setIsOrganization(!isOrganization);
    };

    return (
        <div className="login-signup-page">
            <Navbar />
            <div className="form-wrapper">
                <div className="form-container">
                    <h2>{isOrganization ? 'Organization Login' : 'User Login'}</h2>
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
                                placeholder="Enter your password"
                            />
                        </div>
                        <button type="submit" className="login-button">Login</button>
                    </form>
                    <p>
                        {isOrganization ? 'Not registered?' : 'Not registered as an organization?'}
                        <span className="toggle-link" onClick={toggleOrganization}>
                            {isOrganization ? ' Switch to User Login' : ' Switch to Organization Login'}
                        </span>
                    </p>
                    <p>
                        Don't have an account? <a href="/signup">Sign up here</a>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LoginPage;
