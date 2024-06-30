class Usuario {
    constructor(usuario) {
        this.id = usuario.idusuario;
        this.nombre = usuario.nombre;
        this.celular = usuario.celular;
        this.correo = usuario.correo;
    }

    set id(id) {
        this._id = id;
    }

    set nombre(nombre) {
        var regexNombre = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
        if (regexNombre.test(nombre)) {
            this._nombre = nombre;
        } else {
            console.log("Error al asignar el nombre");
        }
    }

    set celular(celular) {
        var regexTelefono = /^\d{10}$/;
        if (regexTelefono.test(celular)) {
            this._celular = celular;
        } else {
            console.log("Error al asignar el teléfono");
        }
    }

    set correo(correo) {
        var regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regexCorreo.test(correo)) {
            this._correo = correo;
        } else {
            console.log("Error al asignar el correo");
        }
    }

    get id() {
        return this._id;
    }

    get nombre() {
        return this._nombre;
    }

    get celular() {
        return this._celular;
    }

    get correo() {
        return this._correo;
    }

    get obtenerDatos() {
        return {
            idusuario: this.id,
            nombre: this.nombre,
            celular: this.celular,
            correo: this.correo,
        };
    }
}

module.exports = Usuario;
