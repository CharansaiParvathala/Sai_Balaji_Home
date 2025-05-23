import React, { useState } from 'react';
import { TEMPLES } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Temples: React.FC = () => {
  const [showAllTemples, setShowAllTemples] = useState(false);
  const displayedTemples = showAllTemples ? TEMPLES : TEMPLES.slice(0, 3);

  return (
    <section id="temples" className="py-16 bg-mint-50 dark:bg-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Sacred Temples
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore the divine temples that inspire our spiritual journey and guide our business principles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTemples.map(temple => (
            <div key={temple.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img 
                src={temple.image} 
                alt={temple.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-mint-600 dark:text-mint-400 mb-2">
                  {temple.name}
                </h3>
                
                <div className="mb-3">
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">God:</span> {temple.god}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Chant:</span> <i>{temple.chant}</i>
                  </p>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  {temple.description}
                </p>
                
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a 
                    href={temple.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-mint-600 dark:text-mint-400 hover:underline"
                  >
                    Visit Website →
                  </a>
                  <a 
                    href={temple.donationLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                  >
                    Donate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => setShowAllTemples(!showAllTemples)}
            className="inline-flex items-center px-6 py-3 bg-mint-500 hover:bg-mint-600 text-white font-medium rounded-lg shadow-md transform hover:scale-105 transition-transform"
          >
            {showAllTemples ? (
              <>
                Show Less <ChevronUp className="ml-2 h-5 w-5" />
              </>
            ) : (
              <>
                See More <ChevronDown className="ml-2 h-5 w-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Temples