// Excercise A

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
            "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("ex03-Arrays-A: ", meses[5], meses[11]);

// Excercise B

var mesesAlfa = meses.slice();
console.log("ex03-Arrays-B: ", mesesAlfa.sort());

// Excercise C

meses.unshift("Primero");
meses.push("Ultimo");
console.log("ex03-Arrays-C: ", meses);

// Excercise D

meses.shift();
meses.pop();
console.log("ex03-Arrays-D: ", meses);

// Excercise E

console.log("ex03-Arrays-E: ", meses.reverse());

// Excercise F

console.log("ex03-Arrays-F: ", meses.join("-"));

// Excercise G

console.log("ex03-Arrays-G: ", (meses.reverse()).slice(4, 11));