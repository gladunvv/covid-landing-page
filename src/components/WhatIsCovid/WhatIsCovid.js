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
      <div id='overview' className={WhatIsClass}>
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
            Болезнь, вызванная коронавирусной ‎инфекцией COVID-2019, – это
            инфекционное ‎заболевание, вызванное новым, ранее ‎неизвестным
            коронавирусом. ‎ У большинства заболевших COVID-19 ‎наблюдаются
            легкие или умеренные ‎симптомы, выздоровление происходит без
            ‎специфического лечения. ‎
          </p>
        </div>
        <img
          className='what-is-covid__img-mobile'
          src='static/img/corona_cloud.png'
          alt='corona'
        />
      </div>
    </>
  );
};

WhatIsCovid.propTypes = {
  position: bool,
};
