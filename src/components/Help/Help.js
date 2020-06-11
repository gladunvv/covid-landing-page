import React from 'react';

import './Help.scss';

export const Help = () => {
  return (
    <>
      <div className='help'>
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
