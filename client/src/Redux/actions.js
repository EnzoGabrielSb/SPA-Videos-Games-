import axios from "axios";
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

export const getAllGames = () => {
  return async function (dispatch) {
    let allGames = await axios("http://localhost:3001/videogames");
    return dispatch({
      type: findVideoGame,
      payload: allGames.data,
    });
  };
};

export const findByName = (name) => {
  return async function (dispatch) {
    let gameByName = await axios(
      `http://localhost:3001/videogames?name=${name}`
    );
    return dispatch({
      type: findVideoGameForName,
      payload: gameByName.data,
    });
  };
};

export const findById = (id) => {
  return async function (dispatch) {
    let gameById = await axios(`http://localhost:3001/videogames/${id}`);
    return dispatch({
      type: findVideoGameForId,
      payload: gameById.data,
    });
  };
};

export const getGenres = () => {
  return async function (dispatch) {
    let gamesDB = await axios("http://localhost:3001/genre");
    return dispatch({
      type: findGeners,
      payload: gamesDB.data,
    });
  };
};

export const gamesByGenre = (name) => {
  return async function (dispatch) {
    let gamesByGenres = await axios("http://localhost:3001/videogames");
    return dispatch({
      type: findGamesOnlyGenres,
      payload: gamesByGenres.data,
      name: name,
    });
  };
};

export const gamesByRating = (descAsc) => {
  return async function (dispatch) {
    let gamesByRating = await axios("http://localhost:3001/videogames");
    return dispatch({
      type: findGamesOnlyRating,
      payload: gamesByRating.data,
      descAsc: descAsc,
    });
  };
};

export const orderAlphabetic = (ZA) => {
  return async function (dispatch) {
    let games = await axios("http://localhost:3001/videogames");
    return dispatch({
      type: alphabeticalOrder,
      payload: games.data,
      ZA: ZA,
    });
  };
};

export const submitPost = (newGame) => {
  return async function () {
    let postgame = await axios.post();
    return {
      type: postSubmit,
      postgame: postgame.data,
    };
  };
};
