const API_KEY = `?api_key=${process.env.API_KEY}&language=en-US`;
const BASE_URL = "https://api.themoviedb.org/3/movie/";

export const getMovieDetails = (id) =>
  fetch(`${process.env.BASE_URL}${id}${process.env.API_KEY}`);

export const getMovieVideo = (id) =>
  fetch(`${process.env.BASE_URL}${id}/videos${process.env.API_KEY}`);
