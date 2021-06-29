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
      console.log(pokemonObject);
      res.send(pokemonObject);
    }
  );
});

module.exports = router;
