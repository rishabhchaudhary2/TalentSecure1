// src/components/AdminProfile.js
import React from 'react';
import './AdminProfile.css';

const AdminProfile = ({ firstName, lastName, email, companyName }) => {
    return (
        <div className="admin-profile">
            <h3>Admin Profile</h3>
            <div className="profile-info">
                <p><strong>First Name:</strong> {firstName}</p>
                <p><strong>Last Name:</strong> {lastName}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Company:</strong> {companyName}</p>
            </div>
        </div>
    );
};

export default AdminProfile;
