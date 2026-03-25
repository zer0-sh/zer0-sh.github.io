import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ThemeToggle } from './ThemeToggle';
import { FiUser, FiCode, FiFolder, FiMail, FiMenu, FiX } from 'react-icons/fi';

export const Navbar = ({ currentLang }) => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navIconMap = {
    about: <FiUser className="w-4 h-4" />,
    skills: <FiCode className="w-4 h-4" />,
    projects: <FiFolder className="w-4 h-4" />,
    contact: <FiMail className="w-4 h-4" />,
  };

  const otherLang = currentLang === 'en' ? 'es' : 'en';
  const navItems = [
    { key: 'about', label: t('nav.about'), id: 'about' },
    { key: 'skills', label: t('nav.skills'), id: 'skills' },
    { key: 'projects', label: t('nav.projects'), id: 'projects' },
    { key: 'contact', label: t('nav.contact'), id: 'contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Cerrar menú después de hacer click
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-[var(--color-background)] border-b border-gray-200 dark:border-[var(--color-border)] backdrop-blur-sm bg-opacity-95">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to={`/${currentLang}`} className="text-2xl font-bold text-[var(--color-primary)] hover:opacity-80">
            zer0-sh
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-[var(--color-primary)] transition-colors"
              >
                {navIconMap[item.key]}
                {item.label}
              </button>
            ))}
          </div>

          {/* Right side - Theme toggle and language */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              to={`/${otherLang}`}
              className="px-3 py-1 rounded-md text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {otherLang.toUpperCase()}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 text-gray-700 dark:text-gray-300 hover:text-[var(--color-primary)] transition-colors"
            >
              {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-[var(--color-primary)] hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                {navIconMap[item.key]}
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
