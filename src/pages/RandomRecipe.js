import React, { useState, useEffect } from 'react';
import { getRandomRecipes } from '../api/spoonacularApi';
import RecipeCard from '../components/RecipeCard';
import { Typography, Container, Button, Alert } from '@mui/material';

const RandomRecipe = () => {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  const fetchRandomRecipe = async () => {
    try {
      setError(null);
      const data = await getRandomRecipes({ number: 1 });
      setRecipe(data.recipes[0]);
    } catch (error) {
      console.error('Error fetching random recipe:', error);
      setError('Failed to fetch a random recipe. Please try again later.');
    }
  };

  useEffect(() => {
    fetchRandomRecipe();
  }, []);

  if (error) {
    return (
      <Container>
        <Alert severity="error" sx={{ mt: 4 }}>{error}</Alert>
        <Button onClick={fetchRandomRecipe} variant="contained" sx={{ mt: 2 }}>
          Try Again
        </Button>
      </Container>
    );
  }

  if (!recipe) return <Typography>Loading...</Typography>;

  return (
    <Container>
      <Typography variant="h2" gutterBottom sx={{ mt: 4 }}>
        Random Recipe
      </Typography>
      <RecipeCard recipe={recipe} />
      <Button onClick={fetchRandomRecipe} variant="contained" sx={{ mt: 2 }}>
        Get Another Random Recipe
      </Button>
    </Container>
  );
};

export default RandomRecipe;