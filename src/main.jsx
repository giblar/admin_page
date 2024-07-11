import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './components/pages/404.jsx';
import { HomePage } from './components/pages/HomePage.jsx';
import { AboutPage } from './components/pages/AboutPage.jsx';
import { ProjectPage } from './components/pages/ProjectPage.jsx';
import { SertiPage } from './components/pages/SertiPage.jsx';
import { LoginPage } from './components/pages/LoginPage.jsx';
import SocialPage from './components/pages/SocialPage.jsx';
import ProtectedRoute from './components/ProtectedRoute';
import { StackPage } from './components/pages/StackPage.jsx';
import { ProfilePage } from './components/pages/ProfilePage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: (
      <ProtectedRoute>
        <AboutPage />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/project",
    element: (
      <ProtectedRoute>
        <ProjectPage />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/sertifikat",
    element: (
      <ProtectedRoute>
        <SertiPage />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/social",
    element: (
      <ProtectedRoute>
        <SocialPage />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/stack",
    element: (
      <ProtectedRoute>
        <StackPage />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <ProfilePage/>
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
