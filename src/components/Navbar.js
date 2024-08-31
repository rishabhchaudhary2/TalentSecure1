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
                <Link to="/login">Login</Link>
                {/* <Link to="/signup">Sign Up</Link> */}
                <Link to="/resources">Resources</Link>
                <Link to="/skill-test">Skill Test</Link>
                <Link to="/job-recommendations">Jobs</Link>
                <Link to="/mentor">Mentors</Link>
                {/* <Link to="/user-dashboard">Go to User Dashboard</Link>
                <Link to="/company-dashboard">Go to company Dashboard</Link> */}
                <Link to="/dashboard">Dashboard</Link>
            </div>
        </nav>
    );
};

export default Navbar;
