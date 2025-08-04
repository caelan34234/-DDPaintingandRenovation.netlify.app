import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Clock, 
  MapPin, 
  Star, 
  Shield,
  CheckCircle,
  Heart,
  Paintbrush,
  Home,
  Zap,
  Wind
} from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Happy Customers' },
    { icon: Clock, number: '20+', label: 'Years Experience' },
    { icon: Award, number: 'Top 3', label: 'Darwin Rated' },
    { icon: Star, number: '5.0', label: 'Average Rating' }
  ];

  const values = [
    {
      icon: Paintbrush,
      title: 'Craftsmanship',
      description: 'We take pride in every detail, delivering finishes that last.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We communicate openly and deliver on our promises.'
    },
    {
      icon: MapPin,
      title: 'Community',
      description: 'Locally owned and proud to support Darwin homes and businesses.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We use modern tools and techniques to improve quality and efficiency.'
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'On time, on budget, with a 15-year painting warranty.'
    },
    {
      icon: Heart,
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our success — every time.'
    }
  ];

  const serviceAreas = [
    'Casuarina', 'Nightcliff', 'Palmerston', 'Fannie Bay', 'Coconut Grove',
    'Stuart Park', 'Millner', 'The Gardens', 'Larrakeyah', 'Woolner',
    'Bayview', 'Brinkin', 'Nakara', 'Wanguri', 'Jingili', 'Anula'
  ];

  const services = [
    {
      icon: Paintbrush,
      title: 'Interior Painting',
      description: 'Revive your home\'s interior with our painting expertise. We turn your ideas into reality, making every room feel fresh and inviting.'
    },
    {
      icon: Home,
      title: 'Exterior Painting',
      description: 'Boost your property\'s appeal with our quality exterior painting. We provide durable finishes that stand up against the elements.'
    },
    {
      icon: Home,
      title: 'Kitchen Renovation',
      description: 'Breathe new life into the heart of your home. From layout to finishes, we create kitchens that are practical, beautiful, and built for living.'
    },
    {
      icon: Home,
      title: 'Bathroom Renovation',
      description: 'Transform your bathroom into a modern, relaxing retreat. Functional design meets stylish finishes — built to refresh your daily routine.'
    },
    {
      icon: Zap,
      title: 'Electrical Services',
      description: 'Safe, smart, and reliable electrical solutions — from lights to full rewiring — ensuring your home is safe, functional, and future-ready.'
    },
    {
      icon: Wind,
      title: 'A/C Services',
      description: 'Whether it\'s installation, repair, or maintenance — we keep your cool with A/C experts and bring comfort to every corner of your home.'
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
                About DD Painting & Renovation Darwin
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed px-2 sm:px-0">
                With over 20 years of experience, DD Painting and Renovation has become a trusted name for painting and renovation in Darwin. We're known for delivering reliable, top-quality services tailored to both homes and commercial properties.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-8 lg:mt-0"
            >
              <img
                src="https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="DD Painting team at work"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-6 bg-primary-600 text-white p-3 sm:p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award size={24} className="sm:w-8 sm:h-8" />
                  <div>
                    <p className="font-bold text-sm sm:text-lg">Award Winning</p>
                    <p className="text-primary-200 text-xs sm:text-base">Darwin's Choice 2021-2025</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              About DD Painting and Renovation Services Darwin
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our video to learn more about our commitment to quality and service excellence
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/gWbsyouGBec?start=38"
                title="DD Painting and Renovation Services Darwin"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              About DD Painting and Renovation Darwin - Who We Are
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              DD Painting Services Darwin is a trusted, family-run painting and renovation business based in Millner, NT 0810, Australia. Led by Dwija and his experienced team, we bring over 20 years of hands-on industry experience to every project.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, we're proud to be known as a trusted name among Darwin painters, with projects spanning residential homes, apartments, offices, retail spaces, and strata properties.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <stat.icon size={32} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Commitment - What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At DD Painting & Renovation Services, we pride ourselves on quality. From homes to businesses, our expert team is here to cater to all your painting and renovation needs. Let us know how we can assist you today!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-700 font-medium">
              We proudly serve Darwin and surrounding suburbs: Casuarina, Nightcliff, Palmerston, Fannie Bay, Coconut Grove, and more!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Detailed */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our Journey of Excellence
              </h2>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-700 leading-relaxed">
                  We specialise in interior and exterior painting, offering expert colour consultation, meticulous surface preparation, and precision finishes. Using high-technology equipment and the latest application techniques, we ensure consistently high-quality results that stand the test of time.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-700 leading-relaxed">
                  Clients often ask what makes DD Painting Renovation different. The answer lies in our commitment to quality, transparency, and long-term customer relationships. All painting work is backed by our 20-year workmanship warranty, giving clients peace of mind and long-term value.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-700 leading-relaxed">
                  Proudly recognised as one of Darwin's Top 3 Rated Painters for five consecutive years (2021–2025), we are committed to quality, reliability, and client satisfaction. In 2025, we expanded our services to include home renovations, split-system air conditioning installation, and licensed electrical work — making DD Painting Services a one-stop solution for home and commercial improvement across Darwin.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether you're updating a single room or managing a full-scale renovation, we deliver quality, efficiency, and competitive pricing with every project.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our Vision and Mission
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-primary-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be Darwin's most trusted provider of high-quality, integrated painting and renovation solutions — delivering lasting craftsmanship, modern techniques, and exceptional service to every home and business we touch.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-secondary-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  At DD Painting & Renovation Services Darwin, our mission is to enhance the spaces where our clients live and work by providing expert painting, renovations, electrical, and air conditioning services.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-gray-50 p-8 rounded-2xl"
            >
              <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">We are committed to:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Delivering professional, durable finishes using high-quality materials and the latest techniques</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Maintaining honest, competitive pricing with clear communication</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Using modern equipment and technology to improve precision, efficiency, and safety</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Upholding our 20-year workmanship warranty as a symbol of trust and reliability</span>
                </li>
                <li className="flex items-start md:col-span-2">
                  <CheckCircle className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Continually evolving our services to meet the needs of our local community</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Our Promise to Darwin Clients
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At DD Painting & Renovation, we are committed to delivering not only exceptional results but also a stress-free experience. We understand that your home or business is a valuable asset, and we treat every project with the care it deserves.
            </p>
            
            <div className="bg-primary-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Darwin clients trust us because we deliver:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={24} />
                  <span className="text-gray-700">Clear communication from start to finish</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={24} />
                  <span className="text-gray-700">Free quotes with no hidden costs</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={24} />
                  <span className="text-gray-700">Top-quality materials and advanced techniques</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={24} />
                  <span className="text-gray-700">A 15-year workmanship warranty for peace of mind</span>
                </div>
                <div className="flex items-start md:col-span-2">
                  <CheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={24} />
                  <span className="text-gray-700">Respectful, on-time, and tidy service every time</span>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-xl">
                <p className="text-lg text-gray-800 font-medium">
                  When you choose DD Painting & Renovation, you're choosing a team that values honesty, craftsmanship, and customer satisfaction. We proudly stand behind our work and are grateful to be one of the most trusted names in painting and renovation in Darwin.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Areas We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than just painters. We're local tradespeople committed to quality, integrity, and long-lasting results. Whether it's a residential makeover, a commercial repaint, or a complete renovation, our team delivers trusted craftsmanship on every job.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <MapPin className="text-primary-600 mr-3" size={32} />
                  <h3 className="text-2xl font-bold text-gray-800">Service Coverage</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {serviceAreas.map((area) => (
                    <div key={area} className="bg-gray-50 px-3 py-2 rounded-lg text-center text-gray-700 font-medium">
                      {area}
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                  <p className="text-primary-800 font-medium">
                    As top-rated painters in Darwin, our reputation is built on word of mouth, repeat clients, and attention to detail. From surface prep to final coat, we make sure the job is done right — with minimal disruption and a flawless finish.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Darwin homes we serve"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end p-8">
                <div className="text-white">
                  <h4 className="text-2xl font-bold mb-2">Local Darwin Experts</h4>
                  <p className="text-lg">Understanding your home's unique needs in the tropical climate</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;