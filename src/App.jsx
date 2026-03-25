import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import './index.css';

const AppContent = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route
          path="/:lang"
          element={<LanguageWrapper />}
        />
      </Routes>
    </Router>
  );
};

const LanguageWrapper = () => {
  const lang = window.location.pathname.split('/')[1] || 'en';

  const validLangs = ['en', 'es'];
  const currentLang = validLangs.includes(lang) ? lang : 'en';

  return (
    <LanguageProvider>
      <LanguageContent currentLang={currentLang} />
    </LanguageProvider>
  );
};

const LanguageContent = ({ currentLang }) => {
  const { changeLang } = useLanguage();

  React.useEffect(() => {
    changeLang(currentLang);
  }, [currentLang, changeLang]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar currentLang={currentLang} />
      <Home />
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
