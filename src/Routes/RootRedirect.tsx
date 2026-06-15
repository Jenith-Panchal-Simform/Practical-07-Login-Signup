import { Navigate } from 'react-router';

export function RootRedirect() {
  const loggedIn = localStorage.getItem('loggedInUser');
  return loggedIn ? <Navigate to="/Profile" replace /> : <Navigate to="/login" replace />;
}
