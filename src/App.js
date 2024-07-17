import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Services from './components/services/Services';
import Navbar from './components/Navbar/Navbar';
import { createBrowserRouter, RouterProvider, Outlet, Navigate, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const Layout = () => {
    const location = useLocation();
    const noNavbarPaths = ['/', '/Login', '/register'];
    return (
      <>
        {!noNavbarPaths.includes(location.pathname) && <Navbar />}
        <Outlet />
        <ToastContainer />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Navigate to="/Login" replace={true} />,
        },
        {
          path: '/Login',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/services',
          element: <Services />,
        },
        {
          path: '*',
          element: <h1>Page not found</h1>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;






