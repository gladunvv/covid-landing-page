import React from 'react';

import './Contagion.scss';
export const Contagion = () => {
  return (
    <>
      <div className='contagion'>
        <div className='contagion__text'>
          <h2 className='title'>
            <span className='title-orange'>Covid-19 </span> <br />
            Contagion
          </h2>
        </div>

        <div className='contagion-cards'>
          <div className='card'>
            <div className='card__img'>
              <img src='./static/img/Air.png' alt='Air transmission' />
            </div>
            <div className='card__text'>
              <div className='card__text-bold'>Air Transmission</div>
              Objectively evolve tactical expertise before extensible
              initiatives. Efficiently simplify
            </div>
          </div>
          <div className='card'>
            <div className='card__img'>
              <img src='./static/img/Contact.png' alt='Air transmission' />
            </div>
            <div className='card__text'>
              <div className='card__text-bold'>Air Transmission</div>
              Objectively evolve tactical expertise before extensible
              initiatives. Efficiently simplify
            </div>
          </div>
          <div className='card'>
            <div className='card__img'>
              <img src='./static/img/Object.png' alt='Air transmission' />
            </div>
            <div className='card__text'>
              <div className='card__text-bold'>Air Transmission</div>
              Objectively evolve tactical expertise before extensible
              initiatives. Efficiently simplify
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
