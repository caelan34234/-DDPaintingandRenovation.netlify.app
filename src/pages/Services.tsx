import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Paintbrush, 
  Home, 
  ChefHat, 
  Bath, 
  Zap, 
  Wind,
  CheckCircle,
  ArrowRight,
  Palette,
  Hammer,
  Award
} from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 'painting-services',
      icon: Paintbrush,
      title: 'Painting Services',
      description: 'Professional interior and exterior painting services for Darwin homes and businesses',
      features: [
        'Premium quality paints and finishes',
        'Color consultation and matching',
        'Weather-resistant exterior painting',
        'Detailed surface preparation',
        'Clean, professional application',
        'Warranty on all work'
      ],
      image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800',
      startingPrice: 'From $35/sqm',
      slug: 'painting-services'
    },
    {
      id: 'home-renovations',
      icon: Home,
      title: 'Home Renovations',
      description: 'Complete home renovation services from kitchen to bathroom makeovers',
      features: [
        'Custom design consultation',
        'Kitchen and bathroom renovations',
        'Quality cabinet installation',
        'Benchtop and splashback work',
        'Plumbing and electrical coordination',
        'Project management included'
      ],
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      startingPrice: 'From $12,000',
      slug: 'home-renovations'
    },
    {
      id: 'electrical-services',
      icon: Zap,
      title: 'Electrical Services',
      description: 'Licensed electrical work for homes and small businesses',
      features: [
        'New installations and upgrades',
        'Safety switch installation',
        'LED lighting solutions',
        'Power point installation',
        'Electrical fault finding',
        'Compliance certificates provided'
      ],
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      startingPrice: 'From $150/hour',
      slug: 'electrical-services'
    },
    {
      id: 'air-conditioning',
      icon: Wind,
      title: 'Air Conditioning',
      description: 'Stay cool in Darwin\'s heat with professional AC services',
      features: [
        'Split system installation',
        'Ducted system maintenance',
        'Energy-efficient solutions',
        'Regular service and cleaning',
        'Emergency repair service',
        'Warranty on installations'
      ],
      image: 'https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=800',
      startingPrice: 'From $800',
      slug: 'air-conditioning'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-secondary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                Our Services
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed px-2 sm:px-0">
                Comprehensive home improvement services across Darwin and surrounding suburbs. Quality workmanship with reliable, professional service for all your renovation needs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional home improvement services"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award size={32} />
                  <div>
                    <p className="font-bold text-lg">Quality Guaranteed</p>
                    <p className="text-primary-200">Licensed & Insured</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  {/* Service Image */}
                  <div className="relative h-48 sm:h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 rounded-full flex items-center justify-center">
                          <service.icon size={20} className="text-white sm:w-6 sm:h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-2xl font-bold text-white">{service.title}</h3>
                          <p className="text-primary-200 font-medium text-sm sm:text-base">{service.startingPrice}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-4 sm:p-6 lg:p-8">
                    <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 sm:space-x-3">
                          <CheckCircle size={18} className="text-green-600 flex-shrink-0 sm:w-5 sm:h-5" />
                          <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-primary-600 text-white py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center justify-center group text-sm sm:text-base min-h-[48px]"
                      onClick={() => navigate(`/services/${service.slug}`)}
                    >
                      Learn More About {service.title}
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven process to ensure every project is completed to the highest standards, on time and within budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation & Quote',
                description: 'Free on-site consultation with detailed written quote'
              },
              {
                step: '02',
                title: 'Planning & Preparation',
                description: 'Detailed planning, material sourcing, and site preparation'
              },
              {
                step: '03',
                title: 'Expert Execution',
                description: 'Professional work by licensed tradesman with quality control'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;