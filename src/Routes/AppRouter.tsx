import { createBrowserRouter } from 'react-router';
import Signup from '../components/Signup/Signup';
import { Login } from '@/components/Login/Login';
import { Profile } from '@/components/Profile/Profile';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/Profile',
    element: <Profile />,
  },
]);
