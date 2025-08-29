import React from 'react';
import { FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const values = [
    {
      icon: <FaLightbulb className="text-5xl text-purple-600" />,
      title: "Innovation",
      description: "We stay ahead of the curve by embracing new technologies and creative approaches to problem-solving."
    },
    {
      icon: <FaUsers className="text-5xl text-purple-600" />,
      title: "Collaboration",
      description: "We work closely with our clients to understand their vision and deliver solutions that exceed expectations."
    },
    {
      icon: <FaRocket className="text-5xl text-purple-600" />,
      title: "Excellence",
      description: "We're committed to delivering high-quality work that drives results and stands the test of time."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_#7c3aed,_transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Crafting Digital <span className="text-purple-700">Excellence</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate designers and developers dedicated to creating 
            <span className="font-semibold text-purple-600"> exceptional digital experiences</span>.
          </p>
        </div>
        
        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((value, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">
                <div className="p-6 bg-purple-100 rounded-full shadow-inner">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
