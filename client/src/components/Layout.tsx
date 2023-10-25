import React from 'react';
import { Outlet } from 'react-router-dom';
import AppNavBar from './UI/AppNavbar';

export default function Layout(): JSX.Element {
  return (
    <>
      <AppNavBar />
      <Outlet />
    </>
  );
}
