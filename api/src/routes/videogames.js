const { Router } = require("express");
const { Genre, Videogame, videogame_genre } = require("../db");
const { v4: uuidv4 } = require("uuid");
const {
  getAllVideoGamesInfo,
  getApiById,
  getInfoByName,
} = require("./controllers/videogames");

const videogamesRoutes = Router();

videogamesRoutes.get("/", async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const nameVideoGame = await getInfoByName(name);
      res.send(nameVideoGame);
    } else {
      const allVideoGames = await getAllVideoGamesInfo();
      res.status(200).json(allVideoGames);
    }
  } catch (error) {
    res.status(404).send("Ha ocurrido un error al cargar los VideoGames.");
  }
});

videogamesRoutes.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (!Number(id)) {
      let juegoId = await videogamesRoutes.findOne({
        where: {
          id,
        },
        include: {
          model: Genre,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });
      return res.json(juegoId);
    }
    let gameId = await getApiById(id);
    res.status(200).json(gameId);
  } catch (error) {
    res.status(404).send("Id no encontrado.");
  }
  {
    {
    }
  }
});

videogamesRoutes.post("/", async (req, res) => {
  const { name, description, released, image, rating, platforms, genre } =
    req.body;

  try {
    let genreDB = await Genre.findAll({
      where: { name: genre },
    });
    if (genreDB.length === 0) {
      return res.json({ error: "Gener not found" });
    }

    let id = uuidv4();

    let videoGameCreate = await Videogame.create({
      id: id,
      name,
      description,
      released,
      image,
      rating,
      platforms: [platforms],
    });

    videoGameCreate.addGenre(genreDB);
    res.send("Juego creado!");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = videogamesRoutes;
