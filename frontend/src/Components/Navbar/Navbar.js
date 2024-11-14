import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../Assets/Logo.png';

export const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="Logo" className="nav-logo-img" />
        <p className="nav-logo-text">Snake Detector</p>
      </div>
      
      <div className="nav-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </div>

      <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <li onClick={() => { setMenu("home"); setIsMobileMenuOpen(false); }}>
          <Link style={{ textDecoration: 'none' }} to='/' className='nav-link'>
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>

        <li onClick={() => { setMenu("learn"); setIsMobileMenuOpen(false); }}>
          <Link style={{ textDecoration: 'none' }} to='/learn' className='nav-link'>
            <FontAwesomeIcon icon={faBook} /> Learn
          </Link>
          {menu === "learn" ? <hr /> : <></>}
        </li>
      </ul>
    </div>
  );
};
