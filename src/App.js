import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './components/Register/Register';
import Services from './components/services/Services';


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/services',
          element: <Services />
        },
        {
          path: '*',
          element: <h1>Page not found</h1>,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;
