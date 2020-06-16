import React from 'react';
import cn from 'classnames';
import { string } from 'prop-types';

import './Footer.scss';

export const Footer = ({ position }) => {
  const footerClass = cn('footer', { [position]: position });
  return (
    <>
      <div className={footerClass}>
        <div className='footer__logo'>
          <img
            alt='covid-19'
            src='static/img/coronavirus.png'
            className='logo__img'
          />
          <span className='logo__text'>covid-19</span>
        </div>
        <ul className='footer__menu'>
          <li className='tab'>Overview</li>
          <li className='tab'>Contagion</li>
          <li className='tab'>Symptoms</li>
          <li className='tab'>Prevention</li>
        </ul>
      </div>
    </>
  );
};

Footer.propTypes = {
  position: string,
};
