//ciclo while ---- loop

/* 
while(condicon){
    codigo a ejecutar
    incremento
}
*/



let contador = 0

while(contador <= 5){
    console.log(contador)
    contador++    
}

//decrement

console.log("------------------------------------------------")
let numeroADecrementar = 5

console.log(numeroADecrementar--)
console.log(--numeroADecrementar)

console.log("------------------------------------------------")
//Limite de seguridad
let limitideDeSeguridad = 3

while (limitideDeSeguridad-- > 0){
    console.log("Valor actual:", limitideDeSeguridad--)

}

console.log("------------------------------------------------")
//Limite de seguridad2
let limitideDeSeguridadDos = 11
let contadorDos = 0 

while(contadorDos  < 10 && limitideDeSeguridadDos-- > 0){
    console.log("Valor actual:", contadorDos)
    contadorDos++
}
console.log("------------------------------------------------")
//Ciclo do while

/*do{
    //codigo a ejecutar
    //incremento
}
while()*/

let contadorTres = 0

do{
    console.log("Valor actual:", contadorTres)
    contadorTres++
} 
while(contadorTres < 3)
console.log("------------ejercicio------------------------------------")




let edadUsuario = 20
let limitideDeSeguridadD = 10

while(2-edadUsuario < 18 && limitideDeSeguridadD-- > 0 ){
    console.log("Es menor de edad, tienes:", edadUsuario)
    
}

console.log("---------------------do---------------------------")


do{
    console.log("Es menor de edad, tienes:", edadUsuario)
    edadUsuario--
}
while(edadUsuario > 18 && limitideDeSeguridadD-- > 0)
