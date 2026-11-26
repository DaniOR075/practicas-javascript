//1

let numeroIncrementar = 1;

while (numeroIncrementar <= 10) {
    console.log(numeroIncrementar);
    numeroIncrementar++;
}

console.log("--------------------------2-----------------------------------")

let numeroAdecrementar = 10;

do {
    console.log(numeroAdecrementar);
    numeroAdecrementar--;
} while (numeroAdecrementar >= 1);

console.log("--------------------------3-----------------------------------")

let numero = 1;
let suma = 0;

while (numero <= 100) {
    suma = suma + numero;
    numero++;
}

console.log("El resultado es: " + suma);

console.log("--------------------------4------------------------------------")

let numeroPar = 1
let numeroSuma =0

while(numeroPar <= 50){
   if(numeroPar % 2 === 0){
    numeroSuma = numeroPar + numeroSuma
   }
    
    numeroPar++
}

console.log(numeroSuma)

console.log("--------------------------5-----------------------------------")

let perrasNestor = 1000
let noviaQuePerdona = 0

while(perrasNestor <= 1000 && noviaQuePerdona++ <= 4){
    console.log(perrasNestor)
    perrasNestor++
}

console.log("--------------------------6-----------------------------------")

let VariableX = 20


while(VariableX < 18){
    console.log("Este no se ejecuta porque primero revisa la condicion y despues ejecuta, en este caso la condicion lo impide", VariableX)
    
}

console.log("---------------------do---------------------------")


do{
    console.log("Este se va a imprimir al menos una vez debido a que primero ejecuta y despues revisa en la condicon", VariableX)
    
}
while(VariableX < 18)