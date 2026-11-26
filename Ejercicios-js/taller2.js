
// Ejercicio 1

const losNombres = ["mateo","Matias","Castro","Alex","Daniel"]

for(i = 0; i < 5; i++ ){
    console.log(losNombres[i] + ":" +  losNombres[i].length)
}

//Ejercicio 2
console.log("---------------------------------------------------")

const fraseGay = "A mateo le gusta Nestor"

for(i of fraseGay){
    console.log(i)
}

//Ejercicio 3
console.log("---------------------------------------------------")


const listaDeFrutas = ['manzana', 'pera', 'mango', 'fresa']
//Tamaño: 4
console.log('TAMAÑO:', listaDeFrutas.length)

for(i of listaDeFrutas){
    console.log("'Me gusta la fruta:" + i)
}

//Ejercicio 4
console.log("---------------------------------------------------")
console.log("Precios putas")
const putaSenaPrecio = {
    mateo: 2000,
    Alex: 700, 
    Castro: 4000, 
    matias: 5
}

for(i in putaSenaPrecio){
  console.log(i + ":" ,putaSenaPrecio[i])
}

//Ejercicio 5
console.log("---------------------------------------------------")

const listaNumbers = [1,2,3,4,5]

for(i = 1; i < 6; i++){
    console.log(i)
}

console.log("-----------------For of-----------------")

for(perico of listaNumbers){
    console.log(perico)
}

//En este caso igual de facil los dos, pero solo pq aprendi a manejar mas el for clasico lo hice mas rapido