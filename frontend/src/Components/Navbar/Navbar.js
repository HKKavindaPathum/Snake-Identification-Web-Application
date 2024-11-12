import React, {useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook } from '@fortawesome/free-solid-svg-icons';
import logo from '../../Assets/Logo.png';

export const Navbar = () => {

  const [menu,setMenu] = useState("home");

  return (

    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="Logo" className="nav-logo-img" />
        <p className="nav-logo-text">Snake Shield</p>
      </div>
      
      <ul className='nav-menu'>

        <li onClick={()=>{setMenu("home")}}>
          <Link style={{textDecoration: 'none'}} to='/' className='nav-link' >
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
          {menu==="home"?<hr/>:<></>}
        </li>

        <li onClick={()=>{setMenu("learn")}}>
          <Link style={{textDecoration: 'none'}} to='/learn' className='nav-link'>
            <FontAwesomeIcon icon={faBook} /> Learn
          </Link>
          {menu==="learn"?<hr/>:<></>}
        </li>
      </ul>
    </div>
  );
};
