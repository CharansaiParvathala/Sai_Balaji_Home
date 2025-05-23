import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              {t('footer.contactTitle')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              {t('footer.email')}: info@srisaibalajiconst.com
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              {t('footer.phone')}: +91 98765 43210
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              {t('footer.address')}: 123 Pipeline Road, Hyderabad, India
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-blue-600 dark:text-blue-400 hover:underline">{t('footer.links.services')}</a></li>
              <li><a href="#projects" className="text-blue-600 dark:text-blue-400 hover:underline">{t('footer.links.projects')}</a></li>
              <li><a href="#temples" className="text-purple-600 dark:text-purple-400 hover:underline">{t('footer.links.temples')}</a></li>
              <li><a href="#contact" className="text-blue-600 dark:text-blue-400 hover:underline">{t('footer.links.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              {t('footer.missionTitle')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t('footer.missionText')}
            </p>
            <div className="mt-4 flex items-center">
              <span className="text-yellow-500 mr-1">ॐ</span>
              <span className="text-gray-600 dark:text-gray-400">{t('footer.omShanti')}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sri Sai Balaji Constructions. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
