import '../../env';
import axios from 'axios';
export const SEARCH_MOVIE = 'search_movie';

require('dotenv').config();

const API_KEY = process.env.REACT_APP_API_KEY;

export function searchMovieSubmit(name) {
  const url = `https://www.omdbapi.com/?t${name}&apikey=${API_KEY}`;

  const promise = axios.get(url);

  return {
    type: 'SEARCH_MOVIE',
    payload: promise,
  };
}
