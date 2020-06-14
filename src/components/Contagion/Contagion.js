import React from 'react';
import className from 'classnames';
import { bool } from 'prop-types';
import './Contagion.scss';

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
            Пути передачи вируса
          </h2>
          <p className='text'>
            Существует несколько путей передачи вируса, чтобы избежать
            заражения, <br /> необходимо знать о них и сделать максимум для
            своей безопасности <br /> и безопасности окружающих.
          </p>
        </div>

        <div className='contagion-cards'>
          <div className='card'>
            <div className='card__img'>
              <img src='./static/img/Air.png' alt='Air transmission' />
            </div>
            <div className='card__text'>
              <div className='card__text-bold'>Воздушно-капельный</div>
              Один из самых распространенных и быстрых способов передачи
              инфекционных болезней.
            </div>
          </div>
          <div className='card'>
            <div className='card__img'>
              <img src='./static/img/Contact.png' alt='Air transmission' />
            </div>
            <div className='card__text'>
              <div className='card__text-bold'>Близкий контакт</div>
              Инфекция передается от больного человека к здоровому при близких
              контактах.
            </div>
          </div>
          <div className='card'>
            <div className='card__img'>
              <img src='./static/img/Object.png' alt='Air transmission' />
            </div>
            <div className='card__text'>
              <div className='card__text-bold'>Грязные поверхности</div>
              Любой предмет общего пользования может быть опасным и нести на
              себе инфекцию.
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
