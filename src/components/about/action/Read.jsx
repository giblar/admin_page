import React from "react";
import { Button } from "../../fragments/Button";

const Read = ({ items, onEdit, onDelete }) => {
  if (items.length === 0) {
    return <div>No items to display</div>;
  }

  return (
    <div className="w-full overflow-hidden">
      {items.map((item) => (
        <div
          key={item.about_id}
          className="border p-2 mb-2 flex flex-col justify-between md:flex-row w-full"
        >
          <div className="max-w-full overflow-hidden">
            <p className="max-w-full break-words">
              <span>About Me: </span>
              {item.isi}
            </p>
          </div>
          <div className="flex">
            <Button
              onClick={() => onEdit(item)}
              text="Edit"
              color="yellow-500"
              icon="edit.svg"
            />
            <Button
              onClick={() => onDelete(item.about_id)}
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
