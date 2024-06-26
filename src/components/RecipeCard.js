import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={recipe.image}
        alt={recipe.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ready in {recipe.readyInMinutes} minutes
        </Typography>
        <Button component={Link} to={`/recipe/${recipe.id}`} variant="contained" sx={{ mt: 2 }}>
          View Recipe
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;