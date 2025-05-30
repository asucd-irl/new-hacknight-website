import React from 'react';
import { LinkPreview } from "@/components/ui/link-preview";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t py-8 bg-[#FEFFF3]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-600">Follow us on our socials</p>
          <div className="flex space-x-4 mt-2">
            <LinkPreview 
              url="https://www.linkedin.com/company/hacknight/" 
              width={250}
              height={150}
              className="text-gray-600 hover:text-brand transition-colors"
            >
              LinkedIn
            </LinkPreview>
            <LinkPreview 
              url="https://www.instagram.com/ucdhacknight/"
              width={250}
              height={150}
              className="text-gray-600 hover:text-brand transition-colors"
            >
              Instagram
            </LinkPreview>
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
