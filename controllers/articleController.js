const Users = require("../models");
const { Article } = require("../models");
const { format } = require("date-fns");
const { Comment } = require("../models");
const sequelize = require("sequelize");
// Display a listing of the resource.
async function index(req, res) {
  const articles = await Article.findAll({ include: Comment });
  res.render("home", { articles, format });
}

// Display the specified resource.

async function show(req, res) {
  const article = await Article.findByPk(req.params.id, {
    include: Comment,
  });
  console.log(article.comments);
  res.render("article", { article, comments: article.comments });
}

// Show the form for creating a new resource
async function create(req, res) {
  res.render("newArticle");
}

// Store a newly created resource in storage.
async function store(req, res) {
  console.log(req.body.title);
  console.log(req.body.content);
  await Article.create({
    include: Users,
    title: `${req.body.title}`,
    content: `${req.body.content}`,
  });
  res.redirect("/panel");
}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const article = await Article.findByPk(req.params.id);
  res.render("editArticle", { article });
}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
