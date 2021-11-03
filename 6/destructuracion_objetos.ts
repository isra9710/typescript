let avengers = {
    nick:"Samuel Jackson",
    ironman: "Robert Downey Jr",
    vision: "Paul Bettany"
};


/*let nick = avengers.nick;
let ironman = avengers.ironman;
let vision = avengers.vision;*/

//let {nick, ironman, vision } = avengers;
let {nick, ironman:warmachine,vision } = avengers;
console.log(nick);
//console.log(ironman);
console.log(warmachine);
console.log(vision);

