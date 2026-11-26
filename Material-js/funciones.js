//Funciones

//reutilizar bloques de codigo


/* 
function nombreDeLaFuncion(Parametros){
    //codigo a ejecutar
}
*/

//Sin parametros iniciales

// function saludarUsuario(){
//     console.log("Hola")
// }

// // saludarUsuario(console.log("holaa??"))
// saludarUsuario()

// console.log("---------------------------------------------------")


// function saludarUsuarioPersonalizado(nombreUsuario, perico){
//     console.log("Hola, bebé", nombreUsuario, "deja de consumir", perico)
// }

// saludarUsuarioPersonalizado("nestor","nestor dos","bazuco")

// console.log("---------------------------------------------------")
// function SumaDeNumeros(numeroUno, numeroDos){
//     //console.log("Resultado de",numeroUno, "+", numeroDos, "=", numeroDos + numeroUno )
//     console.log("Resultado de" , numeroUno, "+", numeroDos, "=", numeroDos + numeroUno) 
//     return "Resultado de " + numeroUno + " + " + numeroDos + " = " + (numeroUno + numeroDos);
 
// }

// console.log(SumaDeNumeros(2,6))

// console.log("---------------------------------------------------")
// // let numeroUno = 10
// // let numeroDos = 20
// // console.log("Resultado de",numeroUno,"+",numeroDos,"=",numeroUno + numeroDos  )
// // let numeroTres = 100
// // let numeroCuatro = 2054
// // console.log("Resultado de",numeroTres,"+",numeroCuatro,"=",numeroTres + numeroCuatro  )
// function gastosFijosMensuales(arriendo, Servicios, Wifi, Mercado, transporte, Suscripciones, salidaACenar, rumba, ropa){
//     return arriendo + Servicios + Wifi + Mercado + transporte + Suscripciones + salidaACenar + rumba + ropa
// }

// console.log(gastosFijosMensuales(1500000, 200000, 100000, 500000, 350000, 150000, 310000, 300000, 200000))


// function calcularPrecioConDescuento(precioReal, precioDescuento){

//     const descuento = (precioReal * precioDescuento) / 100
//     const precioConDescuento = precioReal - descuento
   
//     return precioConDescuento
// }

// console.log('VALOR A PAGAR:', calcularPrecioConDescuento(100, 50)) //50
// console.log('VALOR A PAGAR:', calcularPrecioConDescuento(6199000, 67))
// console.log('VALOR A PAGAR:', calcularPrecioConDescuento(79000000, 93))

// console.log('--------------------------')
// const precioOriginal = 1000
// const porcentajeDescuento = 10
// const precioFinal = calcularPrecioConDescuento(precioOriginal, porcentajeDescuento)

// console.log('PRECION FINAL:', precioFinal)

/* ------------------------- */
/* FUNCIONES PURAS E IMPURAS */
/* ------------------------- */

/*
SIDE EFFECT Ó EFECTO SECUNDARIO

1. MODIFICA VARIABLES GLOBALES
2. SOLICITUDES HTTP
3. IMPRIMIR EN PANTALLA O CONSOLA
4. MANIPULACION EL DOM
5. OBTIENE LA HORA ACTUAL


*/

/*caracteristicas de las funciones */

//1. pasar un argumento a la funcion

// function argumento(a){
//     //codigo a ejecutar
// }

// argumento(2)

// //2. Retornar funciones

// function retornar(){

//     function retornarDos(){

//     }

//     return retornarDos
// }

// //3. Asignar funciones a variables
// const espresionDeFuncion = function(){}

// //4. tener propiedades y metodos

// function ejemplo(){
//     const objeto= {
//         //Propiedades: valores
//         //metodos
//     }
// }

// //5. Anidar funciopnes

// function funcionUno(){
//     function funcionDos(){
//         function funcionTres(){
//             //Codigo a ejecutar
//         }
//         funcionTres()
//     }
//     funcionDos()
// }

// funcionUno()

//6.

// const cohete = {
//     name: "Falcon",
//     mensaje: function mensajeDespegue(){
//         console.log("Despegando")
//     }
// }

// cohete.mensaje()

function elevarAlCuadrado(x){
    return x * x
}

function sumarDiez(y){
    return y + 10
}

//combinacion de dos funciones puras

const numeroOne = 5
const finalResultado = sumarDiez(elevarAlCuadrado(numeroOne))

console.log(finalResultado)