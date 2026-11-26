const readline = require('readline')                          

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const contraseña = "1020"
let intentos = 0

function validarUsuario(){
    
    
    rl.question("Ingrese la contraseña:",(contraseñaIngresada) => {
        intentos++

        if(contraseña == contraseñaIngresada && intentos <= 3){
            console.log("Accede al menu")
            menu()
        }
        

        else{
            console.log("Contraseña Incorrecta")
            if(intentos < 3){
                console.log("Intenta otra vez", intentos)
                validarUsuario()
            }else{
                console.log("Maximo de intentos",intentos, "cerrando menu")
            rl.close()
            }
             
        }

    
    })}

function menu(){
    console.log("--------------------------------------------------------")
    console.log("Bienvenido al menu")
    console.log("1, Tabla de multiplicar")
    console.log("2, Par o Impar" ) 
    console.log("3, Cerrar menu")
    rl.question("Ingrese opcion:", (opcion) => {
        switch(opcion){
            case "1":
                console.log("--------------------------------------------------------")
                console.log("Bienvenido a la tabla de multiplicar")
                tablaMultiplicar()
                break;

            case "2":
                console.log("--------------------------------------------------------")
                console.log("Bienvenido a par o impar")
                numeroParImpar()
                break;

            case "3":
                console.log("--------------------------------------------------------")
                console.log("Saliendo del menu")
                rl.close()
                break;

        }
    }
)}


function tablaMultiplicar() {

    rl.question("Ingresa el numero para ver su tabla:", (numeroIngresado) =>{

        for (let i = 1; i <= 10; i++) {
    console.log(`${numeroIngresado} x ${i} = ${numeroIngresado * i}`);
  }
  menu()
    }
    
)}



function numeroParImpar(){
   rl.question("Ingrese el numero que quiere reconocer como par o impar:", (paroimpar) => {
    if (paroimpar % 2 === 0){
        console.log(paroimpar, "Es par")
        
    }else{
        console.log(paroimpar, "Es impar")
    }
    menu()
})}


validarUsuario()