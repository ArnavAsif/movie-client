import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './components/Root.jsx';
import Homepage from './components/HomePage/Homepage.jsx';
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';
import SignIn from './components/SignInAndUp/SignIn.jsx';
import SignUp from './components/SignInAndUp/SignUp.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Homepage></Homepage>
      },
      {
        path: 'signIn',
        element: <SignIn></SignIn>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
