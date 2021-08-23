import { useEffect, useContext } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Flex, Genre, H2, Review, P, Info, Button } from "./style";
import MovieContext from "../../../context/movieContext";

function Details({ details }) {
  const movieContext = useContext(MovieContext);
  const { watchlist, loadWatchList, addToWatchList, removeWatchList } =
    movieContext;

  useEffect(() => {
    loadWatchList();
  }, []);

  const convertMinsToHrsMins = (mins) => {
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    m = m < 10 ? "0" + m : m;
    return `${h}h${m}min`;
  };

  const isListed = (id) => {
    if (!watchlist.length) return;
    return watchlist.some((el) => el.id === id);
  };

  return (
    <Container>
      <Flex>
        <div style={{ flex: 1 }}>
          {details.genres.map(({ id, name }, i) => {
            return (
              <Genre key={id}>
                {name} {details.genres.length !== i + 1 ? "|" : ""}
              </Genre>
            );
          })}
        </div>
        <Flex>
          <div>
            <FaStar color="#E4BB24" size={20} />
          </div>
          <Flex>
            <Review>{details.vote_average} / 10</Review>
          </Flex>
        </Flex>
      </Flex>

      <H2>{details.title}</H2>

      <P>{details.overview}</P>

      <Info>
        <span style={{ marginRight: "10px" }}>
          {details.release_date.split("-")[0]}{" "}
        </span>

        <span>{convertMinsToHrsMins(details.runtime)}</span>
      </Info>
      {isListed(details.id) ? (
        <Button remove onClick={() => removeWatchList(details.id)}>
          REMOVE FROM WHATCHLIST
        </Button>
      ) : (
        <Button onClick={() => addToWatchList(details)}>
          ADD TO WHATCHLIST
        </Button>
      )}
    </Container>
  );
}

export default Details;
