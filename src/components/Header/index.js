import React from 'react';

import logo from '../../assets/logo.png';

import './header.scss';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-container">
        <img src={logo} alt="logo" />
        <select>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
      </div>
    </header>
  )
}

export default Header;
