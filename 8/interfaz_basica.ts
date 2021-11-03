interface Xmen{
    nombre:string;
    poder:string;
}


function enviarMision(xmen:Xmen){
    console.log("Enviando a " + xmen.nombre);
}

function enviarCuartel(xmen:Xmen){
    console.log("Enviando a " + xmen.nombre);
}

let wolverine2:Xmen = {
    nombre: "Wolverine",
    poder:"Regeneración"
};

enviarMision(wolverine2);
enviarCuartel(wolverine2);