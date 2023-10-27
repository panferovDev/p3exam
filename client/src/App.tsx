import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Layout from './components/Layout';
import SignInPage from './components/Pages/SignInPage';
import SignUpPage from './components/Pages/SignUpPage';
import BadPracticePage from './components/Pages/BadPracticePage';
import useUserCheck from './hooks/useCheckUser';

function App(): JSX.Element {

  useUserCheck()
  
  return (
    <div className="container md:mx-auto mx-5">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path='/bad' element={<BadPracticePage/>}/>
          <Route path="/signup" element={<SignUpPage />}>
            {' '}
            signup
          </Route>
          <Route path="/signin" element={<SignInPage />}>
            Signup
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
