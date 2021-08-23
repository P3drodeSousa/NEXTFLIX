import { searchMovie } from "../../../lib/movies/searchMovie";

export default async function handler(req, res) {
  const { query } = req.query;

  const movie = await searchMovie(query, req.body);
  const movies = await movie.json();

  return res.status(200).json({ results: movies.results });
}
