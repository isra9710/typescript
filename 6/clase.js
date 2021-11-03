"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avenger = /** @class */ (function () {
    function Avenger(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
    return Avenger;
}());
var AvengerVolador = /** @class */ (function (_super) {
    __extends(AvengerVolador, _super);
    function AvengerVolador(nombre, poder) {
        var _this = _super.call(this, nombre, poder) || this;
        _this.vuela = true;
        return _this;
    }
    return AvengerVolador;
}(Avenger));
var hulk = new Avenger("Hulk", "Super Fuerza");
var falcon = new AvengerVolador("Falcón", "Volar");
console.log(hulk);
console.log(falcon);
