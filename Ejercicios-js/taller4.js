// 1

function saludarUsuario (nombreDeLaFuncion){
    console.log("Hola", nombreDeLaFuncion, "¡Bienvenido!")
}
saludarUsuario("Mateo")

//2

console.log("---------------------------------------------------")
function SumaDeNumeros(numeroUno, numeroDos){
 
    return "Resultado de " + numeroUno + " + " + numeroDos + " = " + (numeroUno + numeroDos);
 
}

console.log(SumaDeNumeros(2,6))
console.log("---------------------------------------------------")
//3

function calcularAreaTriangulo (Base, Altura){
    console.log("El area de este triangulo es:", Base * Altura / 2 )
}

calcularAreaTriangulo(2,2)
console.log("---------------------------------------------------")
//4

function convertirCelsiusAFahrenheit(Grados){

    return "Los grados:", Grados,"Se convierte en:", Grados * 1.8 + 32
}

console.log(convertirCelsiusAFahrenheit(40))

console.log("---------------------------------------------------")
//5
function esPar(numeroPar){
    
   return (numeroPar % 2 == 0)
}
console.log(esPar(5))

console.log("---------------------------------------------------")
//6

function calcularPrecioConIVA(precio, porcentajeIva){
    return precio * porcentajeIva
}

console.log(calcularPrecioConIVA(100,1.22))

console.log("---------------------------------------------------")
//7



function tablaMultiplicar(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

tablaMultiplicar(5);

console.log("---------------------------------------------------")
//8

function contarVocales(texto) {
  let contador = 0;
  
  for (let letra of texto.toLowerCase()) {
    if ("aeiou".includes(letra)) {
      contador++;
    }
  }
  
  return contador;
}

console.log(contarVocales("Hola mundo")); // 4

console.log("---------------------------------------------------")
//9
function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

console.log(lanzarDado());
