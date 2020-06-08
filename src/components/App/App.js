import React from 'react';
import { Header } from '../Header';
import { CovidAlert } from '../CovidAlert';
import { WhatIsCovid } from '../WhatIsCovid';

import './App.scss';
import { Contagion } from '../Contagion';

export const App = () => {
  return (
    <>
      <Header position />
      <CovidAlert position />
      <WhatIsCovid />
      <Contagion />
    </>
  );
};
