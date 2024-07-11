import React from 'react';
import { Link } from 'react-router-dom';

export const Href = ({ page, urls }) => {
  return (
    <Link to={urls} className="block px-4 py-2 mt-2 text-sm font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-600">
      {page}
    </Link>
  );
};
