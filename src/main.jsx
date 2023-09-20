import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Users from './Components/Users/Users';
import UsersDetails from './Components/UsersDetails/UsersDetails';
import Albums from './Components/Albums/Albums';
import UsersAlbum from './Components/UsersAlbum/UsersAlbum';
import ErrorPage from './Components/ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/user/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UsersDetails></UsersDetails>
      },
      {
        path: '/albums',
        loader: () => fetch('https://jsonplaceholder.typicode.com/albums'),
        element: <Albums></Albums>
      },
      {
        path: '/album/:albumId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/albums/${params.albumId}`),
        element: <UsersAlbum></UsersAlbum>
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
