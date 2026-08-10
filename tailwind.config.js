/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'sans-serif',
        ],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 122, 0, 0.3)',
        'glow-dark': '0 0 20px rgba(255, 59, 59, 0.3)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: 'inherit',
            a: {
              color: 'var(--color-primary)',
              '&:hover': {
                color: 'var(--color-primaryHover)',
              },
            },
            code: {
              backgroundColor: 'rgba(0,0,0,0.05)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#1e1e1e',
              color: '#d4d4d4',
            },
          },
        },
        invert: {
          css: {
            color: '#e5e5e5',
            a: {
              color: 'var(--color-primary)',
            },
            code: {
              backgroundColor: 'rgba(255,255,255,0.1)',
            },
            pre: {
              backgroundColor: '#1e1e1e',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
