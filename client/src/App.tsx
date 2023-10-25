import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Layout from './components/Layout';

function App(): JSX.Element {
  return (
    <div className="container md:mx-auto mx-5">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
