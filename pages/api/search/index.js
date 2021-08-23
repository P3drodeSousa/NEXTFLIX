import { getPopular } from "../../../lib/movies/getPopular";

export default async function handler(req, res) {
  const popular = await getPopular(req.body);
  const movies = await popular.json();

  return res.status(200).json({ results: movies.results });
}
