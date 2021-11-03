"use strict";
var thor = {
    nombre: "Thor",
    arma: "Mjolnir"
};
var ironman = {
    nombre: "IronMan",
    arma: "Armorsuit"
};
var capitan = {
    nombre: "Capitan America",
    arma: "Escudo"
};
var avengers2 = [thor, ironman, capitan];
for (var i in avengers2) {
    var avenger = avengers2[i];
    console.log(avenger.nombre, avenger.arma);
}
for (var i = 0; i <= avengers2.length - 1; i++) {
    var avenger = avengers2[i];
    console.log(avenger.nombre, avenger.arma);
}
for (var _i = 0, avengers2_1 = avengers2; _i < avengers2_1.length; _i++) {
    var avenger = avengers2_1[_i];
    console.log(avenger.nombre, avenger.arma);
}
