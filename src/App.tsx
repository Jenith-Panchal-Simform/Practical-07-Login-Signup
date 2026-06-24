import { RouterProvider } from 'react-router';
import { router } from './Routes/AppRouter';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
