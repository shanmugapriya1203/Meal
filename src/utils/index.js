
export const fetchRecipes = async ({ query }) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }
      const data = await response.json();
      console.log(data)
      return data.meals || []; 
    
    } catch (error) {
      console.error('Error fetching recipes:', error);
      throw error;
    }
  };
  
  export const fetchRecipeById = async (id) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch recipe by ID');
      }
      const data = await response.json();
      console.log(data);
      return data.meals ? data.meals[0] : null; 
    } catch (error) {
      console.error('Error fetching recipe by ID:', error);
      throw error;
    }
  };
  