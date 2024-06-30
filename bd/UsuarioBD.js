const ConectarBD=require("./ConectarBD");

class UsuarioBD extends ConectarBD {
    constructor(){
        super();
    }
    async crearUsuario(usuario){
        const sql="INSERT INTO usuarios (nombre,celular,correo) VALUES('"+usuario.nombre+"', '"+usuario.celular+"', '"+usuario.correo+"');"
        try {
            await this.ConectarMySql();
            await this.conexion.execute(sql);
            await this.cerrarConeccion();
            console.log("Registro creado correctamente");
        } catch (error) {
            console.error("Error al crear el registro"+error);
            console.log(usuariosBD);
            console.error(sql);
        }
    }

    async mostrarUsuarios(){
        const sql="SELECT * FROM usuarios";
        try {
            await this.ConectarMySql();
            const usuariosBD= await this.conexion.execute(sql);
            await this.cerrarConeccion();
            return usuariosBD;
        } catch (error) {
            console.error(sql);
            //console.log("-------------------");
            console.error("Error al recuperar los usuarios: "+error);
            //console.log("-------------------");
            
            return null;
        }
    }

    async buscarUsuarioPorId(idusuario){
        const sql="SELECT * FROM usuarios WHERE idusuarios="+idusuario+";"
        try {
            await this.ConectarMySql();
            const usuario = await this.conexion.execute(sql);
            await this.cerrarConeccion();
            return usuario;
        } catch (error) {
            console.error("Error al recuperar el usuario"+error);
            console.error(sql);
        }
      }
    
      async actulaizarUsuario(usuario){
        console.log(usuario);
        const sql="UPDATE usuarios SET nombre='"+usuario.nombre+"', celular='"+usuario.celular+"', correo='"+usuario.correo+"' WHERE idusuarios='"+usuario.idusuario+"'";
        try {
            await this.ConectarMySql();
            await this.conexion.execute(sql);
            await this.cerrarConeccion();
            console.log("Actualización correcta");
            console.log(sql);
        } catch (error) {
            console.error("Error al editar el usuario: "+error);
            console.error(sql);
        }
      }
      async borrarUsuario(idusuario){
        const sql="DELETE FROM usuarios WHERE idusuarios="+idusuario;
        try {
            await this.ConectarMySql();
            await this.conexion.execute(sql);
            await this.cerrarConeccion();
            console.log("Usuario Borrado");
        } catch (error) {
            console.error("Error al borrar el usuario: "+error);
            console.error(sql);
        }
      }

}




  

  module.exports = UsuarioBD;