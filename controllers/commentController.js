const { Article } = require("../models");
const { format } = require("date-fns");
const { Comment } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  console.log(req.body);
}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  console.log("HOLA");
  console.log(req.body);
  console.log(req.params);
  const comment = {
    content: req.body.commentText,
    username: req.body.name,
    articleId: req.params.articleId,
  };
  await Comment.create(comment);
  res.redirect(`/articulos/${req.params.articleId}`);
}
// Show the form for editing the specified resource.
async function edit(req, res) {}

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
