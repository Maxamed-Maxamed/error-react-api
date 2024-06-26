import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Search from './pages/Search';
import RecipeDetails from './pages/RecipeDetails';
import RandomRecipe from './pages/RandomRecipe';
import { CssBaseline, Container } from '@mui/material';
import './App.css';
function App() {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Container component="main" sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/random" element={<RandomRecipe />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;