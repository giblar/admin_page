import React, { useState } from 'react';
import axios from 'axios';

const Update = ({ item, onUpdate }) => {
  const [updatedItem, setUpdatedItem] = useState({
    email: item.email,
    github: item.github,
    whatsapp: item.whatsapp,
    linkedin: item.linkedin,
    instagram: item.instagram,
    spotify: item.spotify
  });
  
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', updatedItem.email);
    formData.append('github', updatedItem.github);
    formData.append('whatsapp', updatedItem.whatsapp);
    formData.append('linkedin', updatedItem.linkedin);
    formData.append('instagram', updatedItem.instagram);
    formData.append('spotify', updatedItem.spotify);
    
    const token = localStorage.getItem("token"); // Mengambil token dari local storage
    if (!token) {
      console.error('No authorization token found.');
      return;
    }

    try {
      console.log('FormData content:', formData); // Debugging log
      const response = await axios.put(`${apiUrl}/social/${item.social_id}`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      onUpdate(response.data.data);
    } catch (error) {
      console.error(`Error updating item with ID ${item.social_id}:`, error);
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
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={updatedItem.email}
          onChange={handleChange}
          className="border p-2 mb-2 rounded-md bg-gray-800"
        />
        <input
          type="text"
          placeholder="GitHub"
          name="github"
          value={updatedItem.github}
          onChange={handleChange}
          className="border p-2 mb-2 rounded-md bg-gray-800"
        />
        <input
          type="text"
          placeholder="WhatsApp"
          name="whatsapp"
          value={updatedItem.whatsapp}
          onChange={handleChange}
          className="border p-2 mb-2 rounded-md bg-gray-800"
        />
        <input
          type="text"
          placeholder="LinkedIn"
          name="linkedin"
          value={updatedItem.linkedin}
          onChange={handleChange}
          className="border p-2 mb-2 rounded-md bg-gray-800"
        />
        <input
          type="text"
          placeholder="Instagram"
          name="instagram"
          value={updatedItem.instagram}
          onChange={handleChange}
          className="border p-2 mb-2 rounded-md bg-gray-800"
        />
        <input
          type="text"
          placeholder="Spotify"
          name="spotify"
          value={updatedItem.spotify}
          onChange={handleChange}
          className="border p-2 mb-2 rounded-md bg-gray-800"
        />
      </div>
      <button type="submit" className="bg-sky-900 rounded-lg text-white p-2 h-10">Update</button>
    </form>
  );
};

export default Update;
