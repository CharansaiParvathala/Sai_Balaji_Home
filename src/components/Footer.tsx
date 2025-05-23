import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Contact Us</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Email: info@srisaibalajiconst.com</p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Phone: +91 98765 43210</p>
            <p className="text-gray-600 dark:text-gray-400">Address: 123 Pipeline Road, Hyderabad, India</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-blue-600 dark:text-blue-400 hover:underline">Services</a></li>
              <li><a href="#projects" className="text-blue-600 dark:text-blue-400 hover:underline">Projects</a></li>
              <li><a href="#temples" className="text-purple-600 dark:text-purple-400 hover:underline">Temples</a></li>
              <li><a href="#contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-400">
              To provide high-quality pipeline construction services while maintaining spiritual values and integrity in all our business practices.
            </p>
            <div className="mt-4 flex items-center">
              <span className="text-yellow-500 mr-1">ॐ</span>
              <span className="text-gray-600 dark:text-gray-400">Om Shanti Shanti Shanti</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sri Sai Balaji Constructions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;