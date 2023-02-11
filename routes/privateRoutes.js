const { roundToNearestMinutes } = require("date-fns");
const { id } = require("date-fns/locale");
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { Article } = require("../models");

// Rutas relacionadas al panel de control (Admin):
// ...

router.get("/admin", async function (req, res) {
  const articles = await Article.findAll();
  res.render("admin", { articles });
});

router.post("/admin/eliminar/:id", async function (req, res) {
  const articles = await Article.findAll();
  alert("puto");
  res.redirect("/admin");
});
module.exports = router;
