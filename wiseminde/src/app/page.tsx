'use client';

import Image from 'next/image'
import Navbar from './navbar'
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Home from './pages/home';
import Artist from './pages/artist';
import About from './pages/about';
import ArtistList from './pages/artistList';
import Contact from './pages/contact';
import Projects from './pages/projects';

export default function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

function Root() {
  return (
    <main className='flex flex-col pt-4 sm:flex-row px-2 h-screen'>
      <Navbar />
      <Outlet />
    </main>

  )
}

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/artists",
        element: <ArtistList />
      },
      {
        path: "/artists/:artist",
        element: <Artist />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/projects",
        element: <Projects />
      },
    ]
  },
]);
