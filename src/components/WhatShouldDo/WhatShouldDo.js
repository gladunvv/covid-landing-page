import React from 'react';

import './WhatShouldDo.scss';

export const WhatShouldDo = () => {
  return (
    <>
      <div className='what-should-do'>
        <div className='what-should-do__text'>
          <h2 className='title'>
            <span className='title-orange'>Covid-19 </span> <br />
            What should we do
          </h2>
          <p className='text'>
            Corona viruses are a type of virus. There are many different kinds,
            and some cause <br /> disease. A newly identified type has caused
          </p>
        </div>
        <div className="protected">
            <div className="protected__info">
                <div className="info-number">
                    01
                </div>
                <div className="info-text">
                    <div className="info-title"></div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};
