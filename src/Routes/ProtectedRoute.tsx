import { Navigate, Outlet } from 'react-router';

export default function ProtectedRoute() {
  const loggedIn = Boolean(localStorage.getItem('loggedInUser'));
  if (!loggedIn) return <Navigate to="/login" replace />;
  return <Outlet />;
}
