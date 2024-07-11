import React from "react";
import { useNavigate } from 'react-router-dom';
import { Href } from "./fragments/Href";

export const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="h-screen">
      <div className="hidden md:flex flex-col w-64 bg-gray-700 h-screen ">
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <span className="text-white font-bold uppercase">giblar tampan</span>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-2 py-4 bg-gray-700">
            <Href page="About" urls="/about" />
            <Href page="Project" urls="/project" />
            <Href page="Sertifikat" urls="/sertifikat" />
            <Href page="social" urls="/social" />
            <Href page="stack" urls="/stack" />
            <Href page="profile" urls="/profile" />
          
          </nav>
          <button 
              onClick={handleLogout} 
              className="mt-4 px-4 py-2 bg-slate-950 text-white rounded-lg hover:bg-black flex items-center justify-center gap-3"
            >
              Logout<img src="logout.svg" alt="" />
            </button>
        </div>
      </div>
    </div>
  );
};
 