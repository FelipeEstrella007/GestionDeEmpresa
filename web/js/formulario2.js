var regexNombre = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,})*$/;
var regexStock = /^\d+$/;
var regexPrecio = /^\d+(\.\d{1,2})?$/;
var regexDepartamento = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]*( [A-ZÁÉÍÓÚÑ][a-záéíóúñ]*)*$/;


var nombre=document.getElementById("nombre");
var mensajeNombre=document.getElementsByClassName("mensajeNombre")[0];
var tacheNombre=document.getElementsByClassName("tacheNombre")[0];
var buenaNombre=document.getElementsByClassName("buenaNombre")[0];

var stock=document.getElementById("stock");
var mensajeStock=document.getElementsByClassName("mensajeStock")[0];
var tacheStock=document.getElementsByClassName("tacheStock")[0];
var buenaStock=document.getElementsByClassName("buenaStock")[0];

var precio=document.getElementById("precio");
var mensajePrecio=document.getElementsByClassName("mensajePrecio")[0];
var tachePrecio=document.getElementsByClassName("tachePrecio")[0];
var buenaPrecio=document.getElementsByClassName("buenaPrecio")[0];

var departamento=document.getElementById("departamento");
var mensajeDepartamento=document.getElementsByClassName("mensajeDepartamento")[0];
var tacheDepartamento=document.getElementsByClassName("tacheDepartamento")[0];
var buenaDepartamento=document.getElementsByClassName("buenaDepartamento")[0];

nombre.addEventListener("blur", ()=>{
    if (!regexNombre.test(nombre.value)) {
        mensajeNombre.classList.remove("ocultar");
        nombre.classList.add("input-tache");
        tacheNombre.classList.remove("ocultar");
        buenaNombre.classList.add("ocultar");
        nombre.classList.remove("input-buena");
  }
  else{
    mensajeNombre.classList.add("ocultar");
    nombre.classList.add("input-buena");
    tacheNombre.classList.add("ocultar");
    buenaNombre.classList.remove("ocultar");
    nombre.classList.remove("input-tache");
  }
});

stock.addEventListener("blur", ()=>{
    if (!regexStock.test(stock.value)) {
        mensajeStock.classList.remove("ocultar");
        stock.classList.add("input-tache");
        tacheStock.classList.remove("ocultar");
        buenaStock.classList.add("ocultar");
        stock.classList.remove("input-buena");
  }
  else{
    mensajeStock.classList.add("ocultar");
    stock.classList.add("input-buena");
    tacheStock.classList.add("ocultar");
    buenaStock.classList.remove("ocultar");
    stock.classList.remove("input-tache");
  }
});

precio.addEventListener("blur", ()=>{
    if (!regexPrecio.test(precio.value)) {
        mensajePrecio.classList.remove("ocultar");
        precio.classList.add("input-tache");
        tachePrecio.classList.remove("ocultar");
        buenaPrecio.classList.add("ocultar");
        precio.classList.remove("input-buena");
  }
  else{
    mensajePrecio.classList.add("ocultar");
    precio.classList.add("input-buena");
    tachePrecio.classList.add("ocultar");
    buenaPrecio.classList.remove("ocultar");
    precio.classList.remove("input-tache");
  }
});

departamento.addEventListener("blur", ()=>{
  if (!regexDepartamento.test(departamento.value)) {
      mensajeDepartamento.classList.remove("ocultar");
      departamento.classList.add("input-tache");
      tacheDepartamento.classList.remove("ocultar");
      buenaDepartamento.classList.add("ocultar");
      departamento.classList.remove("input-buena");
}
else{
  mensajeDepartamento.classList.add("ocultar");
  departamento.classList.add("input-buena");
  tacheDepartamento.classList.add("ocultar");
  buenaDepartamento.classList.remove("ocultar");
  departamento.classList.remove("input-tache");
}
});
