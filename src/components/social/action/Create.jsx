import React, { useState } from "react";
import axios from "axios";
import { INP } from "../../fragments/INP";

const Create = ({ onCreate }) => {
  const [item, setItem] = useState({ email: "", github: "", whatsapp: "", linkedin: "", instagram: "", spotify: "" });
  const [error, setError] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi bahwa semua field diisi
    if (!item.email || !item.github || !item.whatsapp || !item.linkedin || !item.instagram || !item.spotify) {
      setError("Please fill in all fields.");
      return;
    }

    const token = localStorage.getItem("token"); // Mengambil token dari local storage
    if (!token) {
      setError("No authorization token found.");
      return;
    }

    const formData = new FormData();
    formData.append('email', item.email);
    formData.append('github', item.github);
    formData.append('whatsapp', item.whatsapp);
    formData.append('linkedin', item.linkedin);
    formData.append('instagram', item.instagram);
    formData.append('spotify', item.spotify);

    try {
      const response = await axios.post(`${apiUrl}/social`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      onCreate(response.data.data);
      setItem({ email: "", github: "", whatsapp: "", linkedin: "", instagram: "", spotify: "" });
      setError("");
    } catch (error) {
      console.error("Error creating item:", error);
      setError("Error creating item, please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 w-full flex items-end">
      <div className="w-full">
        <INP
          placeholder="Email"
          value={item.email}
          onChange={(e) => setItem({ ...item, email: e.target.value })}
        />
        <INP
          placeholder="GitHub"
          value={item.github}
          onChange={(e) => setItem({ ...item, github: e.target.value })}
        />
        <INP
          placeholder="WhatsApp"
          value={item.whatsapp}
          onChange={(e) => setItem({ ...item, whatsapp: e.target.value })}
        />
        <INP
          placeholder="LinkedIn"
          value={item.linkedin}
          onChange={(e) => setItem({ ...item, linkedin: e.target.value })}
        />
        <INP
          placeholder="Instagram"
          value={item.instagram}
          onChange={(e) => setItem({ ...item, instagram: e.target.value })}
        />
        <INP
          placeholder="Spotify"
          value={item.spotify}
          onChange={(e) => setItem({ ...item, spotify: e.target.value })}
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
