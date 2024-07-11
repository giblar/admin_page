// components/action/Read.jsx
import React from "react";
import { Button } from "../../fragments/Button";
// Jika menggunakan fragment Button

const Read = ({ items, onEdit, onDelete }) => {
  if (items.length === 0) {
    return <div>No items to display</div>;
  }

  return (
    <div className="w-full ">
      {items.map((item) => (
        <div
          key={item.social_id}
          className="border p-2 mb-2 flex flex-col justify-between md:flex-row "
        >
          <div>
           
            <p><span>email:</span>{item.email}</p>
            <p><span>link github :</span>{item.github}</p>
            <p><span>link whatsapp:</span>{item.whatsapp}</p>
            <p><span>link linkedin :</span>{item.linkedin}</p>
            <p><span>link instagram :</span>{item.instagram}</p>
            <p><span>link spotify :</span>{item.spotify}</p>
          </div>
          <div className="flex ">
            <Button
              onClick={() => onEdit(item)}
              text="Edit"
              color="yellow-500"
              icon="edit.svg"
            />
            <Button
              onClick={() => onDelete(item.social_id)}
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
