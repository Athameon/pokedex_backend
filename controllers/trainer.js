const Trainer = require("../models/trainerModel");

const get_all_trainer = (req, res) => {
  Trainer.find()
    .then((students) => {
      return res.json(students);
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).send(error.message);
    });
};

const get_trainer = (req, res) => {
  const { id } = req.params;
  Trainer.findById(id)
    .then((students) => {
      return res.json(students);
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).send(error.message);
    });
};
const create_trainer = async (req, res) => {
  try {
    const createdTrainer = await Trainer.create({ ...req.body });
    console.log(createdTrainer);

    return res.json(createdTrainer);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Failed to create the trainer.");
  }
};
const modify_trainer = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Trainer.updateOne({ _id: id }, { ...req.body });
    console.log(data);

    if (data.nModified > 0) {
      return res.json("Successfully updated the trainer.");
    }
    return res.json("Trainer values did not change -> Not updated.");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Failed to create the trainer.");
  }
};

const delete_trainer = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Trainer.deleteOne({ _id: id });
    console.log(data);

    if (data.deletedCount > 0) {
      return res.json("Successfully deleted the trainer.");
    }
    return res
      .status(404)
      .json("The trainer ID does not exist. Failed to delete.");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Failed to delete the trainer.");
  }
};

module.exports = {
  get_all_trainer,
  get_trainer,
  create_trainer,
  modify_trainer,
  delete_trainer,
};
