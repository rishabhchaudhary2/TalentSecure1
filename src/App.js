import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserLoginPage from './pages/UserLoginPage';
import OrganizationLoginPage from './pages/OrganizationLoginPage';
import UserSignupPage from './pages/UserSignupPage';
import OrganizationSignupPage from './pages/OrganizationSignupPage';
import ResourcePage from './pages/ResourcePage';
import SkillTestPage from './pages/SkillTestPage';
import JobRecommendationPage from './pages/JobRecommendationPage';
import MentorPage from './pages/MentorPage';
import CodingInterviewPage from './pages/CodingInterviewPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-login" element={<UserLoginPage />} />
        <Route path="/organization-login" element={<OrganizationLoginPage />} />
        <Route path="/user-signup" element={<UserSignupPage />} />
        <Route path="/organization-signup" element={<OrganizationSignupPage />} />
        <Route path="/resources" element={<ResourcePage />} />
        <Route path="/skill-test" element={<SkillTestPage />} />
        <Route path="/job-recommendations" element={<JobRecommendationPage />} />
        <Route path="/mentor" element={<MentorPage />} />
        <Route path="/coding-interview" element={<CodingInterviewPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
