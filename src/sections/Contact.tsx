import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-amber-50 to-beige-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-yellow-800 dark:text-white mb-4">
            Contact Us
          </h2>
          <p className="text-yellow-700 dark:text-gray-400 max-w-3xl mx-auto">
            Get in touch with us for your pipeline construction needs or spiritual inquiries.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <form className="bg-amber-50 dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-yellow-800 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-yellow-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white dark:bg-gray-700 text-yellow-800 dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-yellow-800 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-yellow-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white dark:bg-gray-700 text-yellow-800 dark:text-white"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-yellow-800 dark:text-gray-300 mb-2">
                Subject
              </label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-2 border border-yellow-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white dark:bg-gray-700 text-yellow-800 dark:text-white"
                placeholder="Pipeline Construction Inquiry"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-yellow-800 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full px-4 py-2 border border-yellow-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white dark:bg-gray-700 text-yellow-800 dark:text-white"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <div className="flex justify-center">
              <button 
                type="submit" 
                className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-lg shadow-md transform hover:scale-105 transition-transform"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;