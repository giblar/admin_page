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
          key={item.Project_id}
          className="border p-2 mb-2 flex flex-col justify-between "
        >
          <div className="w-full ">
            <div className="w-full bg-black">
              <img
                src={`${import.meta.env.VITE_API_URL}${item.Gambar}`}
                alt={item.Gambar}
                className="aspect-video object-contain w-full "
              />
            </div>
            <p><span>Nama Project :</span>{item.NamaProject}</p>
            <p><span>link github :</span>{item.LinkGithub}</p>
            <p><span>link demo :</span>{item.LinkDemo}</p>
            <p className="break-words"><span>deskripsi:</span>{item.Deskripsi}</p>
          </div>
          <div className="flex justify-end">
            <Button
              onClick={() => onEdit(item)}
              text="Edit"
              color="yellow-500"
              icon="edit.svg"
            />
            <Button
              onClick={() => onDelete(item.Project_id)}
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
