import { LOAD_MOVIES, ADD_MOVIES, DELETE_MOVIES } from "./types";

export default (state, action) => {
  switch (action.type) {
    case LOAD_MOVIES:
      return {
        ...state,
        watchlist: action.payload,
      };
    case ADD_MOVIES:
      return {
        ...state,
        watchlist: action.payload,
      };
    case DELETE_MOVIES:
      console.log(action.payload);
      return {
        ...state,
        watchlist: action.payload,
      };

    default:
      return state;
  }
};
