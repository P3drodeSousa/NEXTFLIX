import { useState, useEffect } from "react";
import { H1 } from "../../styles/Container";
import useSearch from "../../hooks/useSearch";
import Loading from "../Loading";

import { IMG, MovieContainer, SearchContainer } from "./style";

function Movies({ selected }) {
  const [pageNumber, setPageNumber] = useState(1);
  const [query, setQuery] = useState("");

  const { movies, loading, error, setMovies } = useSearch(query, pageNumber);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (clientHeight + scrollTop >= scrollHeight - 1) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    });
  }, []);

  const handleOnChange = (e) => {
    setQuery(e.target.value);
    setMovies([]);
    setPageNumber(1);
  };

  const handleOnclick = (id) => {
    selected(id);
  };

  return (
    <>
      <SearchContainer>
        <input
          type="text"
          placeholder="Search a movie ..."
          onChange={handleOnChange}
        />
      </SearchContainer>
      <section>
        {(query.length && (
          <H1>
            Search for <span>{query}</span>
          </H1>
        )) || <H1>Most Popular Movies</H1>}

        <MovieContainer>
          {movies.map((movie, index) => {
            return (
              <div key={index} onClick={() => handleOnclick(movie.id)}>
                <IMG
                  src={
                    !movie.poster_path
                      ? "https://cdn.iconscout.com/icon/premium/png-512-thumb/no-data-found-1965030-1662565.png"
                      : `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
                  }
                  alt={movie.original_title}
                />
              </div>
            );
          })}
          {loading && <Loading />}
        </MovieContainer>
      </section>
    </>
  );
}

export default Movies;
