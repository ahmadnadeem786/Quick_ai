import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1B3C53] text-gray-300 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        
        {/* About */}
        <div>
          <h2 className="text-3xl font-bold text-[#D2C1B6] mb-4">Quick.AI</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            One platform for all your AI needs — generate content, create images, build resumes, and more.
          </p>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-lg font-semibold text-[#D2C1B6] mb-4">AI Tools</h3>
          <ul className="space-y-2 text-sm">
            {['Article Generator', 'Image Generator', 'Resume Analyzer', 'AI Chatbot'].map((tool, index) => (
              <li key={index}>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  {tool}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold  text-[#D2C1B6] mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            {['Blog', 'Docs', 'Support', 'FAQs'].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold  text-[#D2C1B6] mb-4">Get in Touch</h3>
          <p className="text-sm text-gray-400 mb-4">support@quickai.com</p>
          <div className="flex space-x-4">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub].map((Icon, i) => (
              <a key={i} href="#" className=" text-[#D2C1B6] hover:text-white transition text-xl">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-4 mx-auto w-6xl text-center text-xs text-gray-500 border-t border-[#D2C1B6] pt-7">
        &copy; {new Date().getFullYear()} <span className="text- text-[#D2C1B6] font-semibold">Quick.AI</span> — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
