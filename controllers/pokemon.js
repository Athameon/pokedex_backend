const { getPokement } = require("../middleware/pokemonExtractor");

exports.get_all_pokedex = (req, res, next) => {
  res.send(req.pokedex);
};

exports.get_pokedex_by_id = (req, res, next) => {
  res.send(req.pokemon);
};

exports.get_info_of_pokedex = (req, res, next) => {
  const { info } = req.params;
  try {
    const infoObject = req.pokemon[info]; //findById(req.pokemon, info);
    if (!infoObject) {
      res
        .status(404)
        .send(
          `The property '${info}' does not exist on the pokement object:\n` +
            JSON.stringify(req.pokemon)
        );
    }
    res.send(infoObject);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(
        `Failed to get the property '${info}' from the object:\n` +
          JSON.stringify(req.pokemon)
      );
  }
};

function findById(o, id) {
  //Early return
  if (o.id === id) {
    return o;
  }
  let result, p;
  for (p in o) {
    console.log("p", p);
    if (p == id) {
      return o[p];
    }
    if (o.hasOwnProperty(p) && typeof o[p] === "object") {
      result = findById(o[p], id);
      if (result) {
        if (typeof result === "number") {
          return result.toString();
        } else {
          return result;
        }
      }
    }
  }
  return result;
}
