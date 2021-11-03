"use strict";
function enviarMision(xmen) {
    console.log("Enviando a " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel " + xmen.nombre);
}
var wolverine3 = {
    nombre: "Wolverine"
};
enviarMision(wolverine3);
enviarCuartel(wolverine3);
