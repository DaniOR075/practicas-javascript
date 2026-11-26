
/* --------------------------------------- */
/* CICLO FOR CLASICO - ITERACION DE LISTAS */
/* --------------------------------------- */

//ITERAR -> RECORRER un lista - repetir
//ITERAR -> DE MANERA SECUENCIAL

// i = index de indice

/*
for(Inicializacion; Condicion; Incremento){
    //CODIGO A EJECUTAR
}
*/

// const listaDeFrutas = ['manzana', 'pera', 'mango', 'fresa']
// //Tamaño: 4
// console.log('TAMAÑO:', listaDeFrutas.length)

// for(i = 0; i <= 3; i++){
//    console.log(listaDeFrutas[i])
// }



//FOR - OF

/* --------------------------------------- */
/* CICLOS FOR OFF */
/* --------------------------------------- */
//FOR = Se utiliza para cosas (tipos de datos) iterables (ARRAY & STRING)



/* Estructura
for(variable of Array/String){
    //codigo a ejecutar
}
*/

const listaDepetalos = ["vanessa", "Juliana", "Meliza", "Valentina", "Manuela"]

for(petalo of listaDepetalos){
    console.log(petalo.slice(0,2))
}

//FOR - IN

/* -------------- */
/* CICLOS FOR IN */
/* -------------- */

//FOR IN = Se utiliza para cosas (tipos de datos) enumerables.
//FOR IN = object valor Tiene propiedades y valores 
console.log("--------------------------------------")

const tiendaDeCelulares = {
    //propiedad: valores
    iphone: 20,
    xiaomi: 70,
    samsumg: 40,
    motorola: 50
}

for(i in tiendaDeCelulares){
    console.log(i + ":" ,tiendaDeCelulares[i])
}

//i = propiedades ó claves
//tiendaDeCelulares[i] = valores