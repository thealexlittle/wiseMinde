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
    <main className='card card-tertiary w-screen'>
      <div className='card-header'>
        <h1>wiseminde.exe</h1>
      </div>
      <div className='flex flex-col sm:flex-row pt-2'>
        <Navbar />
        <div className='card-body bg-[#00807F] w-full h-screen overflow-scroll'>
          <Outlet />
        </div>
      </div>
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
