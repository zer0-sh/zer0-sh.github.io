import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AnimatedNetwork } from './AnimatedNetwork';

export const Hero = () => {
  const { t, lang } = useLanguage();

  // Calculate years of experience from August 2023
  const getYearsOfExperience = () => {
    const startDate = new Date(2023, 7, 1); // August 2023
    const today = new Date();
    const years = ((today - startDate) / (365.25 * 24 * 60 * 60 * 1000)).toFixed(1);
    return years;
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[var(--color-background)] text-[var(--color-text-primary)] py-20 overflow-hidden">
      {/* Animated Network Background */}
      <AnimatedNetwork />

      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[var(--color-primary)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[var(--color-accent)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[var(--color-primary)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '4s' }}></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255,122,0,.05) 25%, rgba(255,122,0,.05) 26%, transparent 27%, transparent 74%, rgba(255,122,0,.05) 75%, rgba(255,122,0,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,122,0,.05) 25%, rgba(255,122,0,.05) 26%, transparent 27%, transparent 74%, rgba(255,122,0,.05) 75%, rgba(255,122,0,.05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                <span className="text-[var(--color-primary)]">{t('hero.title')}</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-primary)] leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>

            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-[var(--color-primary)] text-white rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-1 duration-200 group text-sm sm:text-base"
            >
              {t('hero.cta')}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-gray-200 dark:border-gray-700">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[var(--color-primary)]">10+</div>
                <p className="text-xs sm:text-sm text-[var(--color-text-primary)]">Projects</p>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[var(--color-primary)]">{getYearsOfExperience()}+</div>
                <p className="text-xs sm:text-sm text-[var(--color-text-primary)]">{lang === 'en' ? 'Years Exp' : 'Años Exp'}</p>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[var(--color-primary)]">20+</div>
                <p className="text-xs sm:text-sm text-[var(--color-text-primary)]">{lang === 'en' ? 'Technologies' : 'Tecnologías'}</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative group">
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition-opacity"></div>

              {/* Image container */}
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden border-2 border-[var(--color-primary)] border-opacity-50">
                <img
                  src="/images/prof.jpeg"
                  alt="Profile"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300 aspect-square md:aspect-auto"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Tech badges */}
                <div className="absolute top-6 right-6 bg-[var(--color-primary)] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform group-hover:-translate-y-1 transition-transform">DevOps</div>
                <div className="absolute bottom-6 left-6 bg-[var(--color-accent)] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform group-hover:translate-y-1 transition-transform">Backend</div>
              </div>
            </div>

            {/* Decorative shapes */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[var(--color-accent)] rounded-lg opacity-10 transform rotate-45 group-hover:scale-110 transition-transform"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-[var(--color-primary)] rounded-lg opacity-10 group-hover:opacity-20 transition-opacity"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};
