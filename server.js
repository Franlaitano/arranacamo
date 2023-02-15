require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const flash = require("express-flash");
const dbInitialSetup = require("./dbInitialSetup");
const APP_PORT = process.env.APP_PORT || 3000;
const app = express();
const passport = require("./passport/passport");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.cookieParser("keyboard cat"));
app.use(express.session({ cookie: { maxAge: 60000 } }));
app.use(flash());
passport(app);
routes(app);

//dbInitialSetup(); // Crea tablas e inserta datos de prueba.

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
