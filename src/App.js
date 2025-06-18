import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './contexts/theme';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
import './App.css';

function App() {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <Router>
      <div id="top" className={`${themeName} app`}>
        <Header />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <About />
                  <Projects />
                  <Skills />
                  <Contact />
                </>
              }
            />
            <Route path="/blog/*" element={<Blog />} />
          </Routes>
        </main>

        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
