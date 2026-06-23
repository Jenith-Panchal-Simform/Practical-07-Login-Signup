import { Navigate, Outlet } from 'react-router';

export function RootRedirect() {
  const loggedIn = Boolean(localStorage.getItem('loggedInUser'));
  if (loggedIn) return <Navigate to="/profile" replace />;
  return <Outlet />;
}
