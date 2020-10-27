import { useState, useEffect } from "react";

import Nav from "../components/Nav";
import { Container } from "../styles/Container";
import selectMovie from "../utils/selectedMovie";

function Wishlist() {
  const [movies, setMovies] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { selectMov } = selectMovie(selectedMovie);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("watchlist"));
    setMovies(items);
  }, []);

  return (
    <Container>
      <Nav />
      <h1 style={{ color: "white" }}>Pedro</h1>
    </Container>
  );
}

export default Wishlist;
