var nota = 4;

console.log("El examen ha resultado:");

if(nota < 5) {

    calificacion = "suspendido";
} else {
    
    calificacion = "aprobado";
}
console.log("Estoy", calificacion);

/* Estructuras de control Operador ternario */

if(nota<5) {
    calificacion = "suspendido";
} else {
    calificacion = "aprobado";
}
console.log("Estoy", calificacion);

var calificacion = nota > 5 ? "suspendido" : "aprobado";
console.log("Estoy", calificacion);

/* Estructuras de control If multiple */

var nota = 9;
console.log("He realizado mi examen.");
if (nota < 5) {
    calificacion = "Insuficiente";
} else if (nota < 6) {
    calificacion = "Suficiente";
} else if (nota < 8) {
    calificacion = "Bien";
} else {
    calificacion = "Sobresaliente";
}
console.log("He obtenido un", calificacion);

/* Estructuras de control Switch */

var nota = 1;
console.log("He realizado mi examen. Mi resultado es el siguiente:");
switch (nota) {
    case 10:
    calificacion = "Sobresaliente";
    break;
    case 9:
    case 8:
        calificacion = "Notable";
        break;
    case 7:
    case 6:
        calificacion = "Bien";
        break;
    case 5:
        calificacion = "Suficiente";
        break;
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        calificacion = "Insuficiente";
        break;
    default:
        calificacion = "Nota erronea";
        break;
}
console.log("He obtenido un", calificacion);

/* Estructuras de control If con && AND */
/*
var altura = 0;
var edad = 0;
altura = parseFloat(prompt("Ingrese la altura"));
edad = parseInt(prompt("Ingrese la edad"));
if (altura > 1.30 && edad > 14) {
    console.log("Cumple con los requisitos");
} else {
    console.log("No cumple con los requisitos");
}

var nombre =prompt("Ingrese su nombre", "");
document.write("Hola " + nombre);

document.write("Hola mundo (HTML)");*/

/* Operadores de cadena y numeros */
var txt1 = "Juan";
var txt2 = "Pablo";
var txt3 = txt1 + txt2;
console.log(txt3);

var txt4 = "Bienvenidos ";
txt4 += "a Javascript";
console.log(txt4)

var x = 10;
var y = 5;

document.write(x);
document.write(y);
document.write(x%y);

Number.isFinite(42);
Number.isFinite(Infinity);

Number.isInteger(5);
Number.isInteger(4.6);

Number.isSafeInteger(1e15);
Number.isSafeInteger(1e16);

Number.isNaN(NaN);
Number.isNaN(5);

const IVA = 21;
console.log(IVA);
const PI= 3.141592;
document.write(PI);

const frutas = ["manzana","pera","naranja","kiwi"];
console.log(frutas);

console.log(frutas[1]);
document.write(frutas[3]);

frutas[5] = "pera";
console.log(frutas);

let cantidad =frutas.length;
console.log(frutas.length);
console.log(typeof cantidad);

frutas.push("platano");
console.log(frutas);

let nuevafruta = prompt("ingrese una nueva fruta");
frutas.push(nuevafruta);
console.log(frutas);

// pop():remueve el ultimo elemento de la raid y lo retorna

let ultimafruta = frutas.pop();
console.log(frutas);
console.log(ultimafruta);

// shift(): remueve el primer elemento y lo retorna
let primerfruta =frutas.shift();
const frutasinvertidas =frutas.slice().reverse();
//
//for (let i = 0; i <= frutas.length; i++); {
 //   console.log(frutas[i]);
//}//


const numeros = [1,2,3,4,5,6,7,8,9,10];
numeros.forEach(numero => console.log(numero));
 
var status = ["encendido","apagado","en proceso"];
const digito = 3;

if (digito => 2) {
    console.log(numeros[1]);
}
else {
    console.log(numeros[2]);
}
