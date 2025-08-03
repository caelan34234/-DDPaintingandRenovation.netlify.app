import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '040 225 7184',
      link: 'tel:0402257184',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'swaradwija12@gmail.com',
      link: 'mailto:swaradwija12@gmail.com',
      description: 'Email us your project details'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '165 McMillans Rd, Darwin, NT',
      link: '#map',
      description: 'Visit our Darwin location'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Fri: 7AM-6PM, Sat: 8AM-4PM',
      link: null,
      description: 'When we\'re available'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-secondary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            Ready to transform your home? Contact DD Painting today for your free consultation and quote.
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
              <info.icon size={32} className="text-primary-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-lg font-semibold text-primary-600 hover:text-primary-700 transition-colors block mb-2"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-lg font-semibold text-gray-800 mb-2">{info.details}</p>
                )}
                <p className="text-gray-600">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Request Your Free Quote
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tell us about your project and we'll provide a detailed, no-obligation quote within 24 hours.
            </p>
          </motion.div>
          <QuoteForm />
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Find Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit our Darwin location or call us to arrange an on-site consultation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.1234567890123!2d130.8412345!3d-12.4612345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDI3JzQwLjQiUyAxMzDCsDUwJzI4LjQiRQ!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DD Painting Location"
            ></iframe>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 rounded-xl"
            >
              <MessageCircle className="text-primary-600 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Free Consultation</h3>
              <p className="text-gray-600">On-site assessment and project discussion</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 bg-gray-50 rounded-xl"
            >
              <Clock className="text-primary-600 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-800 mb-2">24hr Response</h3>
              <p className="text-gray-600">Quick turnaround on all quote requests</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 bg-gray-50 rounded-xl"
            >
              <Phone className="text-primary-600 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Emergency Service</h3>
              <p className="text-gray-600">Available for urgent home improvement needs</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;