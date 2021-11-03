interface Xmen{
    nombre:string;
    poder?:string;
}


function enviarMision(xmen:Xmen){
    console.log("Enviando a " + xmen.nombre);
}

function enviarCuartel(xmen:Xmen){
    console.log("Enviando al cuartel " + xmen.nombre);
}

let wolverine3 = {
    nombre: "Wolverine"
    
};

enviarMision(wolverine3);
enviarCuartel(wolverine3);