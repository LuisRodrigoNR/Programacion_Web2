let Nombre = prompt("Escribe tu nombre:");
let Edad = prompt("Escribe tu edad:");
let Estatura = prompt("Cuanto mides en metros?");
let Peso = prompt("Cuanto pesas en kg? ");
let MasaCorporal= Peso/(Estatura*Estatura);

console.log("Nombre: "+Nombre+""+" Edad: "+Edad);
console.log("Tu imc es: "+MasaCorporal);