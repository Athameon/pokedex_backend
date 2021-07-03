const get_all_trainers = (req, res) => {
  res.send([
    { _id: "abcdefghi", name: "Poko" },
    { _id: "sdfasdfs", name: "Misti" },
    { _id: "asdrasdr", name: "Paul" },
  ]);
};
const get_trainer = (req, res) => {
  const { id } = req.params;
  res.send("Trainer: " + id);
};
const create_trainer = (req, res) => {
  res.send("Trainer created");
};
const modify_trainer = (req, res) => {
  const { id } = req.params;
  res.send("Trainer modified: " + id);
};

const delete_trainer = (req, res) => {
  const { id } = req.params;
  res.send("Trainer deleted: " + id);
};

module.exports = {
  get_all_trainers,
  get_trainer,
  create_trainer,
  modify_trainer,
  delete_trainer,
};
