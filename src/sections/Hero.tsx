import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-white dark:bg-black">
      {/* Hero Image */}
      <div className="h-[500px] w-full relative">
        <img 
          src="image/welcome.png" // Light mode image
          alt="Pipeline construction" 
          className="w-auto h-auto max-w-full max-h-full mx-auto dark:hidden" // Hide this image in dark mode
        />
        <img 
          src="image/welcomedark.png" // Dark mode image
          alt="Pipeline construction" 
          className="h-full object-cover absolute top-0 left-0 hidden dark:block" // Show in dark mode
        />
        <img 
          src="image/welcomedark.png" // Dark mode image
          alt="Pipeline construction" 
          className="h-full object-cover absolute top-0 right-0 hidden dark:block" // Show in dark mode
        />
        
        {/* Overlay with Om Symbol */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <span 
            className="text-9xl text-yellow-500 opacity-30" 
            aria-hidden="true"
          >
            ॐ
          </span>
        </div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 drop-shadow-lg">
            Welcome to Sri Sai Balaji Constructions
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl drop-shadow-md">
            Where we build pipelines with spiritual integrity
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#services" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            >
              See Services
            </a>
            <a 
              href="#temples" 
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            >
              Visit Temples
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
