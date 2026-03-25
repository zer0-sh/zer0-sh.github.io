import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm4.293 1.293a1 1 0 011.414 0l1.414 1.414a1 1 0 11-1.414 1.414L14.586 4.707a1 1 0 010-1.414zm2.414 5.414a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm1.293 4.293a1 1 0 011.414-1.414l1.414 1.414a1 1 0 11-1.414 1.414l-1.414-1.414zm-5 2.828a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zM4.707 14.293a1 1 0 011.414 1.414L4.707 17.121a1 1 0 11-1.414-1.414l1.414-1.414zm2.828-1.293a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zM3.414 5.414a1 1 0 010 1.414L1.586 8.656a1 1 0 11-1.414-1.414l1.414-1.414zM10 2a8 8 0 100 16 8 8 0 000-16z" />
        </svg>
      )}
    </button>
  );
};
