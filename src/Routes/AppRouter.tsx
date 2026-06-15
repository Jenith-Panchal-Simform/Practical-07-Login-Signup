import { createBrowserRouter, Navigate } from 'react-router';
import Signup from '../components/Signup/Signup';
import { Login } from '@/components/Login/Login';
import { Profile } from '@/components/Profile/Profile';
import ProtectedRoute from './ProtectedRoute';

function RootRedirect() {
  const loggedIn =localStorage.getItem('loggedInUser');
  return loggedIn ? <Navigate to="/Profile" replace /> : <Navigate to="/login" replace />;
}

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootRedirect />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/profile',
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);
