import React, { useState } from 'react';
import axios from 'axios';

const Update = ({ item, onUpdate }) => {
  const [updatedItem, setUpdatedItem] = useState({
    isi: item.isi,
   
  });
  const [imageFile, setImageFile] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('isi', updatedItem.isi);
   
    
    

    const token = localStorage.getItem("token"); // Mengambil token dari local storage
    if (!token) {
      console.error('No authorization token found.');
      return;
    }

    try {
      console.log('FormData content:', formData); // Debugging log
      const response = await axios.put(`${apiUrl}/about/${item.about_id}`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      onUpdate(response.data.data);
    } catch (error) {
      console.error(`Error updating item with ID ${item.about_id}:`, error);
      if (error.response && error.response.data && error.response.data.message) {
        console.error('Server error message:', error.response.data.message);
      }
    }
  };

  const handleChange = (e) => {
    setUpdatedItem({ ...updatedItem, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex items-end w-full">
      <div className='w-full  flex items-end flex-col justify-between'>
       
        <textarea
          type="text"
          placeholder="isi about me"
          name="isi"
          value={updatedItem.isi}
          onChange={handleChange}
          className="border p-2 mb-2 rounded-md bg-gray-800 w-full min-h-32"
        />
       
       
      <button type="submit" className="bg-sky-900 rounded-lg text-white p-2 h-10">Update</button>
      </div>
    </form>
  );
};

export default Update;
