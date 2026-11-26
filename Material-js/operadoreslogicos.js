// Operadores de comparación

/*

== --> Compara si es abstractamente igual que --> valor
=== --> Compara si es estricta igual que --> Valor y tipo de dato

!= --> Compara si es abstractamente diferente que --> valor
!== --> Compara si es estricta diferente que --> Valor y tipo de dato

< --> Compara si es menor que
> --> Compara si es mayor que

>= --> Compara si es mayor o igual que
<= --> Compara si es menor o igual que

*/




const numero1 = 10;
const numero2 = "10";
const numero3 = 20;
const numero4 = "20";
const numero5 = 30;
const numero6 = 40;
const numero7 = 10;

console.log (numero1 == numero2) // true
console.log (numero3 === numero4) // false
console.log ("----------------------------------------------")
console.log (numero6 != numero1) // true
console.log (numero3 !== numero4) // true
console.log (numero7 !== numero1) //false
console.log ("----------------------------------------------")
console.log (numero6 > numero5) //true
console.log (numero3 < numero6) //true
console.log(numero6 < numero2) //false
console.log(numero4 >= numero3) //true
console.log(numero6 <= numero2) //false
console.log(-7 < 10) //true
console.log(-5.3 > -10.0654560554640514)


/* operadores logicos */

/*
&& --> AND --> true si ambos son verdaderos
|| --> OR --> true si alguno es verdadero
! --> NOT --> niega la salida
*/ 

const numeroA = 10;
const numeroB = "10";
const numeroC = 20;
const numeroD = "20";
const numeroE = 30;
const numeroF = 40;

// Operadores logicos AND--todo es true para que sea true
console.log ("----------------------------------------------")
console.log (numeroA == numeroB && numeroE < numeroF) // true   
console.log (numeroA < numeroB && numeroA == numeroA && numeroE < numeroF) // false
console.log ("----------------------------------------------")
//operadores logicos OR -- solo uno es true para que sea true
console.log (numeroE != numeroD || numeroF < numeroA || numeroC === numeroD) // true
console.log (numeroE == numeroF || numeroF < numeroA || numeroC === numeroD) // false

console.log ("----------------------------------------------")
//operadores logicos NOT -- niega la salida
console.log (!(numeroA == numeroB)) // false

console.log ("----------------------------------------------")
console.log (!(!(numeroA > numeroB) && numeroA == numeroB && !(numeroE < numeroF) )) // true