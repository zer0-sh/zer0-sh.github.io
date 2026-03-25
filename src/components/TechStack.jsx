import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FiSettings, FiTool, FiTrendingUp, FiCode } from 'react-icons/fi';

export const TechStack = () => {
  const { t } = useLanguage();

  const categoryIconMap = {
    infrastructure: <FiSettings className="w-8 h-8" />,
    backend: <FiTool className="w-8 h-8" />,
    devops: <FiTrendingUp className="w-8 h-8" />,
    languages: <FiCode className="w-8 h-8" />,
  };

  const categories = [
    {
      key: 'infrastructure',
      name: t('skills.infrastructure.name'),
      items: t('skills.infrastructure.items'),
    },
    {
      key: 'backend',
      name: t('skills.backend.name'),
      items: t('skills.backend.items'),
    },
    {
      key: 'devops',
      name: t('skills.devops.name'),
      items: t('skills.devops.items'),
    },
    {
      key: 'languages',
      name: t('skills.languages.name'),
      items: t('skills.languages.items'),
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[var(--color-background)] text-[var(--color-text-primary)]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="text-[var(--color-primary)]">{t('skills.title')}</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.key}
              className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 hover:border-[var(--color-primary)] transition-colors hover:shadow-lg"
            >
              <div className="text-gray-400 dark:text-gray-500 hover:text-[var(--color-primary)] transition-colors mb-4">{categoryIconMap[category.key]}</div>
              <h3 className="text-2xl font-bold mb-6 text-[var(--color-primary)]">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white rounded-full text-sm font-medium hover:shadow-lg transition-shadow"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
