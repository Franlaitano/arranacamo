const express = require("express");
const router = express.Router();
const { Article } = require("../models");
const userController = require("../controllers/userController");

// Rutas relacionadas a la parte pública del sitio web:
// ...

router.get("/", async function (req, res) {
  const articles = await Article.findAll();
  console.log(req.flash);
  req.flash("info", "Welcome");
  res.render("home", { articles });
});

router.post("/articulos/:id", (req, res) => {
  res.redirect(`/articulos/${req.params.id}`);
});

router.get("/login", userController.index);
router.get("/registro", userController.register);

router.post("/registro", userController.create);
router.post("/login", userController.login);

router.get("/logout", userController.logout);

module.exports = router;
