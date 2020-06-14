import React from 'react';
import className from 'classnames';
import { bool } from 'prop-types';
import './CovidAlert.scss';

export const CovidAlert = ({ position }) => {
  const alertClass = className('stay-at-home', { 'covid-alert': position });
  return (
    <>
      <div className={alertClass}>
        <div className='stay-at-home__text'>
          <h2 className='title'>
            <span className='title-orange'>COVID-19 Alert</span> <br />
            Соблюдайте режим самоизоляции <br /> Помогите остановить коронавирус
          </h2>
          <p>
            Самоизоляция является вынужденной мерой, чтобы замедлить
            распространение инфекции и уменьшить количество заболевших. Это
            отличная мера профилактики в условиях отсутствия вакцины.
          </p>
        </div>
        <img
          className='stay-at-home__img'
          src='static/img/Girl.png'
          alt='girl on sofa'
        />
      </div>
    </>
  );
};

CovidAlert.propTypes = {
  position: bool,
};
