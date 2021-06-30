const fs = require("fs");
const path = require("path");

exports.extractPokemon = (req, res, next) => {
  const { id } = req.params;
  const pokemon = JSON.parse(req.pokedex).find((pokemen) => pokemen.id == id);
  if (!pokemon) {
    return res
      .status(404)
      .send("Could not find the pokemon with the id: " + id);
  }
  req.pokemon = pokemon;
  next();
};
