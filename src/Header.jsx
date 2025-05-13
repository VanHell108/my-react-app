import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === '/my-react-app/contact';

  const handleHomeClick = () => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <h1>
        <Link
          to="/my-react-app"
          onClick={handleHomeClick}
          className="header-link"
        >
          My React Website
        </Link>
      </h1>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <nav className={menuOpen ? 'open' : ''}>
        <ul>
          <li>
            <Link to="/my-react-app" onClick={handleHomeClick}>Home</Link>
          </li>
          {!isContactPage && (
            <>
              <li><a href="#cards" onClick={handleNavClick}>Cards</a></li>
              <li><a href="#todo" onClick={handleNavClick}>To-Do</a></li>
              <li><a href="#jokes" onClick={handleNavClick}>Jokes</a></li>
            </>
          )}
          <li>
            <Link to="/my-react-app/contact" onClick={handleNavClick}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
