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
        <div className='protected'>
          <div className='protected__item'>
            <div className='protected__info'>
              <div className='info-number'>01</div>
              <div className='info-text'>
                <div className='info-text__title'>Wear Masks</div>
                <p className='info-text__prgh'>
                  Continually seize impactful vortals rather than future-proof
                  supply chains. Uniquely exploit emerging niches via fully
                  tested meta-services. Competently pursue standards compliant
                  leadership skills vis-a-vis pandemic `outside the box`
                  thinking. Objectively
                </p>
              </div>
            </div>
            <div className='protected__img'>
              <img
                className='protected-girl'
                src='./static/img/Mask.png'
                alt='Mask'
              />
            </div>
          </div>
          <div className='protected__item'>
            <div className='protected__img'>
              <img
                className='protected-girl'
                src='./static/img/WashHand.png'
                alt='WashHand'
              />
            </div>
            <div className='protected__info'>
              <div className='info-number'>02</div>
              <div className='info-text'>
                <div className='info-text__title'>Wash Your Hands</div>
                <p className='info-text__prgh'>
                  Continually seize impactful vortals rather than future-proof
                  supply chains. Uniquely exploit emerging niches via fully
                  tested meta-services. Competently pursue standards compliant
                  leadership skills vis-a-vis pandemic `outside the box`
                  thinking. Objectively
                </p>
              </div>
            </div>
          </div>
          <div className='protected__item'>
            <div className='protected__info'>
              <div className='info-number'>03</div>
              <div className='info-text'>
                <div className='info-text__title'>Use nose - rag</div>
                <p className='info-text__prgh'>
                  Continually seize impactful vortals rather than future-proof
                  supply chains. Uniquely exploit emerging niches via fully
                  tested meta-services. Competently pursue standards compliant
                  leadership skills vis-a-vis pandemic `outside the box`
                  thinking. Objectively
                </p>
              </div>
            </div>
            <div className='protected__img'>
              <img
                className='protected-girl'
                src='./static/img/Rag.png'
                alt='Nose Rag'
              />
            </div>
          </div>
          <div className='protected__item'>
            <div className='protected__img'>
              <img
                className='protected-girl'
                src='./static/img/ContactGirl.png'
                alt='Contact'
              />
            </div>
            <div className='protected__info'>
              <div className='info-number'>04</div>
              <div className='info-text'>
                <div className='info-text__title'>Avoid contacts</div>
                <p className='info-text__prgh'>
                  Continually seize impactful vortals rather than future-proof
                  supply chains. Uniquely exploit emerging niches via fully
                  tested meta-services. Competently pursue standards compliant
                  leadership skills vis-a-vis pandemic `outside the box`
                  thinking. Objectively
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
