import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Paintbrush, 
  Wrench, 
  Zap, 
  Wind, 
  Star, 
  Shield, 
  Award, 
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import TestimonialCarousel from '../components/TestimonialCarousel';
import QuoteForm from '../components/QuoteForm';

const Home = () => {
  const services = [
    {
      icon: Paintbrush,
      title: 'Professional Painting',
      description: 'Interior and exterior painting with premium quality finishes',
      color: 'text-blue-600'
    },
    {
      icon: Wrench,
      title: 'Home Renovation',
      description: 'Complete kitchen and bathroom renovations',
      color: 'text-primary-600'
    },
    {
      icon: Zap,
      title: 'Electrical Services',
      description: 'Licensed electrical work and installations',
      color: 'text-yellow-600'
    },
    {
      icon: Wind,
      title: 'Air Conditioning',
      description: 'AC installation, repair, and maintenance',
      color: 'text-cyan-600'
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in Darwin'
    },
    {
      icon: Shield,
      title: 'Fully Licensed & Insured',
      description: 'Complete peace of mind guaranteed'
    },
    {
      icon: Clock,
      title: 'On-Time Service',
      description: 'Reliable scheduling you can count on'
    },
    {
      icon: CheckCircle,
      title: 'Quality Guaranteed',
      description: 'Warranty on all our work'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-secondary-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            >
              Top-Rated Painting & Renovation Experts in{' '}
              <span className="text-primary-400 block sm:inline">Darwin</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0"
            >
              Transform your home with our award-winning painting, renovation, electrical, and air conditioning services. Serving Darwin and surrounding suburbs with excellence since day one.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-2 sm:px-0"
            >
              <a
                href="#quote"
                className="bg-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center group min-h-[48px]"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <Link
                to="/projects"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 inline-flex items-center justify-center min-h-[48px]"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute right-10 top-1/4 w-20 h-20 bg-primary-500/20 rounded-full blur-xl"
        ></motion.div>
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute left-10 bottom-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
        ></motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              Our Services at a Glance
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              From painting to full renovations, electrical work to air conditioning - we're your one-stop solution for all home improvement needs in Darwin.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 text-center group border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-100 mb-4 sm:mb-6 group-hover:scale-110 transition-transform ${service.color}`}>
                  <service.icon size={28} className="sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose DD Painting?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another painting company. We're your local Darwin experts committed to delivering exceptional results every time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Quote Form */}
      <section id="quote" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get your free, no-obligation quote today. We'll provide detailed estimates for your painting and renovation project.
            </p>
          </motion.div>
          <QuoteForm />
        </div>
      </section>
    </div>
  );
};

export default Home;