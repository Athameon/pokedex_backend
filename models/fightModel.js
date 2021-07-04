const mongoose = require("mongoose");
const TrainerSchema = require("./trainerModel");
const Schema = mongoose.Schema;

const fightSchema = new mongoose.Schema({
  dateTime: Date,
  firstFighter: { type: Schema.Types.ObjectId, ref: "trainer" },
  secondFighter: { type: Schema.Types.ObjectId, ref: "trainer" },
  winner: { type: Schema.Types.ObjectId, ref: "trainer" },
  pokemonFirstFighter: [Number],
  pokemonSecondFighter: [Number],
});

const Fight = mongoose.model("fight", fightSchema);

module.exports = Fight;
