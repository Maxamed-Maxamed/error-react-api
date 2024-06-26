import axios from 'axios';


const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com/recipes';

const api = axios.create({
  baseURL: BASE_URL,
  params: { apiKey: API_KEY },
});




export const searchRecipes = async (query, params = {}) => {
  try {
    const response = await api.get('/complexSearch', { params: { query, ...params } });
    return response.data;
  } catch (error) {
    console.error('Error searching recipes:', error);
    throw error;
  }
};

export const getRecipesByNutrients = async (params) => {
  try {
    const response = await api.get('/findByNutrients', { params });
    return response.data;
  } catch (error) {
    console.error('Error getting recipes by nutrients:', error);
    throw error;
  }
};

export const getRecipeInformation = async (id) => {
  try {
    const response = await api.get(`/${id}/information`);
    return response.data;
  } catch (error) {
    console.error('Error getting recipe information:', error);
    throw error;
  }
};

export const getRandomRecipes = async (params = {}) => {
  try {
    const response = await api.get('/random', { params });
    return response.data;
  } catch (error) {
    console.error('Error getting random recipes:', error);
    throw error;
  }
};