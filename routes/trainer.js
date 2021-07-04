const express = require("express");
const router = express.Router();
const TrainerController = require("../controllers/trainer");

// GET /trainer/
router.get("/", TrainerController.get_all_trainer);

// GET /trainer/:id
router.get("/:id", TrainerController.get_trainer);

// POST /trainer/
router.post("/", TrainerController.create_trainer);

// PUT /trainer/:id/
router.put("/:id", TrainerController.modify_trainer);

// DELETE /trainer/:id/
router.delete("/:id", TrainerController.delete_trainer);

module.exports = router;
