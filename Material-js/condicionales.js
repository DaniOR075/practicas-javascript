/* condicionales

IF - ELSE IF - ELSE

*/

/* if (condicional){
        //codigo a ejecutar
}else{

    //codigo a ejecutar
    }
    
*/

/* 
if (condicion){
    //condigo a ejecutar
}else if (condicion){
    //codigo a ejecutar
}else{
    //codigo a ejecutar    

    }
*/

//ejemplo

// const edadUsuario = 17
// const generoUsuario = "M"


// if(edadUsuario >= 18 && generoUsuario === "M"){
//     console.log("Bienvenido a la isla🔥, 50k Cover")
// }else if(edadUsuario >= 18 && generoUsuario === "F"){
//     console.log("Bienvenida a la isla🔥, No cover + coctel")
// }else{
//     console.log("Andate a ver pocoyo")
// }


// el profesor tiene acceso el profesor, kevin, santi m

// const usuariosPermitidos = `nEStor`.toLowerCase()

// if (usuariosPermitidos === "nestor") {
//     console.log(`bienvenido, ${usuariosPermitidos}, acceso permitido`)
// }

// else if(usuariosPermitidos === "kevin") {
// console.log(`bienvenido, ${usuariosPermitidos}, acceso permitido`)
// }

// else if(usuariosPermitidos === "santi m") {
// console.log(`bienvenido,${usuariosPermitidos}, acceso permitido`)
// }

// else {
//     console.log (`acceso denegado ${usuariosPermitidos}`)
// }    

/* SWITCH */

/* SWITCH(variable){
    
    casevalor1:
        codigo a ejecutar
        break;

        casevalor2:
        codigo a ejecutar
        break;

        casevalor3:
        codigo a ejecutar
        break;

    default:
        codigo a ejecutar
        break;
}

*/

const canastaDefrutas = "mandarina".toLowerCase()



switch(canastaDefrutas){

    case"naranja":
        console.log("Cuesta $100",canastaDefrutas )
    break;

    case"banano":
        console.log("Cuesta $100",canastaDefrutas )
    break;

    case"manzana":
        console.log("Cuesta $100",canastaDefrutas )
    break;

    case"mandarina":
        console.log("Cuesta $100",canastaDefrutas )
    break;

    default:
        console.log("No esta disponible",canastaDefrutas)
}



