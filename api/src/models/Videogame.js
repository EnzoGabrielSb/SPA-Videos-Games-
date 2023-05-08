const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("videogame", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING, //Cadena de letras.
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT, //Texto
      allowNull: false,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING), //Array de Strings.
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    releasedate: {
      type: DataTypes.DATEONLY,
    },
    rating: {
      type: DataTypes.FLOAT,
    },
    isCreatedInDataBase: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};
