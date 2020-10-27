import { useState, useEffect } from "react";
import { IMG, MovieContainer } from "../components/Movie/style";
import MovieDetails from "../components/MovieDetails";
import Nav from "../components/Nav";
import { Container, H1 } from "../styles/Container";
import selectMovie from "../utils/selectedMovie";
import useLocal from "../utils/useLocalStorage";

function Wishlist() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [watchlist, setwatchlist] = useState([]);

  const { selectedMov, opened } = selectMovie(selectedMovie);

  const [watchlisted, setWatchListed] = useLocal();

  const handleOnclick = (id) => {
    setSelectedMovie(id);
  };

  const close = () => {
    setSelectedMovie("");
  };

  return (
    <Container>
      <Nav />
      <H1 style={{ color: "white" }}>Your WatchList</H1>
      <MovieContainer wish>
        {watchlisted.reverse().map((movie, index) => {
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
