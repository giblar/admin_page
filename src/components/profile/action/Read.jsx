// components/action/Read.jsx
import React from "react";
import { Button } from "../../fragments/Button";
// Jika menggunakan fragment Button

const Read = ({ items, onEdit, onDelete }) => {
  if (items.length === 0) {
    return <div>No items to display</div>;
  }

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item) => (
        <div
          key={item.Profile_id}
          className="border p-2 mb-2 flex justify-between flex-col md:flex-row"
        >
          <div className="flex  justify-between flex-col">
            <div className="bg-black">
              <img
                src={`${import.meta.env.VITE_API_URL}${item.Gambar}`}
                alt={item.Gambar}
                className="aspect-video object-contain"
              />
            </div>
            <p><span>Nama :</span>{item.NamaProfile}</p>
            
          </div>
          <div className="flex">
            <Button
              onClick={() => onEdit(item)}
              text="Edit"
              color="yellow-500"
              icon="edit.svg"
            />
            <Button
              onClick={() => onDelete(item.Profile_id)}
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
