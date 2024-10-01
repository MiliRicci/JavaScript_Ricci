// Ej4 - JavaScript

let num = prompt("Ingrese un número:");
num = Number(num);

// Crear función
function Divisible(num) {
    return num % 5 === 0;
}

if (Divisible(num)) {
    console.log(num + " si es divisible por 5.");
} else {
    console.log(num + " no es divisible por 5.");
}
