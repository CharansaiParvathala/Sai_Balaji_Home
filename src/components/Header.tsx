import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [showAuthButtons, setShowAuthButtons] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowAuthButtons(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="pt-20 pb-6 bg-gradient-to-r from-mint-400 to-aqua-300 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          {/* Om Symbol */}
          <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-2 border-mint-600 dark:border-gray-600 rounded-full bg-mint-50 dark:bg-gray-700 shadow-md transform hover:rotate-12 transition-transform duration-300">
            <span className="text-2xl md:text-3xl text-mint-600 dark:text-gray-300" aria-hidden="true">ॐ</span>
          </div>

          {/* Company Logo */}
          <div className="text-center relative">
            <div className="relative w-20 h-20 md:w-28 md:h-28 mx-auto rounded-full overflow-hidden">
  {/* Glowing Fire Background */}
  <div className="absolute inset-0 z-0 flex items-center justify-center">
    <div className="fire-ring"></div>
    <div className="fire-glow"></div>
    <div className="fire-particles"></div>
  </div>

  {/* Circular Image on Top */}
  <img
    src="image/company.png"
    alt={t('header.logoAlt')}
    className="w-full h-full object-cover rounded-full relative z-10 border-2 border-mint-600 dark:border-gray-600 shadow-lg"
  />
</div>
            </div>

            <h1 className="hidden md:block mt-2 text-2xl font-bold text-mint-800 dark:text-gray-100">
              {t('header.title')}
            </h1>
            <p className="hidden md:block text-base text-mint-700 dark:text-gray-300">
              {t('header.subtitle')}
            </p>
          </div>

          {/* Swastik Symbol */}
          <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-2 border-mint-600 dark:border-gray-600 rounded-full bg-mint-50 dark:bg-gray-700 shadow-md transform hover:rotate-12 transition-transform duration-300">
            <span className="text-2xl md:text-3xl text-mint-600 dark:text-gray-300" aria-hidden="true">卐</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
