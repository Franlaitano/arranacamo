const { roundToNearestMinutes } = require("date-fns");
const { id } = require("date-fns/locale");
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { Article } = require("../models");

// Rutas relacionadas al panel de control (Admin):
// ...

router.get("/", async function (req, res) {
  if (req.isAuthenticated()) {
    const articles = await Article.findAll({
      where: {
        userId: req.user.id,
      },
    });
    res.render("admin", { articles });
  } else {
    res.redirect("/login");
  }
});

router.post("/admin/eliminar/:id", async function (req, res) {
  const articles = await Article.findAll();
  res.redirect("/admin");
});
module.exports = router;
