import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Href } from "./fragments/Href";

export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    handleResize(); // Set the initial state based on the current window size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative h-screen">
      {/* Toggle button for mobile view */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-gray-700 text-white rounded-lg block md:hidden"
      >
        <img src="menu.svg" alt="Menu" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 top-0 left-0 z-40 md:static md:w-64 bg-gray-700 h-screen transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <span className="text-white font-bold uppercase">giblar tampan</span>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-2 py-4 bg-gray-700">
            <Href page="Home" urls="/home" />
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
            Logout<img src="logout.svg" alt="Logout" />
          </button>
        </div>
      </div>
    </div>
  );
};
