import React, { useState } from 'react';
import './JobRecommendationPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function JobRecommendationPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const companiesPerPage = 3;

    // Mock data for top companies (you can replace this with data fetched from an API)
    const companies = [
        { name: 'Google', location: 'Mountain View, CA' },
        { name: 'Microsoft', location: 'Redmond, WA' },
        { name: 'Apple', location: 'Cupertino, CA' },
        { name: 'Amazon', location: 'Seattle, WA' },
        { name: 'Facebook', location: 'Menlo Park, CA' },
        { name: 'IBM', location: 'Armonk, NY' },
        { name: 'Intel', location: 'Santa Clara, CA' },
        { name: 'Adobe', location: 'San Jose, CA' },
        { name: 'Salesforce', location: 'San Francisco, CA' },
        { name: 'Oracle', location: 'Redwood City, CA' },
        { name: 'Cisco', location: 'San Jose, CA' },
        { name: 'SAP', location: 'Walldorf, Germany' },
        // Add more companies as needed
    ];

    const totalPages = Math.ceil(companies.length / companiesPerPage);

    const indexOfLastCompany = currentPage * companiesPerPage;
    const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
    const currentCompanies = companies.slice(indexOfFirstCompany, indexOfLastCompany);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="job-recommendation-page">
            <Navbar />
            <main className="job-recommendation-main">
                <div className="job-recommendation-container">
                    <h2>Top Companies</h2>
                    <p>
                        Based on recent industry evaluations, here are some of the top companies that might interest you. Explore these opportunities to find the right fit for your career goals.
                    </p>
                    <div className="company-list">
                        {currentCompanies.map((company, index) => (
                            <div key={index} className="company-item">
                                <h3>{company.name}</h3>
                                <p>Location: {company.location}</p>
                                <button className="apply-button">Learn More</button>
                            </div>
                        ))}
                    </div>
                    <div className="pagination">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                                onClick={() => handleClick(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                        {currentPage < totalPages && (
                            <button
                                className="next-button"
                                onClick={() => handleClick(currentPage + 1)}
                            >
                                Next
                            </button>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default JobRecommendationPage;
