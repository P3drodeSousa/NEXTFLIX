export const searchMovie = (query, pageNumber) =>
  fetch(
    `https://api.themoviedb.org/3/search/movie${process.env.API_KEY}&query=${query}&page=${pageNumber}`
  );
