// AboutUs.js
import React from 'react';
import './AboutUs.css'; // Custom CSS file we'll create

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering students to achieve academic excellence through personalized learning
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Our Mission */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              We are dedicated to providing high-quality education that nurtures curiosity, 
              builds confidence, and helps students reach their full potential. Our experienced 
              tutors create a supportive learning environment tailored to individual needs.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be a leading educational platform that transforms lives through innovative 
              teaching methods and a passion for learning, preparing students for a bright future.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div className="team-card bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800">Sarah Johnson</h3>
              <p className="text-gray-600">Lead Tutor - Mathematics</p>
            </div>
            {/* Team Member 2 */}
            <div className="team-card bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800">Michael Chen</h3>
              <p className="text-gray-600">Science Specialist</p>
            </div>
            {/* Team Member 3 */}
            <div className="team-card bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800">Emily Davis</h3>
              <p className="text-gray-600">English Instructor</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-green-500 text-white p-6 rounded-lg text-center">
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-lg">Students Taught</p>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-lg text-center">
            <h3 className="text-3xl font-bold">10+</h3>
            <p className="text-lg">Years Experience</p>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-lg text-center">
            <h3 className="text-3xl font-bold">95%</h3>
            <p className="text-lg">Success Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;