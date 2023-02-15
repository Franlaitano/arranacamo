const { User } = require("../models");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require("passport-local");
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
async function login(req, res) {
  console.log("entrando a login...");
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (username, password, cb) => {
        try {
          const user = await User.findOne({ where: { email: username } });
          console.log(user);
          if (!user) {
            console.log("Nombre de usuario no existe.");
            return cb(null, false, { message: "Credenciales incorrectas." });
          }
          const match = await bcrypt.compare(password, user.password);
          if (!match) {
            console.log("La contraseña es inválida.");
            return cb(null, false, { message: "Credenciales incorrectas." });
          }
          console.log("Credenciales verificadas correctamente");
          return cb(null, user);
        } catch (error) {
          cb(error);
        }
      },
    ),
  );
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
