import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  Shield, 
  Clock, 
  CheckCircle,
  ChevronRight,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import servicesData from '../data/services.json';

// Import icons directly
import { Paintbrush, Home, Zap, Wind } from 'lucide-react';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Type assertion for servicesData
  const typedServicesData = servicesData as Record<string, any>;
  const service = typedServicesData[slug || ''];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link 
            to="/services"
            className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const getServiceIcon = (iconName: string) => {
    switch(iconName) {
      case 'Paintbrush': return Paintbrush;
      case 'Home': return Home;
      case 'Zap': return Zap;
      case 'Wind': return Wind;
      default: return Paintbrush;
    }
  };

  const ServiceIcon = getServiceIcon(service.icon);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Link 
              to="/services"
              className="inline-flex items-center text-white hover:text-primary-200 mb-4"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-gray-200">
              {service.shortDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg p-8 mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our {service.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {service.longDescription}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg p-8 mb-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h3>
                <div className="space-y-6">
                  {service.process.map((step: any, index: number) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Service Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg p-6 mb-6"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ServiceIcon className="text-primary-600" size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-primary-600" size={20} />
                    <div>
                      <p className="text-sm text-gray-600">Typical Duration</p>
                      <p className="font-semibold text-gray-900">{service.typicalDuration}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Shield className="text-primary-600" size={20} />
                    <div>
                      <p className="text-sm text-gray-600">Warranty</p>
                      <p className="font-semibold text-gray-900">{service.warranty}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="text-primary-600" size={20} />
                    <div>
                      <p className="text-sm text-gray-600">Starting Price</p>
                      <p className="font-semibold text-primary-600">{service.startingPrice}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl shadow-lg p-6 text-white"
              >
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-primary-100 mb-6">
                  Contact us today for a free consultation and quote for your {service.title.toLowerCase()} project.
                </p>
                <div className="space-y-3">
                  <Link 
                    to="/contact"
                    className="w-full bg-white text-primary-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                  >
                    Get Free Quote
                  </Link>
                  <a 
                    href="tel:0889456789"
                    className="w-full border border-white text-white py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                  >
                    <Phone className="mr-2" size={16} />
                    Call (08) 8945 6789
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {service.faq.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-600">
                    {item.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Recent {service.title} Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.gallery.map((image: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg"
                >
                  <img
                    src={image}
                    alt={`${service.title} project ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold">{service.title}</p>
                      <p className="text-sm text-gray-200">View Project</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;