// Excercise A

var palabras = ["auto", "moto", "barco", "avion", "bicicleta"];
for (var index = 0; index < palabras.length; index++) {
    console.log("ex05-For-A: word ", index, ":", palabras[index]);
}

// Excercise B

for (var index = 0; index < palabras.length; index++) {
    palabras[index] = palabras[index].substring(0, 1).toUpperCase() + palabras[index].substring(1);
    console.log("ex05-For-B: modified word ", index, ":", palabras[index]);
}

// Excercise C

var sentence = "";
for (var index = 0; index < palabras.length; index++) {
    var sentence = sentence + " " + palabras[index];
}
console.log("ex05-For-C: sentence:", sentence);

// Escercise D

var arrayVacio = [];
for (let index = 0; index < 10; index++) {
    arrayVacio[index] = index;
}
console.log("ex05-For-D: full array: ",arrayVacio)