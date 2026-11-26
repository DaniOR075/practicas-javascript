//Manipulacion de Strings - JS

let stringUno = 'No me abraces'
let stringDos = 'Por la espalda'
let stringTres = 'Porfis'
//las comillas invertidas tienen una particularidad ``

// Concatenacion = Unir variables 
console.log('----------------')
console.log(stringUno+ " " + stringDos + " " + stringTres)
console.log(stringUno,stringDos,stringTres)
console.log(`${stringUno} ${stringDos} ${stringTres}`)

let frase = "Si hay sol, hay playa, hay alcohol, hay sexo"

console.log(frase.length) //cantidad de caracteres //tamaño 
console.log(frase.toUpperCase()) //Mayusculas
console.log(frase.toLowerCase()) //Minusculas
console.log(frase.substring(0,10)) //subcadena desde el caracter 0 hasta el 10


console.log(frase.includes('sol')) //busca si existe la palabra sol en la frase
console.log(frase.startsWith('Si hay')) //busca si empieza con Si hay
console.log(frase.endsWith('sexo')) //busca si termina con sexo
