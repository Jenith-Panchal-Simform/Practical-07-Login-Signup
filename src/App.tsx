import { RouterProvider } from 'react-router';
import { appRouter } from './Routes/AppRouter';

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
