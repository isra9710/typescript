"use strict";
function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
    xmen.regenerar("Logan");
}
;
var wolverine4 = {
    nombre: "Wolverine",
    regenerar: function (x) {
        console.log("Se ha regenerado " + x);
    }
};
enviarMision(wolverine4);
