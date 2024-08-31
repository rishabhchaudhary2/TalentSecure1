import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${isOpen ? 'active' : ''}`}>
            <div className="logo">
                <Link to="/">TalentSecure</Link>
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>
                ☰
            </div>
            <div className={`nav-links ${isOpen ? 'show' : ''}`}>
                <Link to="/">Home</Link>
               
                {/* <Link to="/signup">Sign Up</Link> */}
                <Link to="/resources">Resources</Link>
                <Link to="/skill-test">Skill Test</Link>
                <Link to="/job-recommendations">Companies</Link>
                <Link to="/mentor">Mentors</Link>
                {/* <Link to="/user-dashboard">Go to User Dashboard</Link>
                <Link to="/company-dashboard">Go to company Dashboard</Link> */}
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/mcqtest-page">Mcq Test</Link>
                <Link to="/user-login">Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;
