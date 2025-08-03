import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DD</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">DD Painting</h3>
                <p className="text-sm text-gray-400">& Renovation</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Award-winning painting and renovation services in Darwin. Your trusted local experts for all home improvement needs.
            </p>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-current" />
              ))}
              <span className="text-sm text-gray-400 ml-2">5.0 Rating</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">Painting Services</Link></li>
            <li><Link to="/services" className="hover:text-primary-400 transition-colors">Home Renovations</Link></li>
            <li><Link to="/services" className="hover:text-primary-400 transition-colors">Electrical Services</Link></li>
            <li><Link to="/services" className="hover:text-primary-400 transition-colors">Air Conditioning</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
            <li><span className="text-gray-500 cursor-not-allowed">Projects <span className="text-xs bg-primary-600 text-white px-2 py-1 rounded-full ml-1">Coming Soon</span></span></li>
            <li><Link to="/faq" className="hover:text-primary-400 transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-400" />
            <a href="tel:0402257184" className="hover:text-primary-400 transition-colors">
                  040 225 7184
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-400" />
            <a href="mailto:swaradwija12@gmail.com" className="hover:text-primary-400 transition-colors">
                  swaradwija12@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary-400 mt-1" />
                <span>165 McMillans Rd<br />Darwin, NT</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 DD Painting and Renovation. All rights reserved. Licensed and Insured.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;