import React, { useState, useRef, useEffect } from 'react';
import { HelpCircle } from 'lucide-react';

interface TooltipProps {
  term: string;
  explanation: string;
}

const Tooltip: React.FC<TooltipProps> = ({ term, explanation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const toggleTooltip = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <span className="inline-block relative" ref={tooltipRef}>
      <span className="font-medium">{term}</span>
      <button
        onClick={toggleTooltip}
        className="inline-flex ml-1 text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
        aria-label={`${term} explanation`}
      >
        <HelpCircle className="h-4 w-4" />
      </button>
      {isOpen && (
        <div className="absolute z-10 w-64 p-3 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-sm text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700">
          {explanation}
        </div>
      )}
    </span>
  );
};

export default Tooltip;