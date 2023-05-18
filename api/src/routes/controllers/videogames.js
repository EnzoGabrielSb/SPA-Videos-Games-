const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Genre, Videogame, videogame_genre } = require("../../db");

// OBTENGO TODOS LOS VIDEOJUEGOS

const getAPIinfo = async () => {
  let gamesPageOne = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);

  let gamesPageTwo = axios.get(
    `https://api.rawg.io/api/games?key=${API_KEY}&page=2`
  );

  let gamesPageThree = axios.get(
    `https://api.rawg.io/api/games?key=${API_KEY}&page=3`
  );

  let gamesPageFour = axios.get(
    `https://api.rawg.io/api/games?key=${API_KEY}&page=4`
  );

  let gamesPageFive = axios.get(
    `https://api.rawg.io/api/games?key=${API_KEY}&page=5`
  );

  let date = await Promise.all([
    gamesPageOne,
    gamesPageTwo,
    gamesPageThree,
    gamesPageFour,
    gamesPageFive,
  ]);

  gamesPageOne = date[0].data.results;
  gamesPageTwo = date[1].data.results;
  gamesPageThree = date[2].data.results;
  gamesPageFour = date[3].data.results;
  gamesPageFive = date[4].data.results;

  let games = gamesPageOne
    .concat(gamesPageTwo)
    .concat(gamesPageThree)
    .concat(gamesPageFour)
    .concat(gamesPageFive);

  games = games.map((game) => {
    return {
      id: game.id,
      name: game.name,
      platforms: game.platforms.map((e) => e.platform.name),
      image: game.background_image,
      releasedate: game.released,
      rating: game.rating,
      genres: game.genres.map((e) => e.name),
    };
  });

  return games;
};

const getDBInfo = async () => {
  return await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllVideoGamesInfo = async () => {
  const videogamesAPI = await getAPIinfo();
  const videoGamesDB = await getDBInfo();

  const allVideoGamesInfo = videogamesAPI.concat(videoGamesDB);

  return allVideoGamesInfo;
};

// OBTENGO UN VIDEO JUEGO POR 'idVideogame'

const getApiById = async (id) => {
  let game = await axios.get(
    `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
  );
  let response = game.data;

  return {
    id: response.id,
    name: response.name,
    genres: response.genres?.map((e) => e.name),
    platforms: response.platforms?.map((e) => e.platform.name),
    released: response.released,
    img: response.background_image,
    rating: response.rating,
    description: response.description_raw,
  };
};

// OBTENGO UN VIDEO JUEGO POR 'name?='

const getApiByName = async (name) => {
  const resAxios = await axios.get(
    `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
  );
  const { results } = resAxios.data;
  let response = results.map((result) => {
    return {
      id: result.id,
      name: result.name,
      released: result.released,
      image: result.background_image,
      rating: result.rating,
      platforms: result.platforms.map((e) => e.platform.name),
      genres: result.genres.map((e) => e.name),
    };
  });
  return response;
};

const getDbByName = async (name) => {
  const DBInfo = await getDBInfo();
  const filtByName = DBInfo.filter((games) => games.name.includes(name));
  return filtByName;
};

const getInfoByName = async (name) => {
  const apiName = await getApiByName(name);
  const DB_name = await getDbByName(name);
  const infoName = apiName.concat(DB_name);
  return infoName;
};

// Postear un videjuego POST.

module.exports = {
  getAllVideoGamesInfo,
  getAPIinfo,
  getApiById,
  getInfoByName,
  getApiByName,
};
