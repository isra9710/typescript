"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decorador de clase normal
function consola1(constructor) {
    console.log(constructor);
}
//Decorador Factory
function imprimirConsola(imprimir) {
    if (imprimir) {
        return consola1;
    }
    else {
        return function hola() {
            return null;
        };
    }
}
var Villano1 = /** @class */ (function () {
    function Villano1(nombre) {
        this.nombre = nombre;
    }
    Villano1 = __decorate([
        imprimirConsola(true)
    ], Villano1);
    return Villano1;
}());
