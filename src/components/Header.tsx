import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/faq', label: 'FAQ' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-1">
            <Link to="/" className="flex items-center space-x-1 sm:space-x-2">
              <img 
                src="/images/DDLogo-1.webp" 
                alt="DD Painting & Renovation" 
                className="h-8 sm:h-10 md:h-12 w-auto object-contain"
              />
              <span className="text-base sm:text-xl font-bold text-gray-900 hidden xs:block">DD Painting & Renovation</span>
              <span className="text-sm font-bold text-gray-900 block xs:hidden">DD Painting</span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm xl:text-base font-medium transition-colors hover:text-primary-600 ${
                   location.pathname === item.path
                     ? 'text-primary-600 border-b-2 border-primary-600 pb-1'
                     : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden xl:flex items-center justify-end space-x-4 lg:space-x-6 flex-1">
            <a
              href="tel:0402257184"
              className="flex items-center space-x-1 lg:space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              <Phone size={14} className="lg:w-4 lg:h-4" />
              <span className="text-xs lg:text-sm font-medium">040 225 7184</span>
            </a>
          </div>

          {/* Mobile Contact Button */}
          <div className="flex xl:hidden">
            <a
              href="tel:0402257184"
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors mr-2 sm:mr-3"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="px-3 sm:px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-base sm:text-lg font-medium transition-colors ${
                       location.pathname === item.path
                         ? 'text-blue-600'
                         : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-3 sm:pt-4 border-t border-gray-200">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full bg-blue-600 text-white text-center py-2.5 sm:py-3 px-4 rounded-lg text-sm sm:text-base font-medium hover:bg-blue-700 transition-colors min-h-[44px] flex items-center justify-center"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;