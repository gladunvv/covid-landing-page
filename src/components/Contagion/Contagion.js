import React from 'react';
import className from 'classnames';
import './Contagion.scss';
import { bool } from 'prop-types';

export const Contagion = ({ position }) => {
  const contagionClass = className('contagion', {
    'covid-contagion': position,
  });
  return (
    <>
      <div className={contagionClass}>
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
              <div className='card__text-bold'>Human Contacts</div>
              Washing your hands is one of thesimplest ways you can protect
            </div>
          </div>
          <div className='card'>
            <div className='card__img'>
              <img src='./static/img/Object.png' alt='Air transmission' />
            </div>
            <div className='card__text'>
              <div className='card__text-bold'>Containted Objects</div>
              Use the tissue while sneezing,In this way, you can protect your
              droplets
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Contagion.propTypes = {
  position: bool,
};
