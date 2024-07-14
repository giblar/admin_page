import React, { useState } from "react";
import axios from "axios";
import { INP } from "../../fragments/INP";

const Create = ({ onCreate }) => {
  const [item, setItem] = useState({ isi: "" });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi bahwa semua field diisi
    if (!item.isi ) {
      setError("Please fill in all fields.");
      return;
    }

    const token = localStorage.getItem("token"); // Mengambil token dari local storage
    if (!token) {
      setError("No authorization token found.");
      return;
    }

    const formData = new FormData();
    formData.append("isi", item.isi);
    

    try {
      const response = await axios.post(`${apiUrl}/about`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      onCreate(response.data.data);
      setItem({ isi: "" });
      setError("");
    } catch (error) {
      console.error("Error creating item:", error);
      setError("Error creating item, please try again.");
    }
  };

 

  return (
    <form onSubmit={handleSubmit} className="mb-4 w-full flex items-end gap-2">
      <div className="w-full">
        <textarea
          placeholder="About Me"
          value={item.isi}
          onChange={(e) => setItem({ ...item, isi: e.target.value })}
          className="border p-2 mb-2 bg-gray-700 rounded-lg w-full min-h-32"
        />
      </div>

      <button type="submit" className="bg-sky-900 rounded-lg text-white p-2 h-10">
        Create
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
};

export default Create;
