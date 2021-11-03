let nombre1:string = "Bruce";
let nombre2:string = 'Ricardo';
function getNombres():string{
    return `${nombre1} ${nombre2}`;
}

let mensaje:string = `1. Esta es una linea normal
2. Hola ${nombre1}
3. Robin es ${nombre2}
4. Los nombres son: ${getNombres()}
5.${5+7}
`;
console.log(mensaje);