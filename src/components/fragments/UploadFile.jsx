import React from 'react'

export const UploadFile = () => {
  return (
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
  )
}
