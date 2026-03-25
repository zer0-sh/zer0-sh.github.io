import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FiLayers, FiGitBranch } from 'react-icons/fi';
import { SiDocker, SiKubernetes } from 'react-icons/si';

export const About = () => {
  const { t } = useLanguage();

  const highlightIconMap = {
    0: <FiLayers className="w-12 h-12 mx-auto" />,
    1: <FiGitBranch className="w-12 h-12 mx-auto" />,
    2: <SiDocker className="w-12 h-12 mx-auto" />,
    3: <SiKubernetes className="w-12 h-12 mx-auto" />,
  };

  const highlights = [
    { label: 'Infrastructure Design' },
    { label: 'CI/CD Pipelines' },
    { label: 'Containerization' },
    { label: 'Orchestration' },
  ];

  return (
    <section id="about" className="relative py-20 bg-white dark:bg-gray-900 text-[var(--color-text-primary)] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-[var(--color-primary)] opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[var(--color-accent)] opacity-5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="text-[var(--color-primary)]">{t('about.title')}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              {t('about.description')}
            </p>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              {t('about.experience')}
            </p>
          </div>

          <div className="relative group">
            {/* Glowing card */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>

            <div className="relative bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-xl p-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8">
                <div className="text-6xl font-bold text-[var(--color-primary)] opacity-30 mb-2">&lt;/&gt;</div>
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">DevOps Engineer</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">Building resilient, scalable infrastructure and automating deployment processes with modern DevOps practices</p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[var(--color-primary)] transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
            >
              <div className="text-gray-400 dark:text-gray-500 hover:text-[var(--color-primary)] transition-colors mb-3">{highlightIconMap[idx]}</div>
              <p className="font-semibold text-[var(--color-text-primary)]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
