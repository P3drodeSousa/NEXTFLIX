import { useState, useEffect } from "react";

export default function useSearch(query, pageNumber) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    const search = async (query, pageNumber) => {
      const data = await fetch(`/api/search/${query}`, {
        method: "POST",
        body: pageNumber,
      });

      const res = await data.json();
      setMovies((prevMovies) => {
        return [...new Set([...prevMovies, ...res.results.map((x) => x)])];
      });
      setLoading(false);
    };

    if (query.length >= 1) {
      search(query, pageNumber);
      return;
    }

    const getPopular = async (pageNumber) => {
      const data = await fetch(`/api/search`, {
        method: "POST",
        body: pageNumber,
      });
      const res = await data.json();
      setMovies((prevMovies) => {
        return [...new Set([...prevMovies, ...res.results.map((x) => x)])];
      });
      setLoading(false);
    };

    getPopular(pageNumber);
  }, [pageNumber, query]);

  return { loading, error, movies, setMovies };
}
