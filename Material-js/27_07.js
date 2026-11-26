//Clase 27_07

// let = Para variables que pueden cambiar en el tiempo

// const = Para variables que no pueden cambiar en el tiempo

/* Primitivos
1 number
2 string
3 boolean
4 null
5 undifined
6 symbol
7 bigint

complejos
1 Array = lista ordenada de forma secuencial
2 Object = Tiene propiedades y valores 
objeto={Propiedades y valores}
Propiedades:claves = valores

3 function
*/

// primitivos
let edadDeUsuario = 28 //number
let nombreDeUsuario = 'Daniel' //string
let esMayorDeEdad = true //boolean
let numeroNulo = null //nulo
let indefinido = undefined //undefined
let simboloUnico = Symbol('unico') //symbol
let numeroGrande = 23466574635456876546356463n //bigint


console.log(edadDeUsuario,typeof edadDeUsuario);
console.log(nombreDeUsuario, typeof nombreDeUsuario);
console.log(esMayorDeEdad, typeof esMayorDeEdad);
console.log(numeroNulo, typeof numeroNulo);
console.log(indefinido,typeof indefinido);
console.log(simboloUnico, typeof simboloUnico);
console.log(numeroGrande,typeof numeroGrande);

//complejos

let listaDeFrutas = ['mango','zapote','manzana','melon','banano'] //array
//tamaño:5
//posicion:

let superNiggaMateo = {
    nombre: 'Mateo',
    edad: '15',
    fuerza: 'Menos que daniel',
    salud:'100',
    esMasculino: 'false'
} //object

let saludarUsuario = function(){} //function

console.log(listaDeFrutas, typeof listaDeFrutas)
console.log(superNiggaMateo, typeof superNiggaMateo)
console.log(saludarUsuario, typeof saludarUsuario)