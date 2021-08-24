import { useState, useCallback, useRef } from "react";
import selectMovie from "../hooks/selectedMovie";
import Head from "next/head";
import { Container } from "../styles/Container";
import { Header } from "../components/Header";
import Movies from "../components/Movie";
import MovieDetails from "../components/MovieDetails";
import ScrollTopArrow from "../components/ScrollTopArrow";
import Nav from "../components/Nav";

export default function Home({ data }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { selectedMov, opened } = selectMovie(selectedMovie);
  const movieRef = useRef(null);

  const setMovie = (id) => {
    changeReady();
    setSelectedMovie(id);
  };

  const close = () => {
    setSelectedMovie("");
  };

  const changeReady = useCallback(() => {
    movieRef.current.changeReady();
  }, []);

  return (
    <Container>
      <Head>
        <title>NEXTFLIX</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <Header data={data} selected={setMovie} />
      <MovieDetails
        ref={movieRef}
        drawer={opened}
        close={close}
        id={selectedMov}
      />
    
      <Movies selected={setMovie} />
      <ScrollTopArrow  />
    </Container>
  );
}

export const getStaticProps = async (ctx) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API}&language=en-US&page=1`
  );
  const res = await data.json();
  const random = await Math.floor(Math.random() * (19 - 0) + 0);

  return {
    props: {
      data: res.results[random],
    },
    revalidate: 60 
  };
};
