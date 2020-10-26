import { useState, useEffect } from "react";

export default function useSearch(query, pageNumber) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      let data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=65551b4be6ad5af3bcff0b9239f78903&language=en-US&page=${pageNumber}`
      );
      let res = await data.json();
      setMovies((prevMovies) => {
        return [...new Set([...prevMovies, ...res.results.map((x) => x)])];
      });
    };

    fetchData();

    setLoading(false);
  }, [pageNumber, query]);

  return { loading, error, movies };
}
