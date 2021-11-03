"use strict";
function nombreCompleto(nombre) {
    var demasParametros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        demasParametros[_i - 1] = arguments[_i];
    }
    return nombre + " " + demasParametros.join(" ");
}
var persona = nombreCompleto("Israel", "Ríos", "Contreras");
var persona_1 = nombreCompleto("Rodrigo", "Ríos", "Contreras");
console.log(persona);
console.log(persona_1);
