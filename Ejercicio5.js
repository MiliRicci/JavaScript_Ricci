// Ej5 - JavaScript

let gradosFa = prompt("Ingresa la temperatura en grados Fahrenheit:");
gradosFa = Number(gradosFa);

//convertir a grados Celsius
function convertir(gradosFa) {
    return (gradosFa - 32) * 5 / 9;
}

// Convertir la temperatura a grados Celsius
let gradosCe = convertir(gradosFa);

console.log(gradosFa + " grados Fahrenheit equivalen a " + gradosCe.toFixed(2) + " grados Celsius.");
// .toFixed(x) redondean en x decimales, vos decidis cuantos
