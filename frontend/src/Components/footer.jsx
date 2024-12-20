import React from "react";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex flex-col h-[10vh] bg-gray-50">
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-6 md:px-12 flex flex-wrap justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png"
              alt="Gemini Logo"
              className="w-12 h-12 mr-3"
            />
            <span className="text-lg font-bold text-white tracking-wide">
              Gemini
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/sohan-vishwas-455451301/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>

            <a
              href="https://github.com/sohanvishwas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-300 hover:text-gray-500 transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </a>

            <a
              href="tel:+919105531161"
              aria-label="Phone"
              className="text-gray-300 hover:text-green-500 transition-colors"
            >
              <FaPhone className="w-6 h-6" />
            </a>

            <a
              href="mailto:sohan23@navgurukul.org"
              aria-label="Email"
              className="text-gray-300 hover:text-red-500 transition-colors"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
