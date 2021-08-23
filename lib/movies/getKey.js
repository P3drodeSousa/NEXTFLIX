export const getKey = (index, previousPageData, repo) => {
  if (repo) {
    return `https://api.themoviedb.org/3/search/movie?api_key=${
      process.env.API_KEY
    }&query=${repo}&language=en-US&page=${index + 1}`;
  }

  return `https://api.themoviedb.org/3/movie/popular?api_key=${
    process.env.API_KEY
  }&language=en-US&page=${index + 1}`;
};
