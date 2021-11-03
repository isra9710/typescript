"use strict";
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 5] = "medio";
    Volumen[Volumen["max"] = 10] = "max";
    Volumen[Volumen["ex_max"] = 11] = "ex_max";
})(Volumen || (Volumen = {}));
var audio = Volumen.min;
console.log(audio);
console.log(Volumen);
