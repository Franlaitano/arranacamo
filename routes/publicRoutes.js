const express = require("express");
const router = express.Router();
const { Article } = require("../models");

// Rutas relacionadas a la parte pública del sitio web:
// ...

router.get("/", async function (req, res) {
  const articles = await Article.findAll();
  res.render("home", { articles });
});

module.exports = router;
