import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

// Color palette hardcoded
const themes = {
  light: {
    name: 'naruto',
    colors: {
      primary: '#FF7A00',
      primaryHover: '#E66800',
      secondary: '#FFD54F',
      accent: '#2D9CDB',
      background: '#FFF8F2',
      surface: '#FFFFFF',
      border: '#E5E5E5',
      text: {
        primary: '#1A1A1A',
        secondary: '#5F5F5F',
        inverse: '#FFFFFF',
      },
      status: {
        success: '#4CAF50',
        warning: '#FFB300',
        error: '#E53935',
        info: '#2196F3',
      },
    },
  },
  dark: {
    name: 'obito',
    colors: {
      primary: '#FF3B3B',
      primaryHover: '#8B0000',
      secondary: '#D32F2F',
      accent: '#6A1B9A',
      background: '#0B0B0F',
      surface: '#16161D',
      border: '#2A2A35',
      text: {
        primary: '#EAEAEA',
        secondary: '#A1A1AA',
        inverse: '#0B0B0F',
      },
      status: {
        success: '#66BB6A',
        warning: '#FFA726',
        error: '#EF5350',
        info: '#42A5F5',
      },
    },
  },
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme-mode');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    localStorage.setItem('theme-mode', isDark ? 'dark' : 'light');
    applyTheme(isDark);
  }, [isDark]);

  const applyTheme = (dark) => {
    const currentTheme = dark ? themes.dark : themes.light;
    const colors = currentTheme.colors;

    Object.entries(colors).forEach(([key, value]) => {
      if (typeof value === 'object') {
        Object.entries(value).forEach(([subKey, subValue]) => {
          document.documentElement.style.setProperty(`--color-${key}-${subKey}`, subValue);
        });
      } else {
        document.documentElement.style.setProperty(`--color-${key}`, value);
      }
    });

    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
