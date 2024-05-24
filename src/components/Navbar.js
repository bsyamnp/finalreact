import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure this file contains the CSS provided below

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-light custom-navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">MyPortfolio.</Link>
        <button className="burger" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="main-navbar">
        <ul className="custom-menu">
          <li><Link to="/" onClick={toggleNavbar}>Home</Link></li>
          <li><Link to="/about" onClick={toggleNavbar}>About Me</Link></li>
          <li><Link to="/works" onClick={toggleNavbar}>Works</Link></li>
          <li><Link to="/contact" onClick={toggleNavbar}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
