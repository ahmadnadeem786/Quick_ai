import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1b3c53] text-gray-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
        {/* About */}
        <div className="flex flex-col">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#d2c1b6] mb-4">Quick.AI</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xs">
            Your all-in-one platform for AI-powered solutions — generate content, create images, analyze resumes, and more.
          </p>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-lg font-semibold text-[#d2c1b6] mb-4">AI Tools</h3>
          <ul className="space-y-3 text-sm sm:text-base">
            {[
              { name: 'Article Generator', path: '/tools/article' },
              { name: 'Image Generator', path: '/tools/image' },
              { name: 'Resume Analyzer', path: '/tools/resume' },
              { name: 'AI Chatbot', path: '/tools/chatbot' },
            ].map((tool, index) => (
              <li key={index}>
                <a
                  href={tool.path}
                  className="hover:text-white transition-colors duration-200 ease-in-out"
                  aria-label={`Navigate to ${tool.name}`}
                >
                  {tool.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-[#d2c1b6] mb-4">Resources</h3>
          <ul className="space-y-3 text-sm sm:text-base">
            {[
              { name: 'Blog', path: '/blog' },
              { name: 'Docs', path: '/docs' },
              { name: 'Support', path: '/support' },
              { name: 'FAQs', path: '/faqs' },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className="hover:text-white transition-colors duration-200 ease-in-out"
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-[#d2c1b6] mb-4">Get in Touch</h3>
          <p className="text-sm sm:text-base text-gray-400 mb-4">
            <a
              href="mailto:support@quickai.com"
              className="hover:text-white transition-colors duration-200"
              aria-label="Email support at support@quickai.com"
            >
              support@quickai.com
            </a>
          </p>
          <div className="flex space-x-4">
            {[
              { Icon: FaFacebookF, path: 'https://facebook.com', label: 'Facebook' },
              { Icon: FaTwitter, path: 'https://twitter.com', label: 'Twitter' },
              { Icon: FaLinkedinIn, path: 'https://linkedin.com', label: 'LinkedIn' },
              { Icon: FaGithub, path: 'https://github.com', label: 'GitHub' },
            ].map(({ Icon, path, label }, i) => (
              <a
                key={i}
                href={path}
                className="text-[#d2c1b6] hover:text-white hover:scale-110 transition-all duration-200 text-xl"
                aria-label={`Follow us on ${label}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs sm:text-sm text-gray-500 border-t border-[#d2c1b6]/30 pt-6">
        &copy; {new Date().getFullYear()}{' '}
        <span className="text-[#d2c1b6] font-semibold">Quick.AI</span> — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;