import { createContext, useEffect, useState, useMemo } from 'react';
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState('light');

  useEffect(() => {
    // Cargar tema guardado en localStorage
    const savedTheme = localStorage.getItem('themeName');
    if (savedTheme) {
      setThemeName(savedTheme);
    } else {
      // Usar preferencia del sistema
      const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setThemeName(darkMediaQuery.matches ? 'dark' : 'light');

      darkMediaQuery.addEventListener('change', e => {
        if (!localStorage.getItem('themeName')) {
          setThemeName(e.matches ? 'dark' : 'light');
        }
      });
    }
  }, []);

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark';
    localStorage.setItem('themeName', name);
    setThemeName(name);
  };

  // Crear tema de Material UI basado en el tema actual
  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeName,
          primary: {
            main: themeName === 'dark' ? '#e06e6e' : '#d11b1b',
          },
          secondary: {
            main: themeName === 'dark' ? '#cdcdff' : '#444',
          },
          background: {
            default: themeName === 'dark' ? '#1a1b26' : '#fcfcfc',
            paper: themeName === 'dark' ? '#464966' : '#fff',
          },
          text: {
            primary: themeName === 'dark' ? '#bdbddd' : '#555',
            secondary: themeName === 'dark' ? '#cdcdff' : '#444',
          },
          grey: {
            100: themeName === 'dark' ? '#2a2b3a' : '#f5f5f5',
            200: themeName === 'dark' ? '#3a3b4a' : '#eeeeee',
            300: themeName === 'dark' ? '#4a4b5a' : '#e0e0e0',
            400: themeName === 'dark' ? '#5a5b6a' : '#bdbdbd',
            500: themeName === 'dark' ? '#6a6b7a' : '#9e9e9e',
            600: themeName === 'dark' ? '#7a7b8a' : '#757575',
            700: themeName === 'dark' ? '#8a8b9a' : '#616161',
            800: themeName === 'dark' ? '#1f202d' : '#424242',
            900: themeName === 'dark' ? '#aaabba' : '#212121',
          },
        },
        typography: {
          fontFamily: 'Poppins, sans-serif',
          h1: { color: themeName === 'dark' ? '#cdcdff' : '#444' },
          h2: { color: themeName === 'dark' ? '#cdcdff' : '#444' },
          h3: { color: themeName === 'dark' ? '#cdcdff' : '#444' },
          h4: { color: themeName === 'dark' ? '#cdcdff' : '#444' },
          h5: { color: themeName === 'dark' ? '#cdcdff' : '#444' },
          h6: { color: themeName === 'dark' ? '#cdcdff' : '#444' },
          body1: { color: themeName === 'dark' ? '#bdbddd' : '#555' },
          body2: { color: themeName === 'dark' ? '#bdbddd' : '#555' },
        },
        components: {
          MuiChip: {
            styleOverrides: {
              root: {
                backgroundColor: themeName === 'dark' ? '#2a2b3a' : '#f5f5f5',
                color: themeName === 'dark' ? '#bdbddd' : '#555',
                borderRadius: '16px',
                fontSize: '0.75rem',
                height: '24px',
                fontWeight: 500,
                padding: '0 8px',
              },
              labelSmall: {
                padding: '0 6px',
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                backgroundColor: themeName === 'dark' ? '#464966' : '#fff',
                color: themeName === 'dark' ? '#bdbddd' : '#555',
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundColor: themeName === 'dark' ? '#464966' : '#fff',
                color: themeName === 'dark' ? '#bdbddd' : '#555',
              },
            },
          },
        },
      }),
    [themeName]
  );

  const contextValue = useMemo(
    () => [{ themeName, toggleTheme }],
    [themeName, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <MUIThemeProvider theme={muiTheme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
