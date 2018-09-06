import axios from 'axios';
import dotenv from 'dotenv';
export const SEARCH_MOVIE = 'search_movie';

dotenv.config();

const API_KEY = process.env.API_KEY;

export function searchMovie(movieTitle) {
  const url = `https://www.omdbapi.com/?t${movieTitle}&apikey=${API_KEY}`;

  const promise = axios.get(url);

  return {
    type: 'SEARCH_MOVIE',
    payload: promise,
  };
}
