import React from 'react';
import { Header } from '../Header';
import { CovidAlert } from '../CovidAlert';
import { WhatIsCovid } from '../WhatIsCovid';
import { Contagion } from '../Contagion';
import { Symptomps } from '../Symptomps';
import { WhatShouldDo } from '../WhatShouldDo';
import { Help } from '../Help';
import { Footer } from '../Footer';

import './App.scss';

export const App = () => {
  return (
    <>
      <div className='content'>
        <Header position />
        <CovidAlert position />
        <WhatIsCovid />
        <Contagion position />
        <Symptomps position />
        <WhatShouldDo />
        <Help position />
        <Footer position />
      </div>
    </>
  );
};
