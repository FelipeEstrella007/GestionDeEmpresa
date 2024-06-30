const ConectarBD=require("./ConectarBD");

class ProductoBD extends ConectarBD {
    constructor(){
        super();
    }
    async crearProducto(producto){
        const sql="INSERT INTO productos (nombre,stock,precio,departamento) VALUES('"+producto.nombre+"', "+producto.stock+", "+producto.precio+",'"+producto.departamento+"');"
        try {
            await this.ConectarMySql();
            await this.conexion.execute(sql);
            await this.cerrarConeccion();
            console.log("Registro creado correctamente");
        } catch (error) {
            console.error("Error al crear el registro"+error);
            console.log(productosBD);
            console.error(sql);
        }
    }

    async mostrarProductos(){
        const sql="SELECT * FROM productos";
        try {
            await this.ConectarMySql();
            const productosBD= await this.conexion.execute(sql);
            await this.cerrarConeccion();
            return productosBD;
        } catch (error) {
            console.error(sql);
            //console.log("-------------------");
            console.error("Error al recuperar los productos: "+error);
            //console.log("-------------------");
            
            return null;
        }
    }

    async buscarProductoPorId(idproducto){
        const sql="SELECT * FROM productos WHERE idproductos="+idproducto+";"
        try {
            await this.ConectarMySql();
            const producto = await this.conexion.execute(sql);
            await this.cerrarConeccion();
            return producto;
        } catch (error) {
            console.error("Error al recuperar el producto"+error);
            console.error(sql);
        }
      }
    
      async actulaizarProducto(producto){
        console.log(producto);
        const sql="UPDATE productos SET nombre='"+producto.nombre+"', stock="+producto.stock+", precio="+producto.precio+", departamento='"+producto.departamento+"'  WHERE idproductos='"+producto.idproducto+"'";
        try {
            await this.ConectarMySql();
            await this.conexion.execute(sql);
            await this.cerrarConeccion();
            console.log("Actualización correcta");
            console.log(sql);
        } catch (error) {
            console.error("Error al editar el producto: "+error);
            console.error(sql);
        }
      }
      async borrarProducto(idproducto){
        const sql="DELETE FROM productos WHERE idproductos="+idproducto;
        try {
            await this.ConectarMySql();
            await this.conexion.execute(sql);
            await this.cerrarConeccion();
            console.log("Producto Borrado");
        } catch (error) {
            console.error("Error al borrar el producto: "+error);
            console.error(sql);
        }
      }

}




  

  module.exports = ProductoBD;