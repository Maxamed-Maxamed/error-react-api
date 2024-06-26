import React, { useState } from 'react';
import { searchRecipes } from '../api/spoonacularApi';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';
import { Grid, Typography, Container, Alert } from '@mui/material';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    try {
      setError(null);
      const data = await searchRecipes(query);
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error searching recipes:', error);
      setError('Failed to search recipes. Please try again later.');
    }
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom sx={{ mt: 4 }}>
        Search Recipes
      </Typography>
      <SearchBar onSearch={handleSearch} />
      {error && <Alert severity="error" sx={{ mt: 2, mb: 2 }}>{error}</Alert>}
      <Grid container spacing={3}>
        {searchResults.map((recipe) => (
          <Grid item xs={12} sm={6} md={3} key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Search;