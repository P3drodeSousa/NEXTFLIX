import { useState } from "react";
import { Header } from "../components/Header";
import Movies from "../components/Movie";
import MovieDetails from "../components/MovieDetails";
import Nav from "../components/Nav";
import Search from "../components/Search";
import { Container } from "../styles/Container";
import selectMovie from "../utils/selectedMovie";

export default function Home({ data }) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { selectedMov, opened } = selectMovie(selectedMovie);

  const setMovie = (id) => {
    setSelectedMovie(id);
  };

  const close = () => {
    setSelectedMovie("");
  };

  return (
    <Container>
      <MovieDetails drawer={opened} close={close} id={selectedMov} />
      <Nav />
      <Header data={data} selected={setMovie} />
      <Search />
      <Movies selected={setMovie} />
    </Container>
  );
}

export const getStaticProps = async (ctx) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const res = await data.json();
  const random = await Math.floor(Math.random() * (19 - 0) + 0);

  return {
    props: {
      data: res.results[random],
    },
  };
};
