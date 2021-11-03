 let thor = {
     nombre:"Thor",
     arma:"Mjolnir"
 };

 let ironman={
     nombre:"IronMan",
     arma:"Armorsuit"
 };

 let capitan = {
     nombre:"Capitan America",
     arma:"Escudo"
 };

 let avengers2 = [thor, ironman, capitan];


 for (let i in avengers2){
    let avenger = avengers2[i]
    console.log(avenger.nombre, avenger.arma );
 }


 for(let i =0; i<=avengers2.length-1; i++){
    let avenger = avengers2[i];
    console.log(avenger.nombre, avenger.arma );

 }


 for(let avenger of avengers2){
     console.log(avenger.nombre, avenger.arma);
 }