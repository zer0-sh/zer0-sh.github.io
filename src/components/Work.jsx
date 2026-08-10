import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FiActivity, FiLifeBuoy, FiSearch, FiServer, FiDatabase, FiTerminal } from 'react-icons/fi';
import { SiKubernetes, SiGithubactions } from 'react-icons/si';

export const Work = () => {
  const { t } = useLanguage();

  const functionKeys = [
    'function1',
    'function2',
    'function3',
    'function4',
    'function5',
    'function6',
    'function7',
    'function8',
  ];

  const functionIconMap = {
    function1: <SiKubernetes className="w-10 h-10" />,
    function2: <SiGithubactions className="w-10 h-10" />,
    function3: <FiActivity className="w-10 h-10" />,
    function4: <FiLifeBuoy className="w-10 h-10" />,
    function5: <FiSearch className="w-10 h-10" />,
    function6: <FiServer className="w-10 h-10" />,
    function7: <FiDatabase className="w-10 h-10" />,
    function8: <FiTerminal className="w-10 h-10" />,
  };

  return (
    <section id="work" className="py-20 bg-white dark:bg-gray-900 text-[var(--color-text-primary)]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">
          <span className="text-[var(--color-primary)]">{t('work.title')}</span>
        </h2>
        <p className="text-center text-[var(--color-text-secondary)] text-lg mb-16 max-w-2xl mx-auto">
          {t('work.subtitle')}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {functionKeys.map((key) => (
            <div
              key={key}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-[var(--color-primary)] transition-all hover:shadow-2xl hover:-translate-y-2 duration-300"
            >
              <div className="p-8 h-full flex flex-col">
                <div className="text-[var(--color-primary)] mb-4">{functionIconMap[key]}</div>
                <h3 className="text-xl font-bold mb-3 text-[var(--color-primary)]">{t(`work.${key}.name`)}</h3>
                <p className="text-[var(--color-text-secondary)] mb-6 flex-grow">
                  {t(`work.${key}.description`)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t(`work.${key}.tags`).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[var(--color-primary)]/15 dark:bg-[var(--color-primary)]/25 text-[var(--color-primary)] dark:text-white rounded-full text-xs font-semibold border border-[var(--color-primary)]/40 dark:border-[var(--color-primary)]/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
