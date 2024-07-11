// components/action/Read.jsx
import React from "react";
import { Button } from "../../fragments/Button";
// Jika menggunakan fragment Button

const Read = ({ items, onEdit, onDelete }) => {
  if (items.length === 0) {
    return <div>No items to display</div>;
  }

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 max-w-full">
      {items.map((item) => (
        <div
          key={item.Stack_id}
          className="border p-2 mb-2 flex justify-between"
        >
          <div className="flex flex-col justify-between">
            <div className="bg-black h-[70%] aspect-square">
              <img
                src={`${import.meta.env.VITE_API_URL}${item.Gambar}`}
                alt={item.Gambar}
                className="aspect-square object-contain w-full max-w-full"
              />
            </div>
            <p><span>Nama Stack :</span>{item.NamaStack}</p>
            
          </div>
          <div className="flex">
            <Button
              onClick={() => onEdit(item)}
              text="Edit"
              color="yellow-500"
              icon="edit.svg"
            />
            <Button
              onClick={() => onDelete(item.Stack_id)}
              text="Delete"
              color="red-800"
              icon="delete.svg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Read;
