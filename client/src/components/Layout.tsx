import React from 'react';
import { Outlet } from 'react-router-dom';
import AppNavBar from './UI/AppNavbar';
import { useAppSelector } from '../hooks/reduxHooks';
import LoadingPage from './Pages/LoadingPage';

export default function Layout(): JSX.Element {
  const userStatus = useAppSelector((state) => state.userData.status);

  if (userStatus === 'loading') return <LoadingPage />;
  return (
    <>
      <AppNavBar />
      <Outlet />
    </>
  );
}
