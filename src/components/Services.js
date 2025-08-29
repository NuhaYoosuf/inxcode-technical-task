import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaPalette, FaMobileAlt, FaCloud, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
  },
  {
    icon: <FaPalette />,
    title: "UI/UX Design",
    description: "User-centered design solutions that create engaging and intuitive digital experiences.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Solutions",
    description: "Secure and scalable cloud services to help your business grow and stay connected.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to safeguard your digital assets from threats.",
  },
  {
    icon: <FaChartLine />,
    title: "Data Analytics",
    description: "Transform data into actionable insights with advanced analytics and reporting.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-gray-50 to-purple-50 relative overflow-hidden"
    >
      {/* Decorative radial gradient */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,_#7c3aed,_transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-purple-700">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border bg-white text-center shadow-md transition-all duration-300 
                         hover:shadow-xl hover:-translate-y-2 hover:border-purple-400 hover:ring-2 hover:ring-purple-400"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6 text-purple-600 text-4xl">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
