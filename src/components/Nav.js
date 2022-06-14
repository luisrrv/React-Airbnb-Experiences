import React from 'react'
import logo from '../images/airbnb-logo.png';

const Nav = () => {
  return (
    <nav>
      <img src={logo} className='nav--logo' alt="logo" />
    </nav>
  )
}

export default Nav;
