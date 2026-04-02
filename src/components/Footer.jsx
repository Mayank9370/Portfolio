import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { personal } from '../data/personal';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand + Tagline */}
          <div className="text-center sm:text-left">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {'<MK />'}
            </span>
            <p className="text-gray-500 text-sm mt-1.5 max-w-xs">
              {personal.tagline}
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-500 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-500 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 text-gray-500 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 ml-2"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800/50 text-center">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} {personal.name}. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
