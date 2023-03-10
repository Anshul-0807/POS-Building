import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css'
import About from './pages/About';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AuthLayout from './layouts/AuthLayout';

const router = createBrowserRouter([
  {
   
    element: <MainLayout/>,
    children : [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "about",
        element: <About/>,
      }
    ]
  },
   {
    element: <AuthLayout/>,        
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
