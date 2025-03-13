import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedStream, setSelectedStream] = useState('');
  
  // Sample data for dropdowns
  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata'];
  const grades = ['Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];
  const streams = ['Science', 'Commerce', 'Arts', 'Computer Science', 'Engineering'];
  
  // Sample academy data
  const academies = Array(6).fill({
    name: 'PSD ACADEMY',
    tagline: 'Academic Excellence'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with search */}
      <div 
        className="w-full bg-cover bg-center h-64 flex items-center justify-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(255, 255, 255, 0.7)"
        }}
      >
        <div className="bg-white p-6 rounded-lg shadow-md w-11/12 max-w-3xl">
          <div className="flex flex-col space-y-4">
            {/* Search input */}
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200">
                Search
              </button>
            </div>
            
            {/* Filter dropdowns */}
            <div className="grid grid-cols-3 gap-4">
              <div className="relative">
                <button 
                  className="w-full flex items-center justify-between px-4 py-2 bg-gray-200 rounded-md"
                  onClick={() => document.getElementById('cityDropdown')?.classList.toggle('hidden')}
                >
                  <span className="text-gray-700">{selectedCity || 'City'}</span>
                  <ChevronDown size={20} />
                </button>
                <div id="cityDropdown" className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg hidden">
                  <ul>
                    {cities.map((city, index) => (
                      <li 
                        key={index} 
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setSelectedCity(city);
                          document.getElementById('cityDropdown')?.classList.add('hidden');
                        }}
                      >
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="relative">
                <button 
                  className="w-full flex items-center justify-between px-4 py-2 bg-gray-200 rounded-md"
                  onClick={() => document.getElementById('gradeDropdown')?.classList.toggle('hidden')}
                >
                  <span className="text-gray-700">{selectedGrade || 'Grade'}</span>
                  <ChevronDown size={20} />
                </button>
                <div id="gradeDropdown" className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg hidden">
                  <ul>
                    {grades.map((grade, index) => (
                      <li 
                        key={index} 
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setSelectedGrade(grade);
                          document.getElementById('gradeDropdown')?.classList.add('hidden');
                        }}
                      >
                        {grade}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="relative">
                <button 
                  className="w-full flex items-center justify-between px-4 py-2 bg-gray-200 rounded-md"
                  onClick={() => document.getElementById('streamDropdown')?.classList.toggle('hidden')}
                >
                  <span className="text-gray-700">{selectedStream || 'Stream'}</span>
                  <ChevronDown size={20} />
                </button>
                <div id="streamDropdown" className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg hidden">
                  <ul>
                    {streams.map((stream, index) => (
                      <li 
                        key={index} 
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setSelectedStream(stream);
                          document.getElementById('streamDropdown')?.classList.add('hidden');
                        }}
                      >
                        {stream}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Popular classes section */}
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-center text-2xl font-bold mb-10 uppercase">Most Popular Class</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academies.map((academy, index) => (
            <div key={index} className="border border-gray-200 rounded-md p-6 flex flex-col items-center hover:shadow-md transition duration-200">
              <div className="w-24 h-24 mb-4">
                <AcademyLogo />
              </div>
              <h3 className="text-navy-blue font-bold text-lg">{academy.name}</h3>
              <p className="text-orange-400 text-sm">{academy.tagline}</p>
              <p className="text-gray-600 text-sm mt-2">{academy.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Academy logo component
function AcademyLogo() {
  return (
    <div className="relative w-full h-full">
      {/* Laurel wreath */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full border-4 border-navy-blue rounded-full flex items-center justify-center">
          <div className="w-3/4 h-3/4 bg-white rounded-full flex items-center justify-center">
            {/* Graduation cap */}
            <div className="w-10 h-5 bg-navy-blue absolute top-5"></div>
            {/* Book */}
            <div className="w-8 h-6 bg-orange-400 rounded-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;