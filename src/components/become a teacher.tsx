import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    nic: '',
    accountManagerCode: '',
    gender: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    bankAccountName: '',
    accountNumber: '',
    bankName: '',
    bankBranch: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full space-y-8 flex flex-col md:flex-row gap-8">
        {/* Left side - Form */}
        <div className="w-full md:w-2/3 bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-green-900">How to become a teacher</h2>
            <p className="mt-2 text-sm text-gray-600">පහත ඇති තොරතුරු පුරවා අයදුම් කරන්න</p>
            <div className="h-1 w-24 bg-green-600 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  required
                  className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-200"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  required
                  className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-200"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-200"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="nic" className="block text-sm font-medium text-gray-700 mb-1">NIC Number *</label>
                <input
                  id="nic"
                  type="text"
                  name="nic"
                  placeholder="Enter your NIC number"
                  required
                  className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-200"
                  value={formData.nic}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="accountManagerCode" className="block text-sm font-medium text-gray-700 mb-1">Account Manager Code</label>
                <input
                  id="accountManagerCode"
                  type="text"
                  name="accountManagerCode"
                  placeholder="Enter account manager code (optional)"
                  className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-200"
                  value={formData.accountManagerCode}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
              <div className="flex space-x-6">
                <div className="flex items-center">
                  <input
                    id="male"
                    name="gender"
                    type="radio"
                    value="male"
                    className="focus:ring-green-500 h-5 w-5 text-green-600 border-gray-300 cursor-pointer"
                    checked={formData.gender === 'male'}
                    onChange={handleChange}
                  />
                  <label htmlFor="male" className="ml-2 block text-sm text-gray-700 cursor-pointer">Male</label>
                </div>
                <div className="flex items-center">
                  <input
                    id="female"
                    name="gender"
                    type="radio"
                    value="female"
                    className="focus:ring-green-500 h-5 w-5 text-green-600 border-gray-300 cursor-pointer"
                    checked={formData.gender === 'female'}
                    onChange={handleChange}
                  />
                  <label htmlFor="female" className="ml-2 block text-sm text-gray-700 cursor-pointer">Female</label>
                </div>
                <div className="flex items-center">
                  <input
                    id="preferNotToSay"
                    name="gender"
                    type="radio"
                    value="preferNotToSay"
                    className="focus:ring-green-500 h-5 w-5 text-green-600 border-gray-300 cursor-pointer"
                    checked={formData.gender === 'preferNotToSay'}
                    onChange={handleChange}
                  />
                  <label htmlFor="preferNotToSay" className="ml-2 block text-sm text-gray-700 cursor-pointer">Prefer Not To Say</label>
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                id="phoneNumber"
                type="tel"
                name="phoneNumber"
                placeholder="Enter your phone number"
                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-200"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  required
                  className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-200"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password *</label>
                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  required
                  className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-200"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="mt-8">
              <div className="flex items-center">
                <div className="h-0.5 flex-1 bg-gray-200"></div>
                <h3 className="px-4 text-lg font-semibold text-green-800">Bank Account Details</h3>
                <div className="h-0.5 flex-1 bg-gray-200"></div>
              </div>
              
              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="bankAccountName" className="block text-sm font-medium text-gray-700 mb-1">Bank Account Name *</label>
                  <input
                    id="bankAccountName"
                    type="text"
                    name="bankAccountName"
                    placeholder="Enter bank account name"
                    required
                    className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-200"
                    value={formData.bankAccountName}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700 mb-1">Account Number *</label>
                  <input
                    id="accountNumber"
                    type="text"
                    name="accountNumber"
                    placeholder="Enter account number"
                    required
                    className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-200"
                    value={formData.accountNumber}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="bankName" className="block text-sm font-medium text-gray-700 mb-1">Bank Name *</label>
                    <select
                      id="bankName"
                      name="bankName"
                      required
                      className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-200"
                      value={formData.bankName}
                      onChange={handleChange}
                    >
                      <option value="">Select your bank</option>
                      <option value="peoples-bank">People's Bank</option>
                      <option value="boc">Bank of Ceylon</option>
                      <option value="commercial">Commercial Bank</option>
                      <option value="sampath">Sampath Bank</option>
                      <option value="hnb">HNB</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="bankBranch" className="block text-sm font-medium text-gray-700 mb-1">Bank Branch *</label>
                    <input
                      id="bankBranch"
                      type="text"
                      name="bankBranch"
                      placeholder="Enter bank branch"
                      required
                      className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm transition duration-200"
                      value={formData.bankBranch}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-200 transform hover:-translate-y-1"
              >
                APPLY NOW
              </button>
            </div>
          </form>
        </div>
        
        {/* Right side - Info */}
        <div className="w-full md:w-1/3">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-green-600 text-white py-4 px-6">
              <h3 className="text-xl font-bold text-center">Become a Teacher</h3>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-md font-semibold text-green-900">Register a Blog</h4>
                    <p className="text-sm text-gray-600 mt-1">Share your knowledge and expertise</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-md font-semibold text-green-900">Start Your First Class</h4>
                    <p className="text-sm text-gray-600 mt-1">Create engaging learning content</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-md font-semibold text-green-900">Earn Income</h4>
                    <p className="text-sm text-gray-600 mt-1">Get paid for your educational content</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <h4 className="text-md font-semibold text-gray-800">Need Help?</h4>
                  <p className="text-sm text-gray-600 mt-2">Contact our support team for assistance with your application</p>
                  <a href="#" className="mt-3 inline-block text-green-600 hover:text-green-800 font-medium">Contact Support</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;