import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeInformation } from '../api/spoonacularApi';
import { Typography, Container, Box, List, ListItem, ListItemText, Alert } from '@mui/material';

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        setError(null);
        const data = await getRecipeInformation(id);
        setRecipe(data);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
        setError('Failed to fetch recipe details. Please try again later.');
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (error) {
    return (
      <Container>
        <Alert severity="error" sx={{ mt: 4 }}>{error}</Alert>
      </Container>
    );
  }

  if (!recipe) return <Typography>Loading...</Typography>;

  return (
    <Container>
      <Typography variant="h2" gutterBottom sx={{ mt: 4 }}>
        {recipe.title}
      </Typography>
      <Box component="img" src={recipe.image} alt={recipe.title} sx={{ width: '100%', maxWidth: 600, mb: 4 }} />
      <Typography variant="h4" gutterBottom>Ingredients:</Typography>
      <List>
        {recipe.extendedIngredients.map((ingredient) => (
          <ListItem key={ingredient.id}>
            <ListItemText primary={ingredient.original} />
          </ListItem>
        ))}
      </List>
      <Typography variant="h4" gutterBottom>Instructions:</Typography>
      <Typography dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
    </Container>
  );
};

export default RecipeDetails;