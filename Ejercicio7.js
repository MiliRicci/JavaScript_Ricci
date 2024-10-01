// Ej7 - JavaScript

let num1 = prompt("Ingrese el primer número:");
num1 = Number(num1);

let num2 = prompt("Ingresa el segundo número:");
num2 = Number(num2);

// Comparar
if (num1 > num2) {
    console.log("El número más grande es: " + num1);
} else if (num2 > num1) {
    console.log("El número más grande es: " + num2);
} else {
    console.log("Ambos números son iguales.");
}
