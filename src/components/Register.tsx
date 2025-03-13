import React, { useState } from 'react';
import { BookOpen, Mail, Lock, User, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration attempted:', { firstName, lastName, email, password, agreeToTerms });
    // Navigate to OTP verification page after registration
    navigate('/verify');
  };

  return (
    <div className="min-h-screen flex">
      {/* Image Section */}
      <div className="hidden lg:block lg:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
          alt="Students collaborating"
        />
      </div>

      {/* Registration Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="h-8 w-8" style={{ color: '#4b9a35' }} />
            <h1 className="text-2xl font-bold text-gray-800">Tuitora</h1>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Create an account</h2>
            <p className="text-gray-600 mt-2">Join our learning community today</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:border-[#4b9a35]"
                    style={{ '--tw-ring-color': '#4b9a35' } as React.CSSProperties}
                    placeholder="First name"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:border-[#4b9a35]"
                    style={{ '--tw-ring-color': '#4b9a35' } as React.CSSProperties}
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:border-[#4b9a35]"
                  style={{ '--tw-ring-color': '#4b9a35' } as React.CSSProperties}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:border-[#4b9a35]"
                  style={{ '--tw-ring-color': '#4b9a35' } as React.CSSProperties}
                  placeholder="Create a password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="h-4 w-4 border-gray-300 rounded"
                style={{ 
                  accentColor: '#4b9a35',
                  borderColor: '#4b9a35'
                }}
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the{' '}
                <a 
                  href="#" 
                  className="hover:opacity-80"
                  style={{ color: '#4b9a35' }}
                >
                  Terms & Conditions
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full text-white py-2.5 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ 
                backgroundColor: '#4b9a35',
                '--tw-ring-color': '#4b9a35'
              } as React.CSSProperties}
            >
              Create account
            </button>

            {/* Google Sign Up */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 py-2.5 rounded-lg hover:bg-gray-50"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="h-5 w-5" />
              Continue with Google
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-8 text-center">
            <button
              onClick={() => navigate('/')}
              className="flex items-center justify-center gap-2 text-gray-600 hover:opacity-80 mx-auto"
              style={{ color: '#4b9a35' }}
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Back to login</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;