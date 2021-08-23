export const getPopular = (pageNumber) =>
  fetch(
    `${process.env.BASE_URL}popular${process.env.API_KEY}&page=${pageNumber}`
  );
