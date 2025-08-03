import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, Phone, HelpCircle, Award } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const faqs = [
    {
      category: 'Pricing & Quotes',
      questions: [
        {
          question: 'How much does a painting job cost?',
          answer: 'Painting costs vary depending on the size of the area, surface preparation required, paint quality, and complexity of the job. Interior painting typically ranges from $35-50 per square meter, while exterior painting ranges from $40-60 per square meter. We provide detailed written quotes after an on-site assessment.'
        },
        {
          question: 'Do you provide free quotes?',
          answer: 'Yes, we provide completely free, no-obligation quotes for all our services. We visit your property, assess the work required, and provide a detailed written estimate within 24 hours. There are no hidden fees or surprises - what we quote is what you pay.'
        },
        {
          question: 'How long does it take to receive a quote?',
          answer: 'We aim to provide all quotes within 24 hours of our site visit. For urgent projects, we can often provide same-day quotes. Simple painting projects can sometimes be quoted over the phone with photos, but we prefer to visit to ensure accuracy.'
        }
      ]
    },
    {
      category: 'Licensing & Insurance',
      questions: [
        {
          question: 'Are you licensed and insured?',
          answer: 'Yes, DD Painting is fully licensed and insured. We hold all necessary NT licenses for painting, renovation, electrical, and air conditioning work. We carry comprehensive public liability insurance and workers compensation. We can provide certificates upon request.'
        },
        {
          question: 'What warranties do you offer?',
          answer: 'We offer comprehensive warranties on all our work. Painting work comes with a 5-year warranty on materials and workmanship. Renovation work includes warranties ranging from 2-10 years depending on the specific work performed. All warranties are provided in writing.'
        },
        {
          question: 'What happens if something goes wrong?',
          answer: 'We stand behind our work 100%. If any issues arise during or after completion, we return promptly to address them at no charge. Our insurance covers any accidental damage, and our warranties ensure long-term satisfaction with the finished work.'
        }
      ]
    },
    {
      category: 'Service Areas & Scheduling',
      questions: [
        {
          question: 'What areas do you service?',
          answer: 'We service Darwin and all surrounding suburbs including Casuarina, Nightcliff, Palmerston, Stuart Park, Millner, Fannie Bay, The Gardens, Larrakeyah, and many more. We travel up to 50km from Darwin CBD. Contact us to confirm we service your specific location.'
        },
        {
          question: 'How far in advance do I need to book?',
          answer: 'Booking times vary by season and project type. During busy periods (dry season), we recommend booking 2-4 weeks in advance. Emergency work and small jobs can often be accommodated within a few days. We always try to work around your schedule and preferred timing.'
        },
        {
          question: 'Do you work during the wet season?',
          answer: 'Yes, we work year-round in Darwin. During the wet season, we focus on interior work and covered exterior areas. We monitor weather conditions closely and adjust schedules as needed to ensure quality results. Some exterior work may be delayed during heavy rain periods.'
        }
      ]
    },
    {
      category: 'Project Process',
      questions: [
        {
          question: 'What does your process involve?',
          answer: 'Our process includes: 1) Free consultation and quote, 2) Detailed project planning and material sourcing, 3) Professional preparation including protection of furniture and landscaping, 4) Quality execution by licensed tradespeople, 5) Final inspection and cleanup, 6) Follow-up to ensure satisfaction.'
        },
        {
          question: 'Do you clean up after the job?',
          answer: 'Absolutely! We take pride in leaving your property cleaner than we found it. This includes removing all materials, cleaning tools and equipment, disposing of waste responsibly, and conducting a thorough final cleanup. Your satisfaction with the entire experience is important to us.'
        },
        {
          question: 'Can you work around my schedule?',
          answer: 'We understand that home renovations can be disruptive. We work closely with clients to minimize inconvenience, can work flexible hours when needed, complete work in stages if required, and always communicate clearly about timing and access requirements.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const newIndex = `${categoryIndex}-${questionIndex}`;
    setActiveIndex(activeIndex === newIndex ? null : newIndex);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-secondary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                Get answers to common questions about our painting, renovation, electrical, and air conditioning services in Darwin. We're here to help you make informed decisions about your project.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Customer consultation and support"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <HelpCircle size={32} />
                  <div>
                    <p className="font-bold text-lg">Expert Support</p>
                    <p className="text-primary-200">24/7 Customer Care</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const isActive = activeIndex === `${categoryIndex}-${questionIndex}`;
                  
                  return (
                    <motion.div
                      key={questionIndex}
                      className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-gray-800 pr-4">
                          {faq.question}
                        </h3>
                        <motion.div
                          animate={{ rotate: isActive ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown className="text-primary-600" size={24} />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6">
                              <div className="border-t border-gray-200 pt-4">
                                <p className="text-gray-700 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Can't find the answer you're looking for? Our friendly team is here to help with any questions about your project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href="tel:0402257184"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all duration-300 inline-flex items-center group"
              >
                <Phone className="mr-3 group-hover:animate-bounce" size={20} />
                Call Us: 040 225 7184
              </motion.a>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 hover:text-white transition-all duration-300 inline-flex items-center group"
                >
                  <MessageCircle className="mr-3 group-hover:animate-pulse" size={20} />
                  Send a Message
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;