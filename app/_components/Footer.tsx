import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t py-8 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-600">Follow us on our socials</p>
          <div className="flex space-x-4 mt-2">
            <a href="https://linkedin.com" className="text-gray-600 hover:text-brand transition-colors">
              LinkedIn
            </a>
            <a href="https://instagram.com" className="text-gray-600 hover:text-brand transition-colors">
              Instagram
            </a>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Hack Nights @ UC Davis. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
