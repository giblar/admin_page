import React, { useState } from "react";
import axios from "axios";
import { INP } from "../../fragments/INP";

const Create = ({ onCreate }) => {
  const [item, setItem] = useState({ NamaStack: "" });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi bahwa semua field diisi
    if (!item.NamaStack || !imageFile) {
      setError("Please fill in all fields.");
      return;
    }

    const token = localStorage.getItem("token"); // Mengambil token dari local storage
    if (!token) {
      setError("No authorization token found.");
      return;
    }

    const formData = new FormData();
    formData.append("NamaStack", item.NamaStack);
    formData.append("Gambar", imageFile);

    try {
      const response = await axios.post(`${apiUrl}/stack`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      onCreate(response.data.data);
      setItem({ NamaStack: "" });
      setImageFile(null);
      setImagePreview(null);
      setError("");
    } catch (error) {
      console.error("Error creating item:", error);
      setError("Error creating item, please try again.");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 w-full flex items-end">
      <div className="w-full">
        <INP
          placeholder="Nama stack"
          value={item.NamaStack}
          onChange={(e) => setItem({ ...item, NamaStack: e.target.value })}
        />

        {/* Kastem upload file */}
        <div className="relative flex flex-col">
          <label
            htmlFor="fileInput"
            className="cursor-pointer flex flex-col items-center justify-center border-dotted border-2 border-sky-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md"
          >
            <img src="file.svg" alt="" /> Upload File
          </label>
          <input
            id="fileInput"
            type="file"
            onChange={handleFileChange}
            className="hidden"
          />
          {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="Preview"
                className="rounded-lg border border-gray-300"
              />
            </div>
          )}
        </div>
      </div>

      <button type="submit" className="bg-sky-900 rounded-lg text-white p-2 h-10">
        Create
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
};

export default Create;
