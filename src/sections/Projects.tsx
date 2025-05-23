import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Industrial Pipeline Network',
      description: 'Construction of 50km industrial pipeline network for major manufacturing plant.',
      image: 'image/work/completed.jpg',
      status: 'Completed',
      year: '2024'
    },
    {
      id: 2,
      title: 'Municipal Water System',
      description: 'Installation of water distribution system serving 100,000 residents.',
      image: 'image/work/tape.jpg',
      status: 'Completed',
      year: '2024'
    },
    {
      id: 3,
      title: 'Water Transport Pipeline',
      description: 'Construction of high-pressure water transport pipeline system.',
      image: 'image/work/tank.jpg',
      status: 'Completed',
      year: '2023'
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-beige-50 to-amber-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-yellow-800 dark:text-white mb-4">
            Our Projects
          </h2>
          <p className="text-yellow-700 dark:text-gray-400 max-w-3xl mx-auto">
            Explore our completed pipeline construction projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-amber-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-yellow-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-yellow-700 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-yellow-600 dark:text-gray-400">
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;