import { createBrowserRouter } from 'react-router-dom';
import Home from './layouts/Home.js';
import Catalog from './layouts/Сatalog.js';
import Profile from './layouts/Profile.js';
import NotFound from './layouts/NotFound.js';
import Layout from './layouts/Layout.js';
import AboutBook from './layouts/AbouBook.js';
import Signup from './components/Signup.js';
import Login from './components/Login.js'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: '/catalog',
        element: <Catalog />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/book/:id',
        element: <AboutBook />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);
