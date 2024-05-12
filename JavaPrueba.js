function sumarDos(num1,num2){
    var suma = num1 + num2;
    return suma;
}
n1=2;
n2=3;
var resultado = sumarDos(n1,n2);
console.log("El resultado es: " + resultado);

var suma = function sumarTres(numero1,numero2) {
    return numero1+numero2;
}
console.log(suma(40,15))


function cuadrado(x){
    return x*x
}
console.log(cuadrado(2))

var aCuadrado = x => x/x+x;
document.write(aCuadrado(3));

function sumar(num1,num2){
    return num1+num2
}
console.log(sumar(4,6))


function multiplicar(num1,num2) {
    producto = num1*num2
    return producto
}
console.log(multiplicar(5,3))

var aSumar = (num1,num2) => num1+num2;
console.log(aSumar(5,7))

var aMultiplicar =(num1,num2) =>
    {
        producto=num1*num2
        return producto
    }
console.log(aMultiplicar(6,7));

(a) => {return a +100}
(a) => a+100;
a => a +100;