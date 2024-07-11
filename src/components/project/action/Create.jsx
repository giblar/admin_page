import React, { useState } from "react";
import axios from "axios";
import { INP } from "../../fragments/INP";

const Create = ({ onCreate }) => {
  const [item, setItem] = useState({
    NamaProject: "",
    LinkGithub: "",
    LinkDemo: "",
    Deskripsi: ""
  });
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (!item.NamaProject || !item.LinkGithub || !item.LinkDemo || !item.Deskripsi || !imageFile) {
      setError("Please fill in all fields.");
      return;
    }

    const token = localStorage.getItem("token"); // Get token from local storage
    if (!token) {
      setError("No authorization token found.");
      return;
    }

    const formData = new FormData();
    formData.append("NamaProject", item.NamaProject);
    formData.append("LinkGithub", item.LinkGithub);
    formData.append("LinkDemo", item.LinkDemo);
    formData.append("Deskripsi", item.Deskripsi);
    formData.append("Gambar", imageFile);

    try {
      const response = await axios.post(`${apiUrl}/project`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      });
      onCreate(response.data.data);
      setItem({ NamaProject: "", LinkGithub: "", LinkDemo: "", Deskripsi: "" });
      setImageFile(null);
      setError("");
    } catch (error) {
      console.error("Error creating item:", error);
      setError("Error creating item, please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 w-full flex flex-col">
      <div className="w-full">
        <INP
          placeholder="Nama Project"
          value={item.NamaProject}
          onChange={(e) => setItem({ ...item, NamaProject: e.target.value })}
        />
        <INP
          placeholder="Link Github"
          value={item.LinkGithub}
          onChange={(e) => setItem({ ...item, LinkGithub: e.target.value })}
        />
        <INP
          placeholder="Link Demo"
          value={item.LinkDemo}
          onChange={(e) => setItem({ ...item, LinkDemo: e.target.value })}
        />
        <INP
          placeholder="Deskripsi"
          value={item.Deskripsi}
          onChange={(e) => setItem({ ...item, Deskripsi: e.target.value })}
        />
        {/* Custom file upload */}
        <div className="relative flex mt-2">
          <label
            htmlFor="fileInput"
            className="cursor-pointer flex flex-col items-center justify-center border-dotted border-2 border-sky-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md"
          >
            <img src="file.svg" alt="Upload File" /> Upload File
          </label>
          <input
            id="fileInput"
            type="file"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="hidden"
          />
        </div>
      </div>

      <button type="submit" className="bg-sky-900 rounded-lg text-white p-2 h-10 mt-2">
        Create
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
};

export default Create;
