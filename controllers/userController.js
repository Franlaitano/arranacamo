const { User } = require("../models");
const bcrypt = require("bcryptjs");
// Display a listing of the resource.
async function index(req, res) {
  res.render("login");
}

// Display the specified resource.
async function register(req, res) {
  res.render("register");
}

// Show the form for creating a new resource - post del registro de usuario
async function create(req, res) {
  const passwordParaHashear = req.body.password;
  const email = req.body.email;
  const passwordHasheado = await bcrypt.hash(passwordParaHashear, 10);

  const nuevoUsuario = await User.create({
    email: req.body.email,
    password: passwordHasheado,
  });
  console.log(passwordParaHashear);
  console.log(passwordHasheado);
  console.log(nuevoUsuario);
  nuevoUsuario.save();
  res.redirect("/");
}

// Store a newly created resource in storage. - login usuario
async function login(req, res) {
  const usuario = await User.findOne({ where: { username: req.body.unsername } });
  const passwordIngresado = req.body.password;
  const hashAlmacenado = usuario.password;
}

// Show the form for editing the specified resource.
async function logout(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  register,
  create,
  login,
  logout,
  update,
  destroy,
};
