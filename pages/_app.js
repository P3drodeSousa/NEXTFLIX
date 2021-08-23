import GlobalStyles from "../styles/global";
import MovieState from "../context/movieState";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <MovieState>
        <Component {...pageProps} />
      </MovieState>
    </>
  );
}

export default MyApp;
