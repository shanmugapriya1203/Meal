import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipeById } from '../utils';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const data = await fetchRecipeById(id);
        setRecipe(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  const {
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strYoutube,
  
  } = recipe;

  return (
    <div className="border rounded-lg shadow-lg ml-9 p-4">
      <div className="flex justify-center items-center">
        <div className="flex flex-col">
          <h1 className="text-4xl font-semibold text-center mt-20 ">{strMeal}</h1>
          <p className="mt-4 ml-7 text-lg"><strong>Category:</strong> {strCategory}</p>
          <p className="ml-7 text-lg"><strong>Area:</strong> {strArea}</p>
          <p className="ml-7 text-lg"><strong>Instructions:</strong> {strInstructions}</p>
        </div>
        <img src={strMealThumb} alt={strMeal} className="my-2 max-w-xs ml-7" />
      </div>
      {strYoutube && (
        <div className="text-center mt-4">
          <a href={strYoutube} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 rounded-md text-sm inline-block hover:bg-green-600">
            Watch Video
          </a>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
