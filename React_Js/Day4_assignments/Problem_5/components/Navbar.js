import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faImages, faEnvelope, faInfoCircle, faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">Gallery</div>
      <div className="nav-links">
        <a href="#home"><FontAwesomeIcon icon={faHome} /> Home</a>
        <a href="#gallery"><FontAwesomeIcon icon={faImages} /> Gallery</a>
        <a href="#contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</a>
        <a href="#about"><FontAwesomeIcon icon={faInfoCircle} /> About</a>
      </div>
      <div className="nav-toggle"><FontAwesomeIcon icon={faBars} /></div>
    </nav>
  );
};

export default Navbar;
