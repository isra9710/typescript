"use strict";
var Xmen1 = /** @class */ (function () {
    function Xmen1() {
    }
    Xmen1.crearXmen = function () {
        console.log("Se creó usando un metodo estatico");
        return new Xmen1();
    };
    Xmen1.nombre = "Wolverine";
    return Xmen1;
}());
console.log(Xmen1.nombre);
var wolverine2 = Xmen1.crearXmen();
console.log(wolverine2);
