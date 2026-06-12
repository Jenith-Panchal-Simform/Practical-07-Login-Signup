import { createBrowserRouter } from 'react-router';
import Signup from '../components/Signup/Signup';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Signup />,
  },
]);
