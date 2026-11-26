// Daniel Santiago Orjuela Rojas--Aprendiz sena de ABSO
// santiagoorjuelarojas@gmail.com---3003057191

/* Ejercicio 1: */
let edadPersona = 18; 
 
if (edadPersona >= 0 && edadPersona < 12) { 
  console.log("Eres un niño.");
} else if (edadPersona >= 12 && edadPersona <= 17) {
  console.log("Eres un adolescente.");
} else if (edadPersona >= 18 && edadPersona <= 59) {
  console.log("Eres un adulto.");
} else if (edadPersona >= 60) {
  console.log("Eres un adulto mayor.");
} else {
  console.log("Edad no válida.");
}


/* Ejercicio 2*/
console.log("--------------------------------------------------")
const numero1 = 3
const numero2 = 4

if(numero1>numero2){
    console.log("El primer número es mayor");
} else if(numero2>numero1){
    console.log("El segundo número es mayor");
} else if(numero1==numero2){
    console.log("Ambos números son iguales");
  
  }

console.log("--------------------------------------------------")

/* Ejercicio 3*/
const rolUsuario = "invitdfado".toLowerCase()

if(rolUsuario == "admin"){
    console.log("Bienvenido, administrador.");
} else if (rolUsuario == "editor"){
    console.log("Acceso como editor concedido.");
} else if (rolUsuario == "invitado"){
    console.log("Acceso limitado.");
} else {
    console.log("Rol no reconocido. Acceso denegado.");
}
console.log("--------------------------------------------------")

/* ejercicio 4 */
let opcionMenu = 0; 
 
switch (opcionMenu) {
  case 1:
    console.log("Ver perfil");
    break;
  case 2:
    console.log("Editar perfil");
    break;
  case 3:
    console.log("Ver notificaciones");
    break;
  case 4:
    console.log("Salir");
    break;
  default:
    console.log("Opción no válida");
}
console.log("--------------------------------------------------")

/* Ejercicio 5 */
const diaActual = "Sábado".toLowerCase();

switch(diaActual) {
    case "miercoles":
    case "miércoles": 
    case "lunes":
    case "martes":
    case "jueves":
    case "viernes":
        console.log("Es un día laboral.");
        break;

    case "sabado":
    case "sábado":
    case "domingo":
        console.log("Es un día de descanso.");
        break;

    default:
        console.log("Día no reconocido.");
}

    console.log("--------------------------------------------------")

/* Ejercicio 6*/

const nombreColor = "amArillo".toLowerCase()

switch(nombreColor){
  case "rojo":
  case "azul":
  case "amarillo":
    console.log("Es un color primario")
    break;
  default:
    console.log("No es un color primario")
    break;
}
