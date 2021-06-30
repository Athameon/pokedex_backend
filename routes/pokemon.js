const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  fs.readFile(
    path.join(__dirname, "../data/pokedex.json"),
    "utf-8",
    (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Failed to read the pokemon files");
      }
      res.send(data);
    }
  );
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  fs.readFile(
    path.join(__dirname, "../data/pokedex.json"),
    "utf-8",
    (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Failed to read the pokemon files");
      }
      const pokemonObject = JSON.parse(data).find(
        (pokemen) => pokemen.id == id
      );
      if (!pokemonObject) {
        return res
          .status(404)
          .send("Could not find the pokemon with the id: " + id);
      }
      res.send(pokemonObject);
    }
  );
});

router.get("/:id/:info", (req, res, next) => {
  const { id, info } = req.params;
  fs.readFile(
    path.join(__dirname, "../data/pokedex.json"),
    "utf-8",
    (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Failed to read the pokemon files");
      }
      const pokemonObject = JSON.parse(data).find(
        (pokemen) => pokemen.id == id
      );
      if (!pokemonObject) {
        return res
          .status(404)
          .send("Could not find the pokemon with the id: " + id);
      }
      try {
        const infoObject = pokemonObject[info]; //findById(pokemonObject, info);
        console.log(infoObject);
        if (!infoObject) {
          res
            .status(404)
            .send(
              `The property '${info}' does not exist on the pokement object:\n` +
                JSON.stringify(pokemonObject)
            );
        }
        res.send(infoObject);
      } catch (error) {
        console.error(error);
        res
          .status(500)
          .send(
            `Failed to get the property '${info}' from the object:\n` +
              JSON.stringify(pokemonObject)
          );
      }
    }
  );
});

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

module.exports = router;
