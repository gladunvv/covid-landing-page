import React from 'react';
import cn from 'classnames';
import { string } from 'prop-types';
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
          <li className='tab'>
            <a className='tab-link' href='#overview'>
              Общая информация
            </a>
          </li>
          <li className='tab'>
            <a className='tab-link' href='#contagion'>
              Пути передачи
            </a>
          </li>
          <li className='tab'>
            <a className='tab-link' href='#symptomps'>
              Симптомы
            </a>
          </li>
          <li className='tab'>
            <a className='tab-link' href='#protection'>
              Способы защиты
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

Header.propTypes = {
  position: string,
};
