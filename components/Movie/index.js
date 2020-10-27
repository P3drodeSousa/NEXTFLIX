import { useState, useEffect } from "react";
import { H1 } from "../../styles/Container";
import useSearch from "../../utils/useSearch";
import { IMG, MovieContainer } from "./style";

function Movies({ selected }) {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const { movies, loading, error } = useSearch(query, pageNumber);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const {
        scrollTop,
        scrollHeight,
        clientHeight,
      } = document.documentElement;

      if (clientHeight + scrollTop >= scrollHeight - 1) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    });
  }, []);

  const handleOnclick = (id) => {
    selected(id);
  };

  return (
    <div>
      <H1>Most Popular Movies</H1>
      <MovieContainer>
        {movies.map((movie, index) => {
          return (
            <div key={index} onClick={() => handleOnclick(movie.id)}>
              <IMG
                src={
                  movie.poster_path === 0
                    ? "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Popcorn_Time_logo.png/220px-Popcorn_Time_logo.png"
                    : `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
                }
                alt={movie.original_title}
              />
            </div>
          );
        })}
      </MovieContainer>
    </div>
  );
}

export default Movies;
