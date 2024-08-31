import React, { useState } from 'react';
import './OrganizationSignupPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function OrganizationSignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [Fname, setFirstName] = useState('');
    const [Lname, setLastName] = useState('');
  
    const navigate = useNavigate();
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
                    <h2>Admin Signup</h2>
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
                            <label htmlFor="fname">First Name</label>
                            <input
                                type="text"
                                id="fname"
                                value={Fname}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                                placeholder="Enter your organization name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lname">Last Name</label>
                            <input
                                type="text"
                                id="lname"
                                value={Lname}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                placeholder="Enter your contact number"
                            />
                        </div>
                        <button type="submit" className="signup-button"  onClick={async () => {
                            let flag=0;
                            try{
                                
                                const user = await axios.post('http://localhost:8787/api/v1/admin/signup', {
                                        email : email,
                                        password : password,
                                        firstName : Fname,
                                        lastName:Lname
                                })
                                console.log(user);
                                const token = user.data.token;
                                localStorage.setItem('jwttoken',`Bearer ${token}`);
                                flag=1;
                                
                            }
                            catch(error)
                            {
                                console.error(error);
                                flag=0;
                            }
                            if(flag===1)
                            {
                                navigate('/company-dashboard');

                            }
                        }}>Signup</button>
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
