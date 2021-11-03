"use strict";
var Avenger5 = /** @class */ (function () {
    function Avenger5(nombre, nombreReal) {
        this._nombre = nombre;
    }
    Object.defineProperty(Avenger5.prototype, "nombre", {
        get: function () {
            console.log("Pasó por el getNombre");
            if (this._nombre) {
                return this._nombre;
            }
            else {
                return "No tiene un nombre el avenger";
            }
        },
        set: function (nombre) {
            console.log("Se pasó el set del nombre");
            if (nombre.length <= 3) {
                throw new Error("Auxilio eso no debe de pasar...");
            }
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    return Avenger5;
}());
var ciclope0 = new Avenger5("Wolverine");
console.log(ciclope0.nombre);
ciclope0.nombre = "Ciclope";
console.log(ciclope0.nombre);
