import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeContext } from '../../contexts/theme';
import { projects, skills, contact } from '../../portfolio';
import './Navbar.css';

function Navbar() {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);
  const location = useLocation();

  const toggleNavList = () => setShowNavList(!showNavList);

  const isHomePage = location.pathname === '/';

  return (
    <nav className="center nav">
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className="nav__list"
      >
        {isHomePage && projects.length ? (
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Projects
            </a>
          </li>
        ) : null}

        {isHomePage && skills.length ? (
          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Skills
            </a>
          </li>
        ) : null}

        {isHomePage && contact.email ? (
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Contact
            </a>
          </li>
        ) : null}

        <li className="nav__list-item">
          <Link to="/blog" onClick={toggleNavList} className="link link--nav">
            Blog
          </Link>
        </li>
      </ul>

      <button
        type="button"
        onClick={toggleTheme}
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
}

export default Navbar;
