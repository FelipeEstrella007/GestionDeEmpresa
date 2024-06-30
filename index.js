const express = require("express");
const path = require("path");
const usuariosRutas = require("./routes/usuariosRutas");
const productosRutas = require("./routes/productosRutas");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "web")));

app.use(express.urlencoded({ extended: true }));

app.use("/", usuariosRutas);
app.use("/productos", productosRutas);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Servidor en http://localhost:" + port);
});
