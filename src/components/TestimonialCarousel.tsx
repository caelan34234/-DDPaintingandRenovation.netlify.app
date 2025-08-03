import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Kate C',
      location: 'Darwin',
      rating: 5,
      text: 'DD Painting recently completed a full house repaint for our property and we couldn\'t be happier. They went above and beyond to provide an excellent service. Highly recommend.',
      service: 'Full House Painting',
      image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=300',
      timeAgo: '4 weeks ago'
    },
    {
      id: 2,
      name: 'Aaron Crocker',
      location: 'Darwin',
      rating: 5,
      text: 'Awesome company to deal with, nothing was a problem and the quality of work is excellent!! Thanks for a great experience!!!!!!',
      service: 'Painting Services',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=300',
      timeAgo: '4 weeks ago'
    },
    {
      id: 3,
      name: 'Leonie Turra',
      location: 'Darwin',
      rating: 5,
      text: 'Just had DD and his team paint my entire house. They were a pleasure to deal with and the attention to detail was impressive. So glad I chose DD Painting Services to do the job.',
      service: 'Full House Painting',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=300',
      timeAgo: 'a year ago'
    },
    {
      id: 4,
      name: 'Lily Chan',
      location: 'Darwin',
      rating: 5,
      text: 'DD has just completed a wonderful job painting the outside of my house. He is meticulous, takes pride in his work and is generous! We\'re bowled over how efficiently he worked and the final outcome is beautiful! DD also offered to put in extra work for no extra cost. Thank you very much, DD. He comes highly recommended. 👍🏼👍🏼👍🏼👍🏼👍🏼',
      service: 'Exterior Painting',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=300',
      timeAgo: 'a year ago'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-primary-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what Darwin families and businesses say about DD Painting.
          </p>
          <div className="flex items-center justify-center mt-6">
            <div className="flex items-center space-x-1 mr-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-700">5.0 Average Rating</span>
          </div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Testimonial Content */}
                <div className="flex-1">
                  <Quote className="text-primary-200 mb-4" size={48} />
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600 mb-2">{testimonials[currentIndex].location} • {testimonials[currentIndex].timeAgo}</p>
                    <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                      {testimonials[currentIndex].service}
                    </span>
                  </div>
                </div>

                {/* Project Image */}
                <div className="w-full md:w-80 flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].service}
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-700 p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-700 p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={28} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                   index === currentIndex 
                     ? 'bg-primary-600 w-8'
                     : 'bg-gray-300 hover:bg-gray-400'
                 }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;