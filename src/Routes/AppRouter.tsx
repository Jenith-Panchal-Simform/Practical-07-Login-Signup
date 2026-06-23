import { createBrowserRouter, redirect } from 'react-router';

import Signup from '@/components/Signup/Signup';
import { Login } from '@/components/Login/Login';

import { RootRedirect } from './RootRedirect';
import ProtectedRoute from './ProtectedRoute';
import { Profile } from '@/components/Profile/Profile';

export const router = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect('/profile'),
  },
  {
    element: <RootRedirect />,
    children: [
      { path: 'signup', element: <Signup /> },
      { path: 'login', element: <Login /> },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);
