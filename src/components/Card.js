import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ recipe, className }) => {
  const {
    idMeal,
    strMeal,
    strMealThumb,
    strCategory,
    strArea,
    strYoutube,
  } = recipe;

  return (
    <div className={`w-50 h-70 bg-white shadow-lg rounded-lg overflow-hidden ${className}`}>
      <Link to={`/recipe/${idMeal}`} style={{ textDecoration: 'none' }}>
        <img src={strMealThumb} alt={strMeal} className="w-full h-40 object-cover" />
      </Link>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{strMeal}</h2>
        <div className="mt-2">
          <label className="text-gray-600 font-semibold">Category:</label>
          <span className="text-gray-500 text-sm ml-2">{strCategory}</span>
        </div>
        <div className="mt-2">
          <label className="text-gray-600 font-semibold">Area:</label>
          <span className="text-gray-500 text-sm ml-2">{strArea}</span>
        </div>
        <div className="flex justify-between items-center">
          {strYoutube && (
            <a
              href={strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md text-sm inline-block hover:bg-green-600"
            >
              Watch Video
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
