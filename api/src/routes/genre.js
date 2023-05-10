const { Router } = require("express");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Genre } = require("../db");

const genresRoutes = Router();

genresRoutes.get("/", async (req, res) => {
  try {
    let genres = await axios.get(
      `https://api.rawg.io/api/genres?key=${API_KEY}`
    );
    genres = genres.data.results;

    const mapGeneros = genres.map((e) => {
      return {
        id: e.id,
        name: e.name,
      };
    });
    mapGeneros.forEach((e) => {
      Genre.findOrCreate({
        where: {
          name: e.name,
        },
      });
    });

    res.json(mapGeneros);
  } catch (e) {
    res.send(e);
  }
});

module.exports = genresRoutes;
