import { Home, Register, Login, Product, Detail, Admin } from './components/index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/admin',
      element: <Admin />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/product',
      element: <Product />,
    },
    {
      path: '/product/:id',
      element: <Detail />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
