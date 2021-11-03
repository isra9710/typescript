function nombreCompleto(nombre:string, apellido?:string):string{
    if(apellido){
        return nombre + ' ' + apellido;    
    }
    else{
        return nombre;
    }
    
    
}
let nombre = nombreCompleto("Israel");
console.log(nombre);