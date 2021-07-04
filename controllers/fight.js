const Fight = require("../models/fightModel");

const get_all_fights = (req, res) => {
  Fight.find()
    .populate("firstFighter")
    .populate("secondFighter")
    .populate("winner")
    .then((fights) => {
      replacePokemonIdByObject(fights, req.pokedex);
      return res.json(fights);
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).send(error.message);
    });
};

const get_fights_by_trainer = (req, res) => {
  const { id } = req.params;
  Fight.find({ $or: [{ firstFighter: id }, { secondFighter: id }] })
    .populate("firstFighter")
    .populate("secondFighter")
    .populate("winner")
    .then((fights) => {
      replacePokemonIdByObject(fights, req.pokedex);
      return res.json(fights);
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).send(error.message);
    });
};
const create_fight_result = async (req, res) => {
  try {
    const createdFight = await Fight.create({ ...req.body });
    return res.json(createdFight);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Failed to create the trainer.");
  }
};

module.exports = {
  get_all_fights,
  get_fights_by_trainer,
  create_fight_result,
};
function replacePokemonIdByObject(fights, pokedex) {
  fights.forEach((fight) => {
    fight.pokemonFirstFighter.forEach((pokemon, index) => {
      fight.pokemonFirstFighter[index] = pokedex.find(
        (currentPokemon) => currentPokemon.id === pokemon
      );
    });
    fight.pokemonSecondFighter.forEach((pokemon, index) => {
      fight.pokemonSecondFighter[index] = pokedex.find(
        (currentPokemon) => currentPokemon.id === pokemon
      );
    });
  });
}
