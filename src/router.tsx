import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Home from './pages/home/home.page';
import Dashboard from './pages/dashboard/dashboard.page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);
