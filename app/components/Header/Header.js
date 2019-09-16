import React from 'react';
import Banner from './images/banner.png';
import './style.scss';

const Header = () => (
  <div className="header">
    <a
      href="https://github.com/filkovskyi/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={Banner} alt="react-redux-boilerplate - Logo" />
    </a>
  </div>
);

export default Header;
