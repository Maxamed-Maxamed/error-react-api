import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} Food Recipes Website
      </Typography>
    </Box>
  );
};

export default Footer;