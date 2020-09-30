import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiBookHeart } from 'react-icons/bi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import Profile from './Profile/Profile' 


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const profileClick = () => {
    return (
      <Profile />,
      setClick(false)
    );
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }} >
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              {/* menuが左に消える */}
              <BiBookHeart className='navbar-icon' />
                SPINACH
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/profile' className='nav-links' 
                onClick={profileClick}>
                  Profile
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                  Services
                 </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link
                   to='sign-up' 
                   className='btn-link' 
                  //  onClick={closeMobileMenu}
                   >
                    <Button buttonStyle='btn--outline'>Sign Up</Button>
                  </Link>
                ) : ( <Link 
                      to='sign-up' 
                      className='btn-link' 
                      onClick={closeMobileMenu}
                      >
                     <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                      Sign Up
                     </Button>
                  </Link>)}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
