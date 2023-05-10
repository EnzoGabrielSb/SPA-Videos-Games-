const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRoutes = require("./videogames");
const genresRoutes = require("./genre");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames", videogamesRoutes);
router.use("/genre", genresRoutes);

module.exports = router;
