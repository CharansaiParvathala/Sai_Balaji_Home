import React from 'react';
import { Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'kn', name: 'ಕನ್ನಡ' }
  ];

  const toggleLanguage = () => {
    const currentIndex = languages.findIndex(lang => lang.code === i18n.language);
    const nextIndex = (currentIndex + 1) % languages.length;
    i18n.changeLanguage(languages[nextIndex].code);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
      aria-label="Change language"
    >
      <Languages className="w-5 h-5 text-gray-800 dark:text-gray-200" />
      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
        {languages.find(lang => lang.code === i18n.language)?.name || 'English'}
      </span>
    </button>
  );
};

export default LanguageToggle;