///////////////// Excercise A

function suma(a = 0,b = 0) {
    return a + b;
}
var resultado = suma(15,32);
console.log("ex06-Functions-A: resultado: ",resultado);

///////////////// Excercise B

function suma(a = 0,b = 0) {
    if (typeof a == "number" && typeof b == "number" ) {
        return a + b;
    } else {
        alert("ERROR uno de los parametros no es un numero");
        return NaN;
    }
}
var resultado = suma(20,48);
console.log("ex06-Functions-B: resultado: ",resultado);

/////////////// Excercise C

function validateInteger(x) {
    if (x % 1 == 0) {
        return true;
    } else {
        return false;
    }
}
var entero = validateInteger(55.55);
console.log("ex06-Functions-C: Entero: ",entero);

/////////////// Excercise D

function suma(a = 0,b = 0) {
    if (typeof a == "number" && typeof b == "number" ) {
        if (validateInteger(a) == true && validateInteger(b) == true) {
            return a + b;
        } else {
            if (validateInteger(a) == false) {
                alert("ERROR el parametro " + a + " no es entero");
                return Math.round(a)
            } else {
                alert("ERROR el parametro " + b + " no es entero");
                return Math.round(b)
            }
        } 
    } else {
        alert("ERROR uno de los parametros no es un numero");
        return NaN;
    }
}
var resultado = suma(38,25);
console.log("ex06-Functions-D: resultado: ",resultado);

/////////////// Excercise E

function validacionSuma(a,b) {
    if (typeof a == "number" && typeof b == "number" ) {
        if (validateInteger(a) == true && validateInteger(b) == true) {
            return true;
        } else {
            if (validateInteger(a) == false) {
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
function suma(a,b) {
    var sum = validacionSuma(a,b);
    if (sum == true) {
        return a + b;
    } else return sum;
}
var resultado = suma(504,2584);
console.log("ex06-Functions-E: resultado: ",resultado);