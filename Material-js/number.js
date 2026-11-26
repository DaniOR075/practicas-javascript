// Daniel Santiago Orjuela Rojas--Aprendiz sena de ABSO
// santiagoorjuelarojas@gmail.com---3003057191

// Numeros y operaciones aritmeticas

// 1. Tipo entero y decimal
const numeroEntero = 25; //number
const numeroDecimal = 25.5; //number

console.log("----------------------------------------------")


//2. Notacion cientifica
const numeroCientifico = 2.5e3; // 2.5 * 10^3 = 2500

console.log("----------------------------------------------")


//3 Infinitos y NAN
const numeroInfinito = Infinity; //infinito
const numeroNan = NaN; //Not a Number pero si es

console.log("----------------------------------------------")


//Operaciones matematicas
const suma = 5 + 5; //10
const resta = 10 - 5; //5
const multiplicacion = 5 * 5; //25
const division = 10 / 5; //2
const modulo = 5 % 2; //1
const potencia = 2 ** 3; //8

console.log("----------------------------------------------")


//operaciones avanzadas
const raizCuadrada = Math.sqrt(25); //5
const valorAbsoluto = Math.abs(-7); //7
const numeroAleatorio = Math.random(); //numero aleatorio entre 0 y 1

console.log("Numero entero:", numeroEntero);
console.log("Numero decimal:", numeroDecimal);
console.log("Numero cientifico:", numeroCientifico);

console.log("----------------------------------------------")


//PRECISION
const resultado = 0.1 + 0.2;    
console.log("Resultado de 0.1 + 0.2:", resultado);
console.log("Resultado con toFixed(1):", resultado.toFixed(1)); // 0.3
console.log(typeof resultado, typeof resultado.toFixed(1)); 

console.log(resultado === '0.3'); 
console.log(resultado.toFixed(1) === 0.3); 

console.log("----------------------------------------------")


//Type casting - CONVERSION DE TIPOS

//COHERCION-PARSEO

//Explicito
const numeroString = "43"
const numeroNumber= parseInt(numeroString) 
console.log(numeroString, numeroNumber)
console.log(typeof numeroString, typeof numeroNumber) 

const numeroFloat = "3.4"
const floatNumber = parseFloat(numeroFloat)
console.log(numeroFloat, floatNumber)
console.log(typeof numeroFloat, typeof floatNumber)

console.log("----------------------------------------------")


const numeroBinario = "1111"
const binarioNumero = parseInt(numeroBinario)


console.log(numeroBinario,binarioNumero )
console.log(typeof numeroBinario, typeof binarioNumero)

console.log("----------------------------------------------")

//implicito - Es peligroso!
const sumaNumeros = 4 + + "5"; // "45"
console.log(sumaNumeros)
console.log(typeof sumaNumeros) 

console.log("----------------------------------------------")

const simboloBolean = "32" + true;
console.log(simboloBolean)

console.log("----------------------------------------------")

const simboloBolean2 = true + true;
console.log(simboloBolean2)

console.log("----------------------------------------------")

const resultadoo = parseFloat((0.1 + 0.2).toFixed(1));    
console.log(resultadoo, typeof resultadoo);
console.log("----------------------------------------------")


const sumStrig = "25"
const sumNumero = 25
const sumBoolean = true


console.log(sumStrig + sumStrig) 
console.log(sumStrig + sumNumero) 
console.log(sumStrig + sumBoolean)
console.log("----------------------------------------------")
console.log(sumNumero + sumStrig)
console.log(sumNumero + sumNumero)
console.log(sumNumero + sumBoolean)
console.log("----------------------------------------------")
console.log(sumBoolean + sumNumero)
console.log(sumBoolean + sumStrig)
console.log(sumBoolean + sumBoolean)  









