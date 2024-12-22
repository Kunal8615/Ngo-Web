import React from 'react';

function Contact() {
  return (
    <>
      <div className="p-6 bg-gray-100 text-gray-800">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">Contact Us</h1>

        <div className=" border border-black max-w-4xl mx-auto bg-white p-6 rounded-lg space-y-6">
          <div className="text-lg text-gray-700">
            <strong>Address:</strong>
            <p>Plot No. 4 Charndra Park, Opp.NSIT,( Near Shani Mandir), Dwarka Mod Highway, New Delhi-110078</p>
          </div>

          <div className="text-lg text-gray-700">
            <strong>Phone:</strong>
            <p>+91 9212412283</p>
          </div>

          <div className="text-lg text-gray-700">
            <strong>Email:</strong>
            <p>nsifindia@gmail.com</p>
          </div>

        
        </div>

        {/* Optional Contact Form */}
        <div className="mt-12 border border-black bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get In Touch</h2>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
