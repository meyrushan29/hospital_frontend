import React from 'react';
import { motion } from 'framer-motion';
import { FaAmbulance, FaFlask, FaBars, FaUserMd, FaVideo } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      name: 'Emergency Care',
      description: '24/7 rapid response for critical situations with state-of-the-art emergency facilities',
      icon: <FaAmbulance className="text-5xl mb-4 text-red-500" />,
      route: '/amb_Booking'
    },
    {
      name: 'Lab Services',
      description: 'Advanced diagnostic testing and swift, accurate results for informed treatment',
      icon: <FaFlask className="text-5xl mb-4 text-blue-500" />,
      route: '/lab-booking'
    },
    {
      name: 'Specialized Care',
      description: 'Expert teams delivering focused care across a range of medical specialties',
      icon: <FaUserMd className="text-5xl mb-4 text-green-500" />,
      route: '/specialized-care'
    },
    {
      name: 'Telemedicine',
      description: 'Virtual consultations for convenient, accessible healthcare from home',
      icon: <FaVideo className="text-5xl mb-4 text-purple-500" />,
      route: '/telemedicine'
    }
  ];

  const features = [
    { title: 'Expert Team', description: 'Highly qualified and experienced medical professionals' },
    { title: 'Advanced Technology', description: 'State-of-the-art medical equipment and facilities' },
    { title: 'Patient-Centered Care', description: 'Personalized treatment plans and compassionate care' }
  ];

  return (
    <div className="min-h-screen  from-teal-100 to-cyan-200 bg-gradient-to-br   dark:from-gray-900 dark:to-indigo-900 text-gray-800 dark:text-gray-200">
      <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">NEH</span>
            </div>
            <div className="flex items-center">
              <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <FaBars className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 font-sans">
        <motion.header 
          className="text-center mb-20"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            North East Hospital
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-10 text-gray-600 dark:text-gray-400">
            Exceptional healthcare for over 50 years
          </p>
          <motion.button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/admission')}
          >
            Book Appointment
          </motion.button>
        </motion.header>
        
        <motion.section 
          className="mb-20"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center text-center cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(service.route)}
              >
                {service.icon}
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">{service.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">{service.description}</p>
                <motion.button 
                  className="mt-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-6 rounded-full text-sm hover:from-blue-600 hover:to-purple-600 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="text-center"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Home;