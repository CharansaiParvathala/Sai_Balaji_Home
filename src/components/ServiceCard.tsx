import React from 'react';
import { Service } from '../types';
import Tooltip from './Tooltip';
import { GLOSSARY } from '../constants';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const description = service.description.split(' ').map((word, index) => {
    const termMatch = Object.keys(GLOSSARY).find(term => word.includes(term));
    
    if (termMatch) {
      return (
        <React.Fragment key={index}>
          {word.replace(termMatch, '')}
          <Tooltip 
            term={termMatch} 
            explanation={GLOSSARY[termMatch as keyof typeof GLOSSARY]} 
          />
          {' '}
        </React.Fragment>
      );
    }
    
    return word + ' ';
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:scale-105">
      <img 
        src={service.image} 
        alt={service.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
          {service.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;