const pokedex = require("../data/pokedex.json");

exports.readPokedexData = (req, res, next) => {
  req.pokedex = pokedex;
  next();
};
