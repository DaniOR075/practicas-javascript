//ARROW FUNCTION - FUNCIÓN FLECHA =>

/*
function sumar(numeroA, numeroB){
    return numeroA + numeroB
}
console.log(sumar(1,1))

const sumarArrow = (numeroA, numeroB) => {
    return numeroA + numeroB
}
console.log(sumarArrow(10, 10))

const sumarEnLinea = (numeroA, numeroB) => numeroA + numeroB
console.log(sumarEnLinea(5, 5))
*/


/* ---------------------------- */
/* PEDIR AL USUARIO POR TECLADO */
/* ---------------------------- */

const readline = require('readline')                          

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//ESTRUCTURA DE UN RL

/*
rl.question('Pregunta al usuario: ', (variable) => {
        //CODIGO A EJECUTAR
        rl.close()
})

*/

/*
rl.question('Ingrese su nombre: ', (nombreUsuario) => {
    console.log(`Hola Bebesito ${nombreUsuario} estás rikix.`)
    rl.close()
})
*/

/*
rl.question('Ingrese su Edad: ', (edadUsuario) =>{
    //TYPE CASTING EXPLICITO
    let edadNumber = parseInt(edadUsuario)

    console.log(`Hola! tienes ${edadNumber + 1} años.`)
    rl.close()
})
*/


rl.question('Ingrese su nombre: ', (nombreUsuario) => {
    rl.question('Ingrese su edad: ', (edadUsuario) => {
        let edadNumber = parseInt(edadUsuario)
       
        console.log(`Hola! ${nombreUsuario}, tienes ${edadNumber} años. `)
        rl.close()
    })
})

