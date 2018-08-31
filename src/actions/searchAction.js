import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.API_KEY;
console.log('url', url);

// export const FETCH_MOVIES = 'fetch_movies';

// export function getMovies() {
//   return (dispatch) => {
//     ('value', (snapshot) => {
//       dispatch({
//         type: FETCH_MOVIES,
//         payload:
//       });
//     });
//   };
// }

export function searchMovie(movieTitle) {
  const url = `https://www.omdbapi.com/?t${movieTitle}&apikey=${API_KEY}`;

  const promise = axios.get(url);

  return {
    type: 'SEARCH_CITY',
    payload: promise
  };
}
