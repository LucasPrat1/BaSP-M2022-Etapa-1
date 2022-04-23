// Excercise A

var randomNum = Math.random()
if (randomNum>=0.5) {
    console.log("ex04-If Else-A: ",randomNum," is Greater than 0,5");
} else {
    console.log("ex04-If Else-A: ",randomNum," is Lower than 0,5");
}

// Excercise B

var age = Math.floor(Math.random() * 100);
if (age < 2) {
    console.log("ex04-If Else-B: Age: ", age ,"Es Bebe");
} else if (age >= 2 && age <= 12) {
    console.log("ex04-If Else-B: Age: ", age ,"Es Niño");
} else if (age >= 13 && age <= 19) {
    console.log("ex04-If Else-B: Age: ", age ,"Es Adolescente");
} else if (age >= 20 && age <= 30) {
    console.log("ex04-If Else-B: Age: ", age ,"Es Joven");
} else if (age >= 31 && age <= 60) {
    console.log("ex04-If Else-B: Age: ", age ,"Es Adulto");
} else if (age >= 61 && age <= 75) {
    console.log("ex04-If Else-B: Age: ", age ,"Es Adulto Mayor");
} else if (age > 75) {
    console.log("ex04-If Else-B: Age: ", age ,"Es Anciano");
}
