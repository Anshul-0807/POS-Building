import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
   
    element: <MainLayout/>,
    children : [
      {
        path: "/",
        element: <HomePage/>,
      },
     
    ]
  },
   {
    element: <AuthLayout/>,   
    children : [
      {
        path: "login",
        element: <Login/>,
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
