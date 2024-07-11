import React from 'react'
import { useRouteError } from 'react-router-dom' 
const ErrorPage = () => {
    const error = useRouteError();
    const token = localStorage.getItem('token');
  
  
  return (
    
     <div class="bg-gray-100">
    <div class="h-screen flex flex-col justify-center items-center">
        <h1 class="text-8xl font-bold text-gray-800">404</h1>
        <p class="text-4xl font-medium text-gray-800">{error.statusText || error.message}</p>
        <a href={`${token === null ? '/' : '/home'}`} class="mt-4 text-xl text-blue-600 hover:underline">Go back home</a>
    </div>

      
    </div>
  )
}

export default ErrorPage
