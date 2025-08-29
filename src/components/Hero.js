import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-50 to-indigo-100 pt-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-8xl font-bold text-gray-1000 mb-6">
          Building Digital<span className="text-purple-600"> Experiences</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          We create stunning websites and applications that help businesses grow and succeed in the digital world.
        </p>
      
  {/* Primary Button */}
  <button 
    onClick={() => scrollToSection('contact')}
    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg"
  >
    Get Started
  </button>

  {/* Secondary Button */}
  <button 
    onClick={() => scrollToSection('portfolio')}
    className="border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-bold py-3 px-8 rounded-lg transition-all shadow-md  ml-4"
  >
    View Our Work
  </button>



       
      </div>
    </section>
  );
};

export default Hero;