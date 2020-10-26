import { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { Drawer, Icon } from "./style";

import Details from "./Details";

function MovieDetails({ drawer, id, close }) {
  const [video, setVideo] = useState("");
  const [details, setDetails] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!id) return;
    setReady(false);
    setVideo("");
    setDetails("");

    const fetchData = async (id) => {
      const movieDetails = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=65551b4be6ad5af3bcff0b9239f78903&language=en-US`
      );
      const detailsData = await movieDetails.json();
      setDetails(detailsData);

      const movieVideo = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=65551b4be6ad5af3bcff0b9239f78903&language=en-US`
      );

      const videoData = await movieVideo.json();
      setVideo(videoData.results[0].key);
    };

    fetchData(id);
  }, [id]);

  const closeDrawer = () => {
    setReady(false);
    close();
  };

  return (
    <Drawer drawer={drawer}>
      <div>
        <Icon onClick={closeDrawer} />
      </div>

      <div style={{ position: "relative" }}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${video}`}
          playing={true}
          onStart={() => setReady(true)}
        />

        {!ready && (
          <img
            src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`}
            alt="IMAGE"
            height="360px"
            width="640px"
            style={{ position: "absolute", top: 0, zIndex: 9999 }}
          />
        )}
      </div>

      <div>{details && <Details details={details} />}</div>
    </Drawer>
  );
}

export default MovieDetails;
