import React, { useState, useEffect } from "react";
import { Menu, X, Compass } from "lucide-react";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import AudioToggle from "./AudioToggle";
import LanguageToggle from "./LanguageToggle";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navbarClasses = `
    fixed top-0 w-full z-20 transition-all duration-300
    ${
      scrolled
        ? "bg-mint-100 dark:bg-gray-900 shadow-md"
        : "bg-mint-50 dark:bg-gray-900"
    }
  `;

  const navLinkClasses = `
    px-4 py-2 font-medium hover:scale-105 transition-transform
    text-gray-800 dark:text-white hover:text-mint-600 dark:hover:text-mint-400
  `;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Compass className="h-6 w-6 text-mint-600 dark:text-mint-400" />
            <span className="text-lg font-semibold text-gray-800 dark:text-white">
              Sri Sai Balaji
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="#home" className={navLinkClasses}>
              {t("nav.home")}
            </a>
            <a href="#services" className={navLinkClasses}>
              {t("nav.services")}
            </a>
            <a href="#projects" className={navLinkClasses}>
              {t("nav.projects")}
            </a>
            <a href="#achievements" className={navLinkClasses}>
              {t("nav.achievements")}
            </a>
            <a href="#temples" className={navLinkClasses}>
              {t("nav.temples")}
            </a>
            <a href="#contact" className={navLinkClasses}>
              {t("nav.contact")}
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href="https://saibalajitracker.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-mint-600 dark:text-mint-400 hover:text-mint-700 dark:hover:text-mint-500 font-medium"
            >
              SBWork
            </a>
            <LanguageToggle />
            <AudioToggle />
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-mint-100 dark:hover:bg-gray-700"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 py-2 bg-mint-50 dark:bg-gray-800 rounded-lg shadow-lg">
            <a
              href="#home"
              className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-mint-100 dark:hover:bg-gray-700"
              onClick={closeMenu}
            >
              {t("nav.home")}
            </a>
            <a
              href="#services"
              className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-mint-100 dark:hover:bg-gray-700"
              onClick={closeMenu}
            >
              {t("nav.services")}
            </a>
            <a
              href="#projects"
              className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-mint-100 dark:hover:bg-gray-700"
              onClick={closeMenu}
            >
              {t("nav.projects")}
            </a>
            <a
              href="#achievements"
              className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-mint-100 dark:hover:bg-gray-700"
              onClick={closeMenu}
            >
              {t("nav.achievements")}
            </a>
            <a
              href="#temples"
              className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-mint-100 dark:hover:bg-gray-700"
              onClick={closeMenu}
            >
              {t("nav.temples")}
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-mint-100 dark:hover:bg-gray-700"
              onClick={closeMenu}
            >
              {t("nav.contact")}
            </a>
            <a
              href="https://example.com/sbwork"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-mint-600 dark:text-mint-400 hover:bg-mint-100 dark:hover:bg-gray-700"
              onClick={closeMenu}
            >
              SBWork
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
