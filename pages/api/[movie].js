import { getMovieDetails, getMovieVideo } from "../../lib/movies/getDetails";

export default async function handler(req, res) {
  const { movie } = req.query;

  const movieDetails = await getMovieDetails(movie);
  const movieVideo = await getMovieVideo(movie);

  const movieResults = await movieDetails.json();
  const movieVideoResults = await movieVideo.json();

  res.status(200).json({
    details: movieResults,
    video: movieVideoResults.results[0].key,
  });
}
