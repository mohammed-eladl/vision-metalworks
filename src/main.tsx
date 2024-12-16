import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css';
import Home from './components/Pages/Home';
import AboutUS from './components/Pages/AboutUS';
import Portfolio from './components/Pages/Portfolio';
import Contact from './components/Pages/Contact';
import { NotFound } from './components/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <NotFound/>
  },
  {
    path: "/home",
    element: <Home/>,
   
  },
  {
    path: "/about-us",
    element: <AboutUS/>,
   
  },
  {
    path: "/portfolio",
    element: <Portfolio/>,
   
  },
  {
    path: "/contact-us",
    element: <Contact/>,
   
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>
);
