import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
      <TextField
        variant="outlined"
        placeholder="Search recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        fullWidth
        sx={{ mr: 2 }}
      />
      <Button type="submit" variant="contained">Search</Button>
    </Box>
  );
};

export default SearchBar;