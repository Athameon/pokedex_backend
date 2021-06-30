const fs = require("fs");
const path = require("path");

exports.readPokedexData = (req, res, next) => {
  fs.readFile(
    path.join(__dirname, "../data/pokedex.json"),
    "utf-8",
    (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Failed to read the pokemon files");
      }
      req.pokedex = data;
      next();
    }
  );
};
