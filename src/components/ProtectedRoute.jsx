import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    // Redirect to login page if no token is found
    return <Navigate to="/" replace />;
  }

  // Render the children components if token is found
  return children;
};

export default ProtectedRoute;
