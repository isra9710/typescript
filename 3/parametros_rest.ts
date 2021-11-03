function nombreCompleto(nombre:string,
    ...demasParametros:string[]):string{
    return nombre + " " + demasParametros.join(" ");
}
let persona:string = nombreCompleto("Israel","Ríos", "Contreras");
let persona_1:string = nombreCompleto("Rodrigo", "Ríos", "Contreras");
console.log(persona);
console.log(persona_1);
