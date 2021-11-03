"use strict";
var nombre1 = "Bruce";
var nombre2 = 'Ricardo';
function getNombres() {
    return nombre1 + " " + nombre2;
}
var mensaje = "1. Esta es una linea normal\n2. Hola " + nombre1 + "\n3. Robin es " + nombre2 + "\n4. Los nombres son: " + getNombres() + "\n5." + (5 + 7) + "\n";
console.log(mensaje);
