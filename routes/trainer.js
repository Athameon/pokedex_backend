const express = require("express");
const router = express.Router();
const TrainerController = require("../controllers/trainer");

// GET /trainer/
router.get("/", TrainerController.get_all_trainers);

// GET /trainer/:id
router.get("/:id", TrainerController.get_trainer);

// POST /trainer/
router.post("/", TrainerController.create_trainer);

// PUT /trainer/:id/
router.put("/:id", TrainerController.modify_trainer);

module.exports = router;