"use strict";
function sumar(a, b) {
    return a + b;
}
console.log(sumar(2, 2));
var sumar_lambda = function (a, b) { return a + b; };
console.log(sumar_lambda(2, 2));
function give_order(order) {
    return "Hulk " + order;
}
console.log(give_order("smash!!!"));
var give_order_lambda = function (order) { return "Hulk " + order; };
console.log(give_order_lambda("smash!!!!"));
var capitan_america = {
    nombre: "Hulk",
    give_order_function: function () {
        var self = this;
        setTimeout(function () {
            console.log(self.nombre + " smash!!!!!");
        }, 4000);
    }
};
var capitan_america_lambda = {
    nombre: "Hulk",
    give_order_function: function () {
        var _this = this;
        setTimeout(function () {
            return console.log(_this.nombre + " smash!!!!!!!");
        }, 5000);
    }
};
capitan_america.give_order_function();
capitan_america_lambda.give_order_function();
