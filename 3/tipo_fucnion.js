"use strict";
function sumar(a, b) {
    return a + b;
}
function saludar(nombre) {
    return "I'm " + nombre;
}
function salvarMundo() {
    console.log("El mundo está salvado");
}
//Decirle a typescript que no puede mutar
//miFuncion = 10;
/*let miFuncion: (x:number, y:number)=>number ;
miFuncion = sumar;
console.log(miFuncion(5,5));*/
/*
let miFuncion: (x:string, y:string)=>string;
miFuncion = saludar;
console.log(miFuncion("Israel"));*/
var miFuncion;
miFuncion = salvarMundo;
miFuncion();
