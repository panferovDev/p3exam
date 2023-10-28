import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Layout from './components/Layout';
import SignInPage from './components/Pages/SignInPage';
import SignUpPage from './components/Pages/SignUpPage';
import BadPracticePage from './components/Pages/BadPracticePage';
import useUserCheck from './hooks/useCheckUser';
import { useAppSelector } from './hooks/reduxHooks';
import ProtectdedRouter from './components/hoks/ProtectdedRouter';

function App(): JSX.Element {
  useUserCheck();
  const userStatus = useAppSelector((state) => state.userData.status);
  return (
    <div className="container min-h-[100vh] md:mx-auto mx-5">
      <Routes>
        <Route element={<Layout />}>
        <Route element={<ProtectdedRouter isAllowed={userStatus === 'success'} redirectTo="/signin" />}>
          <Route path="/" element={<Home />} />
        </Route>
        
          <Route path="/bad" element={<BadPracticePage />} />

          <Route element={<ProtectdedRouter isAllowed={userStatus !== 'success'} redirectTo="/" />}>
            <Route path="/signup" element={<SignUpPage />}>
              {' '}
              signup
            </Route>
            <Route path="/signin" element={<SignInPage />}>
              Signup
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
