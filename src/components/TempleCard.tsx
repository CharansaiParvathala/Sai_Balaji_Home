import React from 'react';
import { Temple } from '../types';
import Tooltip from './Tooltip';
import { GLOSSARY } from '../constants';

interface TempleCardProps {
  temple: Temple;
}

const TempleCard: React.FC<TempleCardProps> = ({ temple }) => {
  const visitOrder = temple.visitOrder.split(' → ').map((step, index, array) => {
    const termMatch = Object.keys(GLOSSARY).find(term => step.includes(term));
    const isLast = index === array.length - 1;
    
    return (
      <React.Fragment key={index}>
        {termMatch ? (
          <>
            <Tooltip 
              term={step} 
              explanation={GLOSSARY[termMatch as keyof typeof GLOSSARY]} 
            />
          </>
        ) : (
          <span>{step}</span>
        )}
        {!isLast && <span className="mx-1">→</span>}
      </React.Fragment>
    );
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:scale-105">
      <img 
        src={temple.image} 
        alt={temple.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
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
        
        <div className="text-sm text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 pt-3">
          <p className="font-medium mb-1">Visit Order:</p>
          <div className="flex flex-wrap items-center">
            {visitOrder}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempleCard;