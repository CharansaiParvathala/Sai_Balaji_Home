import React from 'react';
import { Heart, SprayCan as Pray, Gift } from 'lucide-react';

const Donations: React.FC = () => {
  return (
    <section id="donations" className="py-16 bg-purple-50 dark:bg-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Temple Donations
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Support our initiatives to preserve and maintain sacred temples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <div className="flex justify-center mb-4">
              <Heart className="w-12 h-12 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
              Temple Maintenance
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
              Support daily temple maintenance and operations
            </p>
            <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
              Donate Now
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <div className="flex justify-center mb-4">
              <Pray className="w-12 h-12 text-yellow-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
              Priest Support
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
              Help support temple priests and their families
            </p>
            <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
              Contribute
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <div className="flex justify-center mb-4">
              <Gift className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
              Festival Sponsorship
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
              Sponsor temple festivals and special ceremonies
            </p>
            <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
              Sponsor Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donations;