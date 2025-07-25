import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; // make sure it's `react-router-dom`
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';
import Root from './components/Root.jsx';

// Lazy-loaded route components
const Homepage = lazy(() => import('./components/HomePage/Homepage.jsx'));
const SignIn = lazy(() => import('./components/SignInAndUp/SignIn.jsx'));
const SignUp = lazy(() => import('./components/SignInAndUp/SignUp.jsx'));
const Pricing = lazy(() => import('./components/Pricing/Pricing.jsx'));

// Optional fallback
export const Loading = () => (
  <div style={{ textAlign: 'center', padding: '2rem' }}>
    Loading page...
  </div>
);

// eslint-disable-next-line no-unused-vars
const withSuspense = (Component) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
);

// Create the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: withSuspense(Homepage)
      },
      {
        path: 'signIn',
        element: withSuspense(SignIn)
      },
      {
        path: 'signUp',
        element: withSuspense(SignUp)
      },
      {
        path: 'pricing',
        element: withSuspense(Pricing)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
