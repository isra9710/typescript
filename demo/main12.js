"use strict";
// Tipos
var batman = "Bruce";
var superman = "Clark";
var existe = false;
//Tuplas
var parejaHeroes = [batman, superman];
var villano = ["Lex Lutor", 5, true];
//Arreglos
var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
// numeraciones
/*
enum Fuerza{
    acuaman = 0,
    batman = 1,
    flash = 5,
    superman = 100

};
let fuerzaFlash:number = Fuerza.flash;
let fuerzaSuperman:number = Fuerza.superman;
let fuerzaBatman:number = Fuerza.batman;
let fuerzaAcuaman:number = Fuerza.acuaman;
*/
var fuerzaFlash = 5;
var fuerzaSuperman = 100;
var fuerzaBatman = 1;
var fuerzaAcuaman = 0;
// Retorno de funciones
function activar_batiseñal() {
    return "activada";
}
function pedir_ayuda() {
    console.log("Auxilio!!!");
}
// Aserciones de Tipo
var poder = "100";
var largoDelPoder = poder.length;
console.log(largoDelPoder);
