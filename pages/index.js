import { Header } from "../components/Header";

export default function Home({ data }) {
  return (
    <div>
      <Header data={data} />
      <h1>Hello World</h1>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=65551b4be6ad5af3bcff0b9239f78903&language=en-US&page=1`
  );
  const res = await data.json();

  return {
    props: {
      data: res,
    },
  };
};
