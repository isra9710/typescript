"use strict";
console.log(Validaciones.validarTexto("Barry Allen"));
if (Validaciones.validarTexto("Barry Allen")) {
    console.log("El texto es valido");
}
else {
    console.log("El texto no es valido");
}
var hoy = new Date();
console.log(Validaciones.validarFecha(hoy));
if (Validaciones.validarFecha(hoy)) {
    console.log("La fecha es valida");
}
else {
    console.log("La fecha no es valida");
}
