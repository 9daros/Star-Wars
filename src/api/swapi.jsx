import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

export const getCharacters = () => api.get('people/');
export const getCharacterDetails = (id) => api.get(`people/${id}/`);
export const getStarships = (url) => axios.get(url);
export const getMovies = (urls) => Promise.all(urls.map(url => axios.get(url)));
