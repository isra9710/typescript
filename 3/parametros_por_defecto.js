"use strict";
function nombreCompleto(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = true; }
    console.log(capitalizado);
    if (capitalizado) {
        return capitalizar(nombre) + " " + capitalizar(apellido);
    }
    else {
        return nombre + " " + apellido;
    }
}
function capitalizar(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substring(1).toLowerCase();
}
var nombre = nombreCompleto("israel", "ríos");
console.log(nombre);
