import React, { useState } from 'react';
import axios from 'axios';

const UpdateProject = ({ item, onUpdate }) => {
  const [updatedItem, setUpdatedItem] = useState({
    NamaProject: item.NamaProject,
    LinkGithub: item.LinkGithub,
    LinkDemo: item.LinkDemo,
    Deskripsi: item.Deskripsi,
  });
  const [imageFile, setImageFile] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('NamaProject', updatedItem.NamaProject);
    formData.append('LinkGithub', updatedItem.LinkGithub);
    formData.append('LinkDemo', updatedItem.LinkDemo);
    formData.append('Deskripsi', updatedItem.Deskripsi);

    // Check if a new image file is selected
    if (imageFile) {
      formData.append('Gambar', imageFile);
    } else {
      // Add existing image URL if no new file is uploaded
      formData.append('Gambar', item.Gambar);
    }

    const token = localStorage.getItem("token"); // Mengambil token dari local storage
    if (!token) {
      console.error('No authorization token found.');
      return;
    }

    try {
      const response = await axios.put(`${apiUrl}/project/${item.project_id}`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      onUpdate(response.data.data);
    } catch (error) {
      console.error(`Error updating item with ID ${item.project_id}:`, error);
      if (error.response && error.response.data && error.response.data.message) {
        console.error('Server error message:', error.response.data.message);
      }
    }
  };

  const handleChange = (e) => {
    setUpdatedItem({ ...updatedItem, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex items-end">
      <div>
        <img src={`http://localhost:3000${item.Gambar}`} alt="Gambar" className="w-32" />
        <input
          type="text"
          placeholder="Nama Project"
          name="NamaProject"
          value={updatedItem.NamaProject}
          onChange={handleChange}
          className="border p-2 mb-2 rounded-md bg-gray-800"
        />
        <input
          type="text"
          placeholder="Link Github"
          name="LinkGithub"
          value={updatedItem.LinkGithub}
          onChange={handleChange}
          className="border p-2 mb-2 rounded-md bg-gray-800"
        />
        <input
          type="text"
          placeholder="Link Demo"
          name="LinkDemo"
          value={updatedItem.LinkDemo}
          onChange={handleChange}
          className="border p-2 mb-2 rounded-md bg-gray-800"
        />
        <textarea
          placeholder="Deskripsi"
          name="Deskripsi"
          value={updatedItem.Deskripsi}
          onChange={handleChange}
          className="border p-2 mb-2 rounded-md bg-gray-800"
        />
        <div className="relative flex">
          <label
            htmlFor="fileInput"
            className="cursor-pointer flex flex-col items-center justify-center border-dotted border-2 border-sky-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md"
          >
            <img src="file.svg" alt="" /> Upload File
          </label>
          <input
            id="fileInput"
            type="file"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="hidden"
          />
        </div>
      </div>
      <button type="submit" className="bg-sky-900 rounded-lg text-white p-2 h-10">Update</button>
    </form>
  );
};

export default UpdateProject;
