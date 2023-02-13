const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// Rutas relacionadas a los comentarios:
// ...
router.get("/", commentController.index);
router.post("/:articleId", commentController.store);

module.exports = router;
