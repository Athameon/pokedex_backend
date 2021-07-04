const express = require("express");
const router = express.Router();
const FightController = require("../controllers/fight");

// GET /fight/
router.get("/", FightController.get_all_fights);

// GET /fight/:id
router.get("/:id", FightController.get_fights_by_trainer);

// POST /fight/
router.post("/", FightController.create_fight_result);

module.exports = router;
