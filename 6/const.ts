const OPCIONES:string = "Activo";

if (true){
    const OPCIONES:string = "Desactivado";
}

for(const I of [1,2,3,4,5,6]){
    console.log(I);
}

console.log(OPCIONES);


const OBJETO = {
    estado:true,
    audio:10,
    ultima:"main"
};

OBJETO.estado = false;
console.log(OBJETO);