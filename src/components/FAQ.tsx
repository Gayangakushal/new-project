import React from 'react';

const TuitoraFAQ = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      

      {/* Hero Section */}
      <div className="relative bg-green-500 py-16">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions (FAQ)</h2>
        </div>
      </div>

      {/* FAQ Content Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
          {/* Example FAQ items */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-green-600 mb-2">How do I register as a student?</h3>
            <p className="text-gray-700">
              You can register as a student by clicking on the "REGISTER" button in the top navigation bar and filling out the registration form. Once submitted, you'll receive a confirmation email with further instructions.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-green-600 mb-2">How can I become a teacher on TuitorA?</h3>
            <p className="text-gray-700">
              To become a teacher, click on the "BECOME A TEACHER" link in the navigation menu. You'll need to provide your educational qualifications, teaching experience, and go through a verification process before you can start teaching.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-green-600 mb-2">What subjects are offered on TuitorA?</h3>
            <p className="text-gray-700">
              TuitorA offers a wide range of subjects across different educational levels. These include Mathematics, Sciences, Languages, Humanities, and specialized courses. You can browse all available subjects in the "CLASS" section.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-green-600 mb-2">How do payments work?</h3>
            <p className="text-gray-700">
              Payments can be made through various methods including credit/debit cards, digital wallets, and bank transfers. All financial transactions are secure and encrypted. For more details, please visit our payment policy section.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-2">How can I contact support?</h3>
            <p className="text-gray-700">
              For any assistance, you can reach our support team through the "Contact Us" link in the footer section. Alternatively, you can email us at support@tuitora.com or call our helpline at +1-234-567-8900.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TuitoraFAQ;