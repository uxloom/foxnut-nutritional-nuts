
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="animate-fade-in">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/3d2aea68-aa94-4ca9-8734-5faee44db149.png" 
                alt="Foxnut Logo" 
                className="h-12 mb-4" 
              />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A high-quality supplier of foxnut (makhana) products. We are committed to providing the best quality foxnuts sourced directly from farmers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h3 className="text-lg font-bold mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-brand-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-brand-400 transition-colors inline-block py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-brand-400 transition-colors inline-block py-1">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-brand-400 transition-colors inline-block py-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-brand-400 transition-colors inline-block py-1">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors inline-block py-1">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors inline-block py-1">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-lg font-bold mb-6 relative">
              Contact
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-brand-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="text-brand-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="text-brand-400 mr-3 mt-1 flex-shrink-0" />
                <a href="mailto:info@foxnuts.com" className="text-gray-400 hover:text-brand-400 transition-colors">
                  info@foxnuts.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="text-brand-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Main Street, Darbhanga, Bihar, India - 846001
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            <h3 className="text-lg font-bold mb-6 relative">
              Business Hours
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-brand-500"></span>
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="font-medium">Monday - Friday:</span>
                <br />9:00 AM - 6:00 PM
              </li>
              <li className="text-gray-400">
                <span className="font-medium">Saturday:</span>
                <br />9:00 AM - 4:00 PM
              </li>
              <li className="text-gray-400">
                <span className="font-medium">Sunday:</span>
                <br />Closed
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} Foxnut Dryfruit. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
