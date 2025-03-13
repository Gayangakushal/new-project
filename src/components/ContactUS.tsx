import React from 'react';
import { MapPin, Mail, Phone, Building, Facebook, Instagram, Video, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="md:w-1/2 z-10">
            <h1 className="text-3xl font-bold mb-6">
              <span className="text-green-500">C</span>ontact Us
            </h1>
            <p className="mb-6 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere minima
              assumenda, culpa perspiciatis nesciunt ut unde harum corporis obcaecati
              commodi nobis! Inventore aliquam eos earum iste dignissimos at
              doloremque totam.
            </p>
            <p className="mb-8 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere minima
              assumenda, culpa perspiciatis nesciunt ut unde harum corporis obcaecati
              commodi nobis! Inventore aliquam eos earum iste dignissimos at
              doloremque totam.
            </p>
            <div className="flex space-x-4 mb-8">
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center">
                Find Agent
              </button>
              <div className="flex items-center">
                <span className="mr-2 font-semibold">077-0691283</span>
                <Phone className="w-6 h-6" />
              </div>
            </div>
          </div>
          
          {/* Right Section - Form */}
          <div className="md:w-1/2 md:pl-8 z-10">
            <div className="bg-white p-6 rounded-lg shadow-lg text-black">
              <div className="mb-4">
                <label className="block text-gray-800 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 font-medium mb-2">Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Your Mobile Number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 font-medium mb-2">Message</label>
                <textarea
                  placeholder="Type Your Message Here......"
                //  rows="6"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition duration-300">
                Send Message
              </button>
            </div>
          </div>
        </div>
        
        {/* Background image would be here in a real implementation */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-800 z-0"></div>
      </div>

      {/* Contact Info Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Addresses */}
          <div className="border-b border-gray-700 pb-4">
            <h3 className="text-xl font-semibold mb-1">Our Email Address</h3>
            <p className="text-gray-400 mb-2">Another Problem to Contact</p>
            <div className="flex items-center text-green-500">
              <Mail className="w-5 h-5 mr-2" />
              <span>example@gmail.com</span>
            </div>
          </div>
          
          <div className="border-b border-gray-700 pb-4">
            <h3 className="text-xl font-semibold mb-1">Second Email Address</h3>
            <p className="text-gray-400 mb-2">Any website Problem to Contact</p>
            <div className="flex items-center text-green-500">
              <Mail className="w-5 h-5 mr-2" />
              <span>example@gmail.com</span>
            </div>
          </div>
          
          <div className="border-b border-gray-700 pb-4">
            <h3 className="text-xl font-semibold mb-1">Our Address</h3>
            <p className="text-gray-400 mb-2">Only Support Direct With Company</p>
            <div className="flex items-center text-green-500">
              <Building className="w-5 h-5 mr-2" />
              <span>Example Your Company Address</span>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-4 py-8">
        
        {/* Map Section */}
<div className="container mx-auto px-4 py-8">
  <h3 className="flex items-center text-xl font-semibold mb-4">
    <MapPin className="w-5 h-5 mr-2" />
    Location
  </h3>
  <div className="border-2 border-green-500 rounded-lg overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.409494628083!2d80.22251427643037!3d6.075389093910727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae171429cd5ed13%3A0xa260da29c071345b!2sNovoNex%20Software%20Solutions!5e0!3m2!1ssi!2slk!4v1740742394156!5m2!1ssi!2slk"
      width="100%"
      height="450"
      style={{ border: 0 }}
    //  allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

      </div>

      {/* Social Media Section */}
      <div className="container mx-auto px-4 py-8 pb-16">
        <h3 className="flex items-center text-xl font-semibold mb-6">
          <MessageCircle className="w-5 h-5 mr-2" />
          Social
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-300 rounded-lg p-4 flex flex-col items-center justify-center">
            <Facebook className="w-8 h-8 text-blue-800 mb-2" />
            <span className="text-black font-medium">FACEBOOK</span>
          </div>
          <div className="bg-gray-300 rounded-lg p-4 flex flex-col items-center justify-center">
            <Instagram className="w-8 h-8 text-pink-600 mb-2" />
            <span className="text-black font-medium">INSTAGRAM</span>
          </div>
          <div className="bg-gray-300 rounded-lg p-4 flex flex-col items-center justify-center">
            <Video className="w-8 h-8 text-red-600 mb-2" />
            <span className="text-black font-medium">YOUTUBE</span>
          </div>
          <div className="bg-gray-300 rounded-lg p-4 flex flex-col items-center justify-center">
            <MessageCircle className="w-8 h-8 text-green-600 mb-2" />
            <span className="text-black font-medium">WHATSAPP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;