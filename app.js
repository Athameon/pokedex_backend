require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
require("./db/db");

const indexRouter = require("./routes/index");
const pokemonRouter = require("./routes/pokemon");
const trainerRouter = require("./routes/trainer");
const { readPokedexData } = require("./middleware/pokedexReader");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.use("/pokemon", readPokedexData, pokemonRouter);

app.use("/trainer", trainerRouter);

module.exports = app;
