const express = require("express");
const router = express.Router();
const PokeController = require("../controllers/pokemon");
const { extractPokemon } = require("../middleware/pokemonExtractor");

// GET /pokemon/
router.get("/", PokeController.get_all_pokedex);

// GET /pokemon/:id
router.get("/:id", extractPokemon, PokeController.get_pokedex_by_id);

// GET /pokement/:id/:info
router.get("/:id/:info", extractPokemon, PokeController.get_info_of_pokedex);

module.exports = router;
