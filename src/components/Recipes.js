import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import { fetchRecipes } from '../utils';

const Recipes = () => {
  const [foodName, setFoodName] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const initialRecipesCount = 20;

  const handleSearch = async () => {
    if (foodName.trim() !== '') {
      setLoading(true);
      try {
        const data = await fetchRecipes({ query: foodName });
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Enter a food name to search');
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchRecipes({ query: '', limit: initialRecipesCount })
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching initial recipes:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (foodName.trim() !== '') {
      handleSearch();
    } else {
      setRecipes([]);
    }
  }, [foodName]);

  return (
    <div className="w-full p-5">
      <div className="flex flex-col md:flex-row items-center justify-center mb-8">
        <div className="relative flex w-full md:w-64">
          <input
            type="text"
            placeholder="Enter the dish name"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
            className="border rounded-md p-2 pr-8 w-full"
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mt-2 md:mt-0 md:ml-2"
        >
          Search
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recipes.map((recipe, index) => (
            <Card key={index} recipe={recipe} className="large-card" />
          ))}
        </div>
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default Recipes;
