import React from 'react';

export const Button = ({ color, text, icon, onClick }) => {
  return (
    <div className={`cursor-pointer  rounded-full flex w-[100px] text-white items-center justify-center`} onClick={onClick}>
      <img src={icon} alt="" />
      <p>{text}</p>
    </div>
  );
};
