let numero1 = 10;
let numero2 = 20;

// Para sumar 2 number usamos el +
console.log("Suma", numero1 + numero2);
// Para restar usamos el -
console.log("Resta", numero1 - numero2);
// Para multiplicar *
console.log("Multiplicar", numero1 * numero2);
// Para dividir el /
console.log("Division", numero1 / numero2);

// Asi como podemos transformar un dato a String tambien
// existe la clase Number la cual pudes transformar un String a un Number
let numero3 = "22";
console.log(Number(numero3));
let numero4 = "Luis";
// Cuando queramos transformar un dato a number y este
// no sea posible tendremos como resultado NaN
// Not a number
console.log(Number(numero4));

// Ejemplo
// En un registro solcitamos la edad
// veintidos
console.log(Number("veinti dos"));
console.log(Number("one"));

// Otras formas de transformar un string -> number
let numero5 = "33.5";
// Forma 1
console.log("Forma1", Number(numero5));
// Forma 2
console.log("Forma2", parseInt(numero5));
// Forma 3
console.log("Forma3", +numero5);
// Forma 4
console.log("Forma4", parseFloat(numero5));

console.log("Probando un caso", Number("12hola"));
console.log(Number("12hola"));

// Math
const operacion = 3 * 2 + 10 - 5 / 2;
// Math.sqrt = raiz cuadrada
console.log(Math.sqrt(operacion));
// Math.pow = potencia
console.log(Math.pow(6, 3));
console.log(Math.pow(4, 3));

// c2 = a2 + b2
// c = -/a2 + b2
// Vamos a ver como solicitar un datos del navegador
// prompt: Muestra una alerta el cual podemos escribir algo
// El valor que colequemos se guardar en la variable
// !Nota todo valore recibo en el prompt es un string
// const catetoA = Number(prompt("Ingrese el valor de A"));
// const catetoB = Number(prompt("Ingrese el valor de B"));

// const operacion2 = Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB, 2));
// alert(operacion2)

// problema 1

const A = Number(prompt("Ingrese el valor de la base"));
const B = Number(prompt("Ingrese el valor de la altura"));
alert(`el area de su rectangulo es de ${A * B}`);


//Problema 2
const C = Number(prompt("Ingrese el valor de la radio del circulo"));
const C2 = Math.pow(C,2);

alert(`el area del circulo es de ${Math.PI * C2}`);
// console.log("su area de radio es de" + Math.PI * C2);

