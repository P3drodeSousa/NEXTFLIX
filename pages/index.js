import { Header } from "../components/Header";
import Nav from "../components/Nav";
import Search from "../components/search";
import { Container } from "../styles/Container";

export default function Home({ data }) {
  return (
    <Container>
      <Nav />
      <Header data={data} />
      <Search />
      <h1>Hello World</h1>
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
