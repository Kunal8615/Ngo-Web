import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import './App.css';
import Awards from './pages/awards.jsx';
import Layout from './layout.jsx';
import About from './pages/about.jsx';
import Experience from './pages/experience.jsx';
import Contact from './pages/contact.jsx';
import { createRoot } from'react-dom/client';

// Define the routes properly
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children : [
      {
        path: "",
        element: <About />,
      },
      {
        path: '/experience',
        element: <Experience />,
      },
      {
        path: '/awards',
        element: <Awards />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

// Render the application
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
)
