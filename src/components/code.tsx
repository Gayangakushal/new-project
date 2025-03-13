import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

function OTPVerification() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(32); // 32 seconds timer
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Focus first input on mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }

    // Timer countdown
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if value is entered
      if (value && index < 5 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      // Move to previous input on backspace if current input is empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join('');
    console.log('OTP submitted:', otpValue);
    // Add your verification logic here
  };

  const handleResend = () => {
    setTimer(32);
    setOtp(['', '', '', '', '', '']);
    // Add your resend logic here
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

      {/* OTP Verification Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-12">
            <BookOpen className="h-8 w-8" style={{ color: '#4b9a35' }} />
            <h1 className="text-2xl font-bold text-gray-800">Tuitora</h1>
          </div>

          {/* OTP Form */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              OTP Verification
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="flex justify-center gap-2 mb-8">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                   /// ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4b9a35] focus:border-[#4b9a35]"
                    maxLength={1}
                  />
                ))}
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: '#4b9a35' }}
              >
                Submit
              </button>

              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-gray-600">
                  {String(Math.floor(timer / 60)).padStart(2, '0')}:
                  {String(timer % 60).padStart(2, '0')}
                </span>
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={timer > 0}
                  className={`font-medium ${
                    timer > 0 ? 'text-gray-400' : 'text-[#4b9a35] hover:opacity-80'
                  }`}
                >
                  Resend OTP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTPVerification;