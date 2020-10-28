import React, { useReducer } from "react";
import MovieContext from "./movieContext";
import movieReducer from "./movieReducer";
import { LOAD_MOVIES, ADD_MOVIES, DELETE_MOVIES } from "./types";

const MovieState = (props) => {
  const initialState = {
    watchlist: [],
  };

  const [state, dispatch] = useReducer(movieReducer, initialState);

  // Load User
  const loadWatchList = async () => {
    try {
      const items = await JSON.parse(localStorage.getItem("watchlist"));
      dispatch({
        type: LOAD_MOVIES,
        payload: items,
      });
    } catch (err) {}
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

    dispatch({
      type: ADD_MOVIES,
      payload: items,
    });
  };

  const removeWatchList = (id) => {
    let movies;

    if (localStorage.getItem("watchlist") === null) {
      movies = [];
    } else {
      movies = JSON.parse(localStorage.getItem("watchlist"));
    }

    const indexItem = state.watchlist.findIndex((el) => el.id === id);

    movies.splice(indexItem, 1);
    localStorage.setItem("watchlist", JSON.stringify(movies));

    dispatch({
      type: DELETE_MOVIES,
      payload: movies,
    });
  };

  return (
    <MovieContext.Provider
      value={{
        watchlist: state.watchlist,
        addToWatchList,
        loadWatchList,
        removeWatchList,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
