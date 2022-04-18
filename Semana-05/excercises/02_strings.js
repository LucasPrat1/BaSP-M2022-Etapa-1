// Excercise A

var txt = "Lucas Exequiel Prat";
console.log("ex02-Strings-A:", txt.toUpperCase());

// Excercise B

var txt1 = "Lucas Exequiel Prat";
var primeros5 = txt1.substring(0, 5);
console.log("ex02-Strings-B:", primeros5);

// Excercise C

var txt3 = "Lucas Exequiel Prat";
var ultimos3 = txt3.substring(txt3.length - 3);
console.log("ex02-Strings-C:", ultimos3);

// Excercise D

var txt4 = "Lucas Exequiel Prat";
var primeraMayuscula = (txt4.substring(0, 1)).toUpperCase() + (txt4.substring(1)).toLowerCase();
console.log("ex02-Strings-D:", primeraMayuscula);

// Excercise E

var txt5 = "Lucas Exequiel Prat";
var espacioVacio = txt5.indexOf(" ");
console.log("ex02-Strings-E:", espacioVacio);

// Excercise F

var txt6 = "lucas exequiel";
var espacio = txt6.indexOf(" ");
var nuevoTxt =
    (txt6.substring(0, 1)).toUpperCase() +
    (txt6.substring(1, espacio)).toLowerCase() + " " +
    (txt6.substring(espacio + 1, espacio + 2)).toUpperCase() +
    (txt6.substring(espacio + 2)).toLowerCase();
console.log("ex02-Strings-F:", nuevoTxt);