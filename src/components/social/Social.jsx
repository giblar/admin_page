import React, { useState, useEffect } from 'react';
import Create from './action/Create';
import Update from './action/Update';
import Read from './action/Read';
import Modal from '../fragments/Modal'; 
import 'animate.css/animate.min.css'; // Mengimpor animate.css
import axios from 'axios';

const Social = () => {
  const [items, setItems] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/social`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setItems(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleCreate = (newItem) => {
    setItems([...items, newItem]);
    setIsCreateModalOpen(false); // Close modal after create
  };

  const handleUpdate = (updatedItem) => {
    setItems(items.map(item => (item.social_id=== updatedItem.social_id? updatedItem : item)));
    setSelectedItem(null); // Clear selected item after update
    setIsUpdateModalOpen(false); // Close modal after update
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${import.meta.env.VITE_API_URL}/social/${id}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setItems(items.filter(item => item.social_id!== id));
    } catch (error) {
      console.error(`Error deleting item with ID ${id}:`, error);
    }
  };

  return (
    <div className='w-full bg-[#1F2937] text-white min-h-screen p-7 '>
      <h1 className='text-5xl font-bold uppercase py-10 px-5'>social </h1>
      <Read items={items} onEdit={(item) => { setSelectedItem(item); setIsUpdateModalOpen(true); }} onDelete={handleDelete} />
      
      <button onClick={() => setIsCreateModalOpen(true)} className="rounded-full border-dashed border-white border hover:bg-slate-500 text-white p-2 mt-4">
        <img src="add.svg" alt="" />
      </button>

      <Modal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} className="animate__animated animate__fadeIn">
        <Create onCreate={handleCreate} />
      </Modal>

      {selectedItem && (
        <Modal isOpen={isUpdateModalOpen} onClose={() => setIsUpdateModalOpen(false)} className="animate__animated animate__backInRight">
          <Update item={selectedItem} onUpdate={handleUpdate} />
        </Modal>
      )}
    </div>
  );
};

export default Social;
