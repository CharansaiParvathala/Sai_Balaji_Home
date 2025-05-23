import React from 'react';
import { QuickLink } from '../types';

interface QuickLinkCardProps {
  link: QuickLink;
}

const QuickLinkCard: React.FC<QuickLinkCardProps> = ({ link }) => {
  return (
    <a href={link.link} className="block group">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:scale-105">
        <div className="relative">
          <img 
            src={link.image} 
            alt={`${link.title} quick link`} 
            className="w-full h-40 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-4 w-full">
              <h3 className="text-white text-xl font-semibold">{link.title}</h3>
              <span className="text-yellow-400 text-sm">ॐ</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default QuickLinkCard;