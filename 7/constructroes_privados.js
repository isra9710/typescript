"use strict";
var Apocalipsis = /** @class */ (function () {
    function Apocalipsis(nombre) {
        this.nombre = nombre;
    }
    Apocalipsis.llamarApocalipsis = function () {
        if (!Apocalipsis.instancia) {
            Apocalipsis.instancia = new Apocalipsis("Soy Apocalipsis... El único!");
        }
        return Apocalipsis.instancia;
    };
    return Apocalipsis;
}());
//let apocalipsisFalso = new Apocalipsis("Soy apocalipsis falso");
var real = Apocalipsis.llamarApocalipsis();
console.log(real);
