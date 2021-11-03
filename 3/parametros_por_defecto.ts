function nombreCompleto(nombre:string, 
    apellido:string, capitalizado:boolean=true){
        console.log(capitalizado);
        if (capitalizado){
            return capitalizar(nombre) + " " + capitalizar(apellido);
        }
        else{
            return nombre + " " + apellido
        }
        
        
}

function capitalizar(palabra:string):string{
    
    return palabra.charAt(0).toUpperCase() + palabra.substring(1).toLowerCase();
}
let nombre = nombreCompleto("israel","ríos");
console.log(nombre);