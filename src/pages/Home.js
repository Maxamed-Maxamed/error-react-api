import React, { useState, useEffect } from 'react';
import { getRandomRecipes } from '../api/spoonacularApi';
import RecipeCard from '../components/RecipeCard';
import { Grid, Typography, Container, Alert } from '@mui/material';

const Home = () => {
  const [featuredRecipes, setFeaturedRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedRecipes = async () => {
      try {
        const data = await getRandomRecipes({ number: 4 });
        setFeaturedRecipes(data.recipes);
      } catch (error) {
        console.error('Error fetching featured recipes:', error);
        setError('Failed to fetch featured recipes. Please try again later.');
      }
    };

    fetchFeaturedRecipes();
  }, []);

  if (error) {
    return (
      <Container>
        <Alert severity="error" sx={{ mt: 4 }}>{error}</Alert>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h2" gutterBottom sx={{ mt: 4 }}>
        Featured Recipes
      </Typography>
      <Grid container spacing={3}>
        {featuredRecipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={3} key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;