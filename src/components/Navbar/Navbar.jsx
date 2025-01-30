import React, { useState, useEffect } from "react";
import { useNavbarController } from "../../controllers/NavbarController";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from '../../img/logo1.svg';

const Navbar = () => {
  const { links, isActive } = useNavbarController();

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.setAttribute('data-theme', darkMode ? 'light' : 'dark');
    localStorage.setItem('theme', darkMode ? 'light' : 'dark');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setDarkMode(savedTheme === 'dark');
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          <img 
            src={logo}
            alt="Ridvan Torun Logo" 
            className="logo-image"
          />
        </Link>
      </div>
      
      <div className="nav-links">
        {links.map((link, index) => (
          link.isExternal ? (
            <a
              key={index}
              href={link.url}
              className={`nav-link ${isActive(link.url) ? "active" : ""}`}
            >
              {link.name}
            </a>
          ) : (
            <Link
              key={index}
              to={link.url}
              className={`nav-link ${isActive(link.url) ? "active" : ""}`}
            >
              {link.name}
            </Link>
          )
        ))}
      </div>

      <div className="nav-actions">
        <a href="https://github.com/ridvantorun" target="_blank" rel="noreferrer" className="github-link">
          Github
        </a>
        <button 
          onClick={toggleDarkMode} 
          className="theme-toggle"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

