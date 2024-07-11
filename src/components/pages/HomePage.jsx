import React, { useState } from 'react';
import { Sidebar } from '../sidebar/Sidebar';

export const HomePage = () => {
  const token = localStorage.getItem('token');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(token).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000); // Reset after 2 seconds
    });
  };

  return (
    <div className='flex w-full overflow-hidden'>
      <Sidebar />
      <div className='bg-gray-800 w-full flex flex-col px-10 justify-center'>
        <h1 className='text-6xl text-white uppercase font-bold animate-bounce'>Welcome back!!</h1>
        <div className='border rounded-lg w-1/3 mt-4 p-4 '>
          <h1 className='text-white w-full break-words mb-2'>{token}</h1>
          <button 
            className='rounded-md float-right hover:bg-gray-700 transition duration-300' 
            onClick={handleCopy}
          >
           <img src="copy.svg" alt="" className={copied ? 'animate-bounce' : ''} /> 
          </button>
        </div>
      </div>
    </div>
  );
};
