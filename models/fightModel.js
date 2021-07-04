const mongoose = require("mongoose");
const TrainerSchema = require("./trainerModel");

const fightSchema = new mongoose.Schema({
  dateTime: Date,

  firstFighter: String,
  secondFighter: String,
  winner: String,

  // firstFighter: [{ type: Schema.Types.ObjectId, ref: "Event" }],
  // secondFighter: [{ type: Schema.Types.ObjectId, ref: "Event" }],
  // winner: [{ type: Schema.Types.ObjectId, ref: "Event" }],

  pokemonFirstFighter: [Number],
  pokemonSecondFighter: [Number],
});

const Fight = mongoose.model("fight", fightSchema);

module.exports = Fight;
