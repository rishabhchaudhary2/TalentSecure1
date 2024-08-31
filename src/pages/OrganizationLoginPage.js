import React, { useState } from 'react';
import './OrganizationLoginPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

function OrganizationLoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle organization login logic here
    };

    return (
        <div className="login-page">
            <Navbar />
            <div className="form-wrapper">
                <div className="form-container">
                    <h2>Organization Login</h2>
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
                        <button type="submit" className="login-button" onClick={async () => {
                            try {

                                const user = await axios.post('http://localhost:8787/api/v1/admin/signin', {
                                    email: email,
                                    password: password
                                });
                                console.log('Login successful:', user.data);
                                const token = user.data.token;
                                localStorage.setItem('jwttoken', `Bearer ${token}`);

                            }
                            catch (error) {
                                console.error(error);
                            }
                        }}>Login</button>
                    </form>
                    <p>
                        <p>
                            User Login <a href="/user-login">Login here</a>
                        </p>
                        Don't have an account? <a href="/organization-signup">Sign up here</a>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default OrganizationLoginPage;
