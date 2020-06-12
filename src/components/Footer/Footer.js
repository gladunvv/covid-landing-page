import React from 'react';

import './Footer.scss';
export const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='footer__logo'>
          <img
            alt='covid-19'
            src='static/img/coronavirus.png'
            className='logo__img'
          />
          <span className='logo__text'>covid-19</span>
        </div>
        <ul className='header__menu'>
          <li className='tab'>Overview</li>
          <li className='tab'>Contagion</li>
          <li className='tab'>Symptoms</li>
          <li className='tab'>Prevention</li>
        </ul>
      </div>
    </>
  );
};
