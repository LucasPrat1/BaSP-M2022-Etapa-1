///////////////// Excercise A

function sumaA(a,b) {
    return a + b;
}
var resultadoA = sumaA(15,32);
console.log("ex06-Functions-A: resultado: ",resultadoA);

///////////////// Excercise B

function sumaB(a,b) {
    if (isNaN(a) || isNaN(b)) {
        alert("ERROR uno de los parametros no es un numero");
        return NaN;
    }
    return a + b
}
var resultadoB = sumaB(24,75);
console.log("ex06-Functions-B: resultado: ",resultadoB);

/////////////// Excercise C

function validateInteger(x) {
    return  Number.isInteger(x) 
}
var entero = validateInteger(5566);
console.log("ex06-Functions-C: Entero: ",entero);

/////////////// Excercise D

function validacionSuma(a = 0,b = 0) {
    if (!isNaN(a) && !isNaN(b)) {
        if (validateInteger(a) && validateInteger(b)) {
            return a + b;
        } else {
            if (!validateInteger(a)) {
                alert("ERROR el parametro " + a + " no es entero");
                return Math.round(a);
            } else {
                alert("ERROR el parametro " + b + " no es entero");
                return Math.round(b);
            }
        }
    } else {
        alert("ERROR uno de los parametros no es un numero");
        return NaN;
    }
}
var resultadoD = validacionSuma(444,52);
console.log("ex06-Functions-D: resultado: ",resultadoD);

/////////////// Excercise E

function sumaE(a,b) {
    return validacionSuma(a,b);
}
var resultadoE = sumaE(2452,4234);
console.log("ex06-Functions-E: resultado: ",resultadoE);