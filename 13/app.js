"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jquery");
require("sweetalert");
console.log("Hola mundo");
$(document).ready(function () {
    console.log("Página lista y cargada");
    $("h1").text("Hola desde Typescript");
    $("p").text("Hola desde este parrafo");
    $("h1").css("background-color", "red");
});
/*$("#botAlerta").on("click", function(){
    alert("Hola mundo desde Typescript");
});*/
$("#botAlerta").on("click", function () {
    sweetAlert("Oops ...", "Something went wrong!", "error");
});
