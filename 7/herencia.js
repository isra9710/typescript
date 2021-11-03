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
var Avenger4 = /** @class */ (function () {
    function Avenger4(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
        console.log("Constructor Avenger llamado");
    }
    Avenger4.prototype.getNombre = function () {
        console.log("get nombre avenger (protegido)");
        return this.nombre;
    };
    return Avenger4;
}());
var Xmen = /** @class */ (function (_super) {
    __extends(Xmen, _super);
    function Xmen(a, b) {
        var _this = this;
        console.log("Constructro Xmen llamado");
        _this = _super.call(this, a, b) || this;
        return _this;
    }
    Xmen.prototype.getNombre = function () {
        console.log("get nombre xmen (publico)");
        return _super.prototype.getNombre.call(this);
    };
    return Xmen;
}(Avenger4));
var ciclope = new Xmen("Ciclope", "Scott");
console.log(ciclope);
console.log(ciclope.getNombre());
