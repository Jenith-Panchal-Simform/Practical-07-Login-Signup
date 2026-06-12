import { createBrowserRouter } from 'react-router';
import Signup from '../components/Signup/Signup';
import { Login } from '@/components/Login/Login';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
