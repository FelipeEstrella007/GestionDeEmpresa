const ruta = require("express").Router();
const Producto = require("../clases/ProductoClase");
const ProductoBD = require("../bd/ProductoBD");

ruta.get("/", async (req, res) => {
    try {
        const productobd = new ProductoBD();
        const [productosBD] = await productobd.mostrarProductos();
        var productosCorrectos = [];
        productosBD.forEach(producto => {
            const producto1 = new Producto(producto);
            if (producto1.obtenerDatos.nombre != undefined && producto1.obtenerDatos.stock != undefined && producto1.obtenerDatos.precio != undefined && producto1.obtenerDatos.departamento != undefined) {
                productosCorrectos.push(producto);
            }
        });
        res.render("mostrarProductos", { productosCorrectos });
    } catch (error) {
        console.error("Error al recuperar los productos: " + error);
        res.status(500).send("Error al recuperar los productos");
    }
});

ruta.post("/agregarProducto", (req, res) => {
    var producto1 = new Producto(req.body);
    if (producto1.obtenerDatos.nombre == undefined && producto1.obtenerDatos.stock == undefined && producto1.obtenerDatos.precio == undefined && producto1.obtenerDatos.departamento == undefined) {
        res.render("error");
    } else {
        const productobd = new ProductoBD();
        productobd.crearProducto(producto1.obtenerDatos);
        res.redirect("/productos");
    }
});

ruta.get("/agregarProducto", (req, res) => {
    res.render("formulario2");
});

ruta.get("/editarProducto/:id", async (req, res) => {
    try {
        const productosbd = new ProductoBD();
        const [[producto]] = await productosbd.buscarProductoPorId(req.params.id);
        res.render("editarProducto", producto);
    } catch (error) {
        console.error("Error al recuperar el producto: " + error);
        res.status(500).send("Error al recuperar el producto");
    }
});

ruta.post("/editarProducto", async (req, res) => {
    const producto1 = new Producto(req.body);
    if (producto1.obtenerDatos.nombre == undefined && producto1.obtenerDatos.stock == undefined && producto1.obtenerDatos.precio == undefined && producto1.obtenerDatos.departamento == undefined) {
        res.render("error");
    } else {
        const productobd = new ProductoBD();
        await productobd.actulaizarProducto(producto1.obtenerDatos);
        res.redirect("/productos");
    }
});

ruta.get("/borrarProducto/:idproductos", async (req, res) => {
    try {
        const productobd = new ProductoBD();
        await productobd.borrarProducto(req.params.idproductos);
        res.redirect("/productos");
    } catch (error) {
        console.error("Error al borrar el producto: " + error);
        res.status(500).send("Error al borrar el producto");
    }
});

module.exports = ruta;
