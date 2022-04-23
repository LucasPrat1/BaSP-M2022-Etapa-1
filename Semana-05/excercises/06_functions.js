///////////////// Excercise A
/* Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */

function sumaA(a,b) {
    return a + b;
}
var resultadoA = sumaA(15,32);
console.log("ex06-Functions-A: resultado: ",resultadoA);

///////////////// Excercise B
/* A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */

function sumaB(a,b) {
    if (isNaN(a) || isNaN(b)) {
        alert("ERROR one of the parameters is not a number");
        return NaN;
    }
    return a + b
}
var resultadoB = sumaB(24,75);
console.log("ex06-Functions-B: resultado: ",resultadoB);

/////////////// Excercise C
/* Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero. */

function validateInteger(x) {
    return  Number.isInteger(x) 
}
var entero = validateInteger(5566);
console.log("ex06-Functions-C: Entero: ",entero);

/////////////// Excercise D
/* A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado). */

function validacionSuma(a = 0,b = 0) {
    if (!isNaN(a) && !isNaN(b)) {
        if (validateInteger(a) && validateInteger(b)) {
            return a + b;
        } else {
            if (!validateInteger(a)) {
                alert("ERROR parameter " + a + " is not integer");
                return Math.round(a);
            } else {
                alert("ERROR parameter " + b + " is not integer");
                return Math.round(b);
            }
        }
    } else {
        alert("ERROR one of the parameters is not a number");
        return NaN;
    }
}
var resultadoD = validacionSuma(4.44,5.2);
console.log("ex06-Functions-D: resultado: ",resultadoD);

/////////////// Excercise E
/* Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual. */

function sumaE(a,b) {
    return validacionSuma(a,b);
}
var resultadoE = sumaE(2452,4234);
console.log("ex06-Functions-E: resultado: ",resultadoE);