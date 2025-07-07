import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold bg-gradient-to-r text-center from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;