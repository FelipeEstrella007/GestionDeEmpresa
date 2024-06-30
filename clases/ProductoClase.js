class Producto {
    constructor(producto) {
        this.id = producto.idproducto;
        this.nombre = producto.nombre;
        this.stock = producto.stock;
        this.precio = producto.precio;
        this.departamento = producto.departamento;
    }

    set id(id) {
        this._id = id;
    }

    set nombre(nombre) {
        var regexNombre = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,})*$/;
        if (regexNombre.test(nombre)) {
            this._nombre = nombre;
        } else {
            console.log("Error al asignar el nombre");
        }
    }

    set stock(stock) {
        var regexStock = /^\d+$/;
        if (regexStock.test(stock)) {
            this._stock = stock;
        } else {
            console.log("Error al asignar el stock");
        }
    }

    set precio(precio) {
        var regexPrecio = /^\d+(\.\d{1,2})?$/;
        if (regexPrecio.test(precio)) {
            this._precio = precio;
        } else {
            console.log("Error al asignar el precio");
        }
    }

    set departamento(departamento) {
        var regexDepartamento = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]*( [A-ZÁÉÍÓÚÑ][a-záéíóúñ]*)*$/;
        if (regexDepartamento.test(departamento)) {
            this._departamento = departamento;
        } else {
            console.log("Error al asignar el departamento");
        }
    }

    get id() {
        return this._id;
    }

    get nombre() {
        return this._nombre;
    }

    get stock() {
        return this._stock;
    }

    get precio() {
        return this._precio;
    }

    get departamento() {
        return this._departamento;
    }

    get obtenerDatos() {
        return {
            idproducto: this.id,
            nombre: this.nombre,
            stock: this.stock,
            precio: this.precio,
            departamento: this.departamento,
        };
    }
}

module.exports = Producto;