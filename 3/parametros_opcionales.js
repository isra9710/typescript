"use strict";
function nombreCompleto(nombre, apellido) {
    if (apellido) {
        return nombre + ' ' + apellido;
    }
    else {
        return nombre;
    }
}
var nombre = nombreCompleto("Israel");
console.log(nombre);
