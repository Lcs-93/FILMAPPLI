import axios from 'axios';

const API_KEY = '';
const API_URL = 'https://api.themoviedb.org/3';

export const getUpcomingMovies = async () => {
  try {
    const response = await axios.get(`${API_URL}/movie/upcoming`, {
      params: {
        api_key: API_KEY,
        language: 'fr-FR',
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Erreur lors de la récupération des films à venir', error);
    return [];
  }
};
