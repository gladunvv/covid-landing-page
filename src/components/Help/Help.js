import React from 'react';
import className from 'classnames';
import { bool } from 'prop-types';

import './Help.scss';

export const Help = ({ position }) => {
  const classHelp = className('help', { 'help-position': position });
  return (
    <>
      <div className={classHelp}>
        <div className='help__title'>
          <h2 className='title'>
            Have Question in mind? <br /> Let us help you
          </h2>
        </div>
        <div className='help-sub'>
          <div className='help__post'>
            <input
              className='email-input'
              type='email'
              placeholder='test@gmail.com'
            />
          </div>
          <input className='help__button' type='button' value='Send' />
        </div>
      </div>
    </>
  );
};

Help.propTypes = {
  position: bool,
};
