import React from 'react';
import * as cn from 'classnames';
import { bool } from 'prop-types';
import './Header.scss';

export const Header = ({ position }) => {
  const headerClass = cn('header', { [position]: position });
  return (
    <>
      <div className={headerClass}>
        <div className='header__logo'>
          <img
            alt='covid-19'
            src='./static/img/coronavirus.png'
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

Header.propTypes = {
  position: bool,
};
