import React from 'react';

import './Symptomps.scss';

export const Symptomps = () => {
  return (
    <>
      <div className='symptomps'>
        <div className='symptomps__text'>
          <h2 className='title'>
            <span className='title-orange'>Covid-19 </span> <br />
            Symptomps
          </h2>
          <p className='text'>
            Corona viruses are a type of virus. There are many different kinds,
            and some cause disease. <br/> A newly identified type has caused a recent
            outbreak of respiratory
          </p>
        </div>
        <div className="symptomps__img">
          <img className="img-smpt-bg" src="./static/img/Bg_symptopms.png" alt="BG Symptomps"/>
          <img className="img-smpt" src="./static/img/Symptomps.png" alt="Symptomps"/>
        </div>
      </div>
    </>
  );
};