import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import PortFolio from './portfolio';
import Price from './price';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/price' element={<Price />} />
      <Route path='/portfolio' element={<PortFolio />} />
    </Routes>
  );
};

export default App;
