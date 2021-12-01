/*Calcular precio final*/
const IVA = 1.21
const Ganancia = 0.5


function precioEnBruto( PreciFinal){
    return PreciFinal * ( IVA + Ganancia)
}
let PreciFinal = precioEnBruto(100)
alert(PreciFinal)


/*FUNCION 1 SUMAR NUMEROS*/

let numero1 = parseFloat(prompt("ingrese numero"))
let numero2 = parseFloat(prompt("ingresa otro numero"))

function sumar(numero1, numero2){
    return numero1 + numero2
}


console.log(sumar(numero1, numero2)) 
/* FUNCION 2 CALCULAR IVA DE ALGO  */

let numeroi = parseFloat(prompt("ingresa un precio"))

function multiplicar(numeroi,IVA){
    return numeroi*IVA
}
console.log(multiplicar(numeroi,IVA))

/*FUNCION 3 PROMEDIOS */
let numero3 = parseFloat(prompt("ingresa la nota del primer trimestre"))
let numero4 = parseFloat(prompt("ingresa la nota del segundo trimestre"))
let numero5 = parseFloat(prompt("ingresa la nota del tercer trimestre"))

function PROMEDIOS(numero3,numero4,numero5){
    return (numero3+numero4+numero5) /3
    
}
console.log(PROMEDIOS(numero3,numero4,numero5))

/*se que no son funciones muy complejas pero no se me ocurrian otra cosa perdon*/ 