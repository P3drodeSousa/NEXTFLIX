import { AiFillStar } from "react-icons/Ai";
import { Container, Flex, Genre, H2, Review, P, Info, Button } from "./style";

function Details({ details }) {
  const convertMinsToHrsMins = (mins) => {
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    m = m < 10 ? "0" + m : m;
    return `${h}h${m}min`;
  };

  const addToWatchList = (item) => {
    let items;
    if (localStorage.getItem("watchlist") === null) {
      items = [];
    } else {
      items = JSON.parse(localStorage.getItem("watchlist"));
    }
    items.push(item);
    localStorage.setItem("watchlist", JSON.stringify(items));
  };

  // A FINIR
  const removeLocalTodos = (item) => {
    let movies;
    if (localStorage.getItem("watchlist") === null) {
      movies = [];
    } else {
      movies = JSON.parse(localStorage.getItem("watchlist"));
    }
    // movies.splice(movies.indexOf(todoIndex), 1);
    // localStorage.setItem("movies", JSON.stringify(movies));
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
            <AiFillStar color="#E4BB24" size={20} />
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

      <Button onClick={() => addToWatchList(details)}>ADD TO WHATCHLIST</Button>
    </Container>
  );
}

export default Details;
