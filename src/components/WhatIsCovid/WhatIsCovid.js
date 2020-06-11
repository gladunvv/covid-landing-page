import React from 'react';
import className from 'classnames';
import { bool } from 'prop-types';

import './WhatIsCovid.scss';

export const WhatIsCovid = ({ position }) => {
  const WhatIsClass = className('what-is-covid', {
    'what-is-position': position,
  });
  return (
    <>
      <div className={WhatIsClass}>
        <img
          className='what-is-covid__img'
          src='static/img/corona_cloud.png'
          alt='corona'
        />
        <div className='what-is-covid__text'>
          <h2 className='title'>
            <span className='title-orange'>What is Covid-19</span> <br />
            Коронавирус
          </h2>
          <p>
            Corona viruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified type has caused a recent
            outbreak of respiratory illness now called COVID-19.Lauren Sauer,
            M.S., the director of operations with the Johns Hopkins Office of
            Critical Event Preparedness and Response
          </p>
        </div>
      </div>
    </>
  );
};

WhatIsCovid.propTypes = {
  position: bool,
};
