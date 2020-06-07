import React from 'react';
import { Header } from '../Header';
import { CovidAlert } from '../CovidAlert';

import './App.scss';

export const App = () => {
  return (
    <>
      <Header position />
      <CovidAlert position />
    </>
  );
};
