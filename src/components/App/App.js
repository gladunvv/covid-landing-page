import React from 'react';
import { Header } from '../Header';
import { CovidAlert } from '../CovidAlert';
import { WhatIsCovid } from '../WhatIsCovid';
import { Contagion } from '../Contagion';
import { Symptomps } from '../Symptomps';
import { WhatShouldDo } from '../WhatShouldDo';

import './App.scss';

export const App = () => {
  return (
    <>
      <Header position />
      <CovidAlert position />
      <WhatIsCovid />
      <Contagion position />
      <Symptomps position />
      <WhatShouldDo />s
    </>
  );
};
