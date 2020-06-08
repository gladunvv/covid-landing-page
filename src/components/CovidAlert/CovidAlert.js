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
            Stay at Home quarantine <br /> To stop Corona virus
          </h2>
          <p>
            There is no specific medicine to prevent or treat coronavirus
            disease (COVID-19). People may need supportive care to .
          </p>
        </div>
        <img
          className='stay-at-home__img'
          src='static/img/girl_on_sofa.png'
          alt='girl on sofa'
        />
      </div>
    </>
  );
};

CovidAlert.propTypes = {
  position: bool,
};
