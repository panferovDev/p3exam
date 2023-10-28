import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type ProtectdedRouterProps = {
  redirectTo: string;
  children?: React.ReactElement;
  isAllowed: boolean;
};

export default function ProtectdedRouter({
  redirectTo,
  isAllowed,
  children,
}: ProtectdedRouterProps): JSX.Element {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }

  return <Outlet /> || children;
}
