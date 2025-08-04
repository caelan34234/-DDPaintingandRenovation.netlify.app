import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-base sm:text-lg">DD</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">DD Painting</h3>
                <p className="text-xs sm:text-sm text-gray-400">& Renovation</p>
              </div>
            </div>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
              Award-winning painting and renovation services in Darwin. Your trusted local experts for all home improvement needs.
            </p>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-yellow-400 fill-current sm:w-4 sm:h-4" />
              ))}
              <span className="text-xs sm:text-sm text-gray-400 ml-2">5.0 Rating</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">Painting Services</Link></li>
            <li><Link to="/services" className="hover:text-primary-400 transition-colors">Home Renovations</Link></li>
            <li><Link to="/services" className="hover:text-primary-400 transition-colors">Electrical Services</Link></li>
            <li><Link to="/services" className="hover:text-primary-400 transition-colors">Air Conditioning</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
            <li><span className="text-gray-500 cursor-not-allowed">Projects <span className="text-xs bg-primary-600 text-white px-1.5 py-0.5 rounded-full ml-1">Coming Soon</span></span></li>
            <li><Link to="/faq" className="hover:text-primary-400 transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-400 text-sm sm:text-base">
              <div className="flex items-center space-x-3">
                <Phone size={14} className="text-primary-400 sm:w-4 sm:h-4" />
            <a href="tel:0402257184" className="hover:text-primary-400 transition-colors">
                  040 225 7184
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={14} className="text-primary-400 sm:w-4 sm:h-4" />
            <a href="mailto:swaradwija12@gmail.com" className="hover:text-primary-400 transition-colors break-all">
                  swaradwija12@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={14} className="text-primary-400 mt-1 sm:w-4 sm:h-4" />
                <span>165 McMillans Rd<br />Darwin, NT</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-xs sm:text-sm">&copy; 2025 DD Painting and Renovation. All rights reserved. Licensed and Insured.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;