import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';
import Error from './pages/Error';
import Menu from './pages/Menu';

const router = createBrowserRouter([
  {

    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "menu",
        element: <Menu />,
      },

    ]
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ]
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
