import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Services from './components/services/Services';
import Navbar from './components/Navbar/Navbar';
import { createBrowserRouter, RouterProvider, Outlet, Navigate, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './components/About/About';
import Payments from './components/Payments/Payments';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';
import Privacy from './components/Privacy/Privacy';

const App = () => {
  const Layout = () => {
    const location = useLocation();
    const noNavbarPaths = ['/', '/Login', '/register', '/terms', '/privacy'];
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
          path: '/about',
          element: <About />
        },
        {
          path: '/payments',
          element: <Payments />
        },
        {
          path:'/terms',
          element: <TermsAndConditions />
        },
        {
          path: '/privacy',
          element: <Privacy />
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






