const { User } = require("../models");

const passport = require("passport");

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
  nuevoUsuario.save();
  res.redirect("/");
}

// Store a newly created resource in storage. - login usuario
const login = passport.authenticate("local", {
  successRedirect: "/panel",
  failureRedirect: "/login",
});

// Show the form for editing the specified resource.
function logout(req, res) {
  req.logout(() => {
    res.redirect("/");
  });
}

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
