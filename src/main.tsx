import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import ContactUs from "./components/ContactUS"; 
import App from './App.tsx'
import TuitoraFAQ from './components/fAQ.tsx';
import Blog from './components/blog.tsx'; // Renamed 'blog' to 'Blog'
import BecomeATeacher from './components/become a teacher.tsx'; // Renamed 'becomeateacher' to 'becomeateacher'
import Class from './components/class.tsx'; // Renamed 'class' to 'class'
import AboutUs from './components/about.tsx'; // Renamed 'aboutus' to 'aboutus'
import Register from './components/Register.tsx';
import OTPVerification from './components/code.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/FAQ" element={<TuitoraFAQ />} />
        <Route path="/blog" element={<Blog />} /> {/* Fixed component usage */}
        <Route path="/becomeateacher" element={<BecomeATeacher />} />
        <Route path="/class" element={<Class />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-otp" element={<OTPVerification />} />
      </Routes>
    </Router>
  </StrictMode>
);
// import React from 'react';