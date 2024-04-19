import { useState } from 'react'
import HeroSecton from './components/HeroSection.jsx'
import ContentSection from './components/ContentSection.jsx'
import FooterSection from './components/FooterSection.jsx'
import LoginSection from './components/LoginSection.jsx'
import InterviewSection from './components/InterviewSection.jsx'
import VideoRecordingSection from './components/VideoRecordingSection.jsx'
import Assessment from './components/Assessment.jsx'
import SidebarSection from './components/SidebarSection.jsx'
import LandingPage from './pages/LandingPage.jsx'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'

import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
  <BrowserRouter>
    <Routes>
    <Route path="/Home" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/video-recording" element={<VideoRecordingSection />} />
    <Route path="/Assessment" element={<Assessment />} />
    <Route path="/" element={<LandingPage />} />
    </Routes>
  </BrowserRouter>
      
      
    </>
  )
}

export default App
