import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ResourcePage from './pages/ResourcePage';
import SkillTestPage from './pages/SkillTestPage';
import JobRecommendationPage from './pages/JobRecommendationPage';
import MentorPage from './pages/MentorPage';
import CodingInterviewPage from './pages/CodingInterviewPage';
import CompanyDashboardPage from './pages/CompanyDashboardPage';
import UserDashboardPage from './pages/UserDashboardPage';
import DashboardPage from './pages/DashboardPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/resources" element={<ResourcePage />} />
        <Route path="/skill-test" element={<SkillTestPage />} />
        <Route path="/job-recommendations" element={<JobRecommendationPage />} />
        <Route path="/mentor" element={<MentorPage />} />
        <Route path="/coding-interview" element={<CodingInterviewPage />} />
        {/* <Route path="/company-dashboard" element={<CompanyDashboardPage />} />
        <Route path="/user-dashboard" element={<UserDashboardPage />} /> */}
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
