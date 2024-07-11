import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 500); // Sesuaikan dengan durasi animasi bounceOutUp (dalam milidetik)
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0  bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 animate__animated `}>
      <div className={`bg-slate-900 rounded-lg p-4 max-w-lg w-full flex items-start animate__animated animate__bounceInDown ${isClosing ? 'animate__bounceOutUp' : ''}`}>
        {children}
        <button className="text-red-500" onClick={handleClose}><img src="close.svg" alt="" /></button>
      </div>
    </div>
  );
};

export default Modal;
