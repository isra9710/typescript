"use strict";
var Avenger2 = /** @class */ (function () {
    function Avenger2(nombre, equipo, nombreReal) {
        this.nombre = "Sin Nombre";
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger2;
}());
var antman1 = new Avenger2("Antman", "cap", "Scott Lang");
console.log(antman1);
