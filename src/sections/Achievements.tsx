import React from 'react';
import { Trophy, Award, Star, ThumbsUp } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      id: 1,
      title: 'Safety Excellence',
      description: '1000+ days without incidents',
      icon: Trophy,
      color: 'text-mint-500'
    },
    {
      id: 2,
      title: 'Quality Certification',
      description: 'ISO 9001:2015 Certified',
      icon: Award,
      color: 'text-aqua-500'
    },
    {
      id: 3,
      title: 'Client Satisfaction',
      description: '98% Client Retention Rate',
      icon: Star,
      color: 'text-mint-600'
    },
    {
      id: 4,
      title: 'Community Impact',
      description: '50+ Temple Renovations',
      icon: ThumbsUp,
      color: 'text-aqua-600'
    }
  ];

  return (
    <section id="achievements" className="py-16 bg-mint-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Our Achievements
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Milestones that showcase our commitment to excellence and spiritual values.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map(achievement => (
            <div key={achievement.id} className="bg-aqua-50 dark:bg-gray-900 rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
              <div className="flex justify-center mb-4">
                <achievement.icon className={`w-12 h-12 ${achievement.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;