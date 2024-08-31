import React, { useState } from 'react';
import './MCQTestPage.css'; // Optional: for styling
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MCQTestPage = () => {
    // Example array of questions and options
  
    const questions = [
        {
            question: "What is the name of the network topology in which there are bi-directional links between each possible node?",
            options: ["Ring", "Star", "Tree", "Mesh"]
        },
        {
            question: "Which language is used for styling web pages?",
            options: ["HTML", "CSS", "JavaScript", "Python"]
        },
        {
            question: "What does HTTP stand for?",
            options: ["Hypertext Transfer Protocol", "Hyperlink Text Protocol", "High Transfer Text Protocol", "Hypertext Transfer Process"]
        },
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Lisbon"]
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"]
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Pb", "Fe"]
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"]
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"]
        }
    ];

    const questionsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');

    // Calculate the number of pages
    const totalPages = Math.ceil(questions.length / questionsPerPage);

    // Get the questions for the current page
    const startIndex = currentPage * questionsPerPage;
    const currentQuestions = questions.slice(startIndex, startIndex + questionsPerPage);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="mcq-test-page">
            < Navbar/>
            <h2>MCQ Test</h2>
            {currentQuestions.map((q, qIndex) => (
                <div key={qIndex} className="question-container">
                    <h3>{q.question}</h3>
                    <form>
                        {q.options.map((option, index) => (
                            <div key={index} className="form-group">
                                <input
                                    type="radio"
                                    id={`option-${qIndex}-${index}`}
                                    name={`mcq-option-${qIndex}`}
                                    value={option}
                                    checked={selectedOption === option}
                                    onChange={handleOptionChange}
                                />
                                <label htmlFor={`option-${qIndex}-${index}`}>{option}</label>
                            </div>
                        ))}
                    </form>
                </div>
            ))}
            <div className="pagination">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 0}
                >
                    Previous
                </button>
                <span>Page {currentPage + 1} of {totalPages}</span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages - 1}
                >
                    Next
                </button>
            </div>
            <Footer/>
        </div>
    );
};

export default MCQTestPage;
