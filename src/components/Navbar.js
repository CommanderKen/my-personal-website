import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHouse, FaBars, FaXmark } from "react-icons/fa6";
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
            Andrea <FaHouse className='fa-house' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaXmark className='fa-x-mark' /> : <FaBars className='fa-bars' /> }
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/cv" className='nav-links' onClick={closeMobileMenu}>
                CV
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/contacts" className='nav-links' onClick={closeMobileMenu}>
                Contatti
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/blog" className='nav-links' onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;