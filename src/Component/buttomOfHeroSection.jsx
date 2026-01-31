import React from 'react';
import { Link } from 'react-router-dom';

const ButtomOfHeroSection = () => {
  return (
    <div 
      className="
        absolute bottom-8 left-1/2 -translate-x-1/2 
        flex items-center gap-5 
        px-7 py-4 
        bg-neutral-900/80 border border-neutral-700/50 
        rounded-2xl shadow-2xl backdrop-blur-sm
        z-30
      "
    >
      <p className="text-neutral-300 font-medium text-lg">
        If you're interested:
      </p>
      <Link 
        to="contact" 
        className="
          px-7 py-3 
          bg-gradient-to-r from-gray-900 to-black
  
          text-white font-semibold 
          rounded-xl 
          transition-all duration-300 
          shadow-lg hover:shadow-xl hover:-translate-y-0.5
        "
      >
        Get in Touch
      </Link>
    </div>
  );
};

export default ButtomOfHeroSection;
