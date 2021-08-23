import { useState, useContext, useEffect } from "react";
import { IMG, MovieContainer } from "../components/Movie/style";
import MovieDetails from "../components/MovieDetails";
import Nav from "../components/Nav";
import { Container, H1, H2 } from "../styles/Container";
import selectMovie from "../hooks/selectedMovie";

import MovieContext from "../context/movieContext";

function Wishlist() {
  const movieContext = useContext(MovieContext);
  const { watchlist, loadWatchList } = movieContext;

  useEffect(() => {
    loadWatchList();
  }, []);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const { selectedMov, opened } = selectMovie(selectedMovie);

  const handleOnclick = (id) => {
    setSelectedMovie(id);
  };

  const close = () => {
    setSelectedMovie("");
  };

  return (
    <Container>
      <Nav />
      <H1>Your WatchList</H1>
      <MovieContainer wish>
        {!watchlist.length && <H2>You have added any content yet</H2>}
        {watchlist.map((movie, index) => {
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
      <MovieDetails drawer={opened} close={close} id={selectedMov} />
    </Container>
  );
}

export default Wishlist;
