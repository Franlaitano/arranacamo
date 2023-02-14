const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Rutas relacionadas a los usuarios:
// ...

router.get("/:id", userController.update);
router.get("/:id", userController.destroy);

module.exports = router;
