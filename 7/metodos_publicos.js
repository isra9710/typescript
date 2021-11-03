"use strict";
var Avenger3 = /** @class */ (function () {
    function Avenger3(nombre, equipo, nombreReal) {
        this.nombre = "Sin Nombre";
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    Avenger3.prototype.bio = function () {
        var mensaje = this.nombre + " " + this.nombreReal + " " + this.equipo;
        console.log(mensaje);
    };
    Avenger3.prototype.cambiarEquipo = function (nuevoEquipo) {
        if (nuevoEquipo === this.equipo) {
            return false;
        }
        else {
            return true;
        }
    };
    Avenger3.prototype.cambiaEquipoPublico = function (nuevoEquipo) {
        return this.cambiarEquipo(nuevoEquipo);
    };
    return Avenger3;
}());
var antman2 = new Avenger3("Antman", "cap", "Scott Lang");
console.log(antman2);
antman2.bio();
console.log(antman2.cambiaEquipoPublico("cap"));
