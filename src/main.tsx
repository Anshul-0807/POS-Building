import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App'
import './index.css'
import About from './pages/About';
import MainLayout from './layouts/MainLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
