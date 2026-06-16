import { createBrowserRouter } from 'react-router';

import Signup from '@/components/Signup/Signup';
import { Login } from '@/components/Login/Login';
import { ProfilePage } from '@/components/Profile/ProfilePage';

import { RootRedirect } from './RootRedirect';

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
    element: <ProfilePage />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);
