import {
  alphabeticalOrder,
  findGamesOnlyGenres,
  findGamesOnlyRating,
  findGeners,
  findVideoGame,
  findVideoGameForId,
  findVideoGameForName,
  postSubmit,
} from "./actions-type";

const initialStore = {
  allGames: [],
  videoGames: [],
  name: [],
  id: [],
  database: [],
  genres: [],
  platforms: [],
  gamesFilterByGenre: [],
  gamesFilterByRating: [],
  order: [],
  post: [],
};

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case findVideoGame:
      return {
        ...state,
        videoGames: action.payload,
        allGames: action.payload,
      };
    case findVideoGameForName:
      return {
        ...state,
        videoGames: action.payload == null ? state.allGames : action.payload,
      };
    case findVideoGameForId:
      return {
        ...state,
        id: [action.payload],
      };
    case findGeners:
      return {
        ...state,
        videoGames: action.name == "Yes" ? action.payload : state.allGames,
      };
    case findGamesOnlyGenres:
      return {
        ...state,
        videoGames: action.payload.filter((e) => {
          for (let i = 0; i < e.genres.length; i++) {
            if (e.genres[i].includes(action.name)) {
              return e;
            }
          }
        }),
      };
    case findGamesOnlyRating:
      return {
        ...state,
        videoGames:
          action.descAsc === "Asc"
            ? action.payload.sort(function (a, b) {
                if (a.rating > b.rating) {
                  return 1;
                }
                if (a.rating < b.rating) {
                  return -1;
                }
                return 0;
              })
            : action.payload.sort(function (a, b) {
                if (a.rating < b.rating) {
                  return 1;
                }
                if (a.rating > b.rating) {
                  return -1;
                }
                return 0;
              }),
      };
    case alphabeticalOrder:
      return {
        ...state,
        videoGames:
          action.ZA === "A - Z"
            ? action.payload.sort(function (a, b) {
                if (a.name > b.name) {
                  return 1;
                }
                if (a.name < b.name) {
                  return -1;
                }
                return 0;
              })
            : action.payload.sort(function (a, b) {
                if (a.name < b.name) {
                  return 1;
                }
                if (a.name > b.name) {
                  return -1;
                }
                return 0;
              }),
      };
    case postSubmit:
      return {
        ...state,
        post: action.postgame,
      };

    default:
      return state;
  }
};

export default reducer;
