// Ej9 - JavaScript

let edad = prompt("Ingresa tu edad:");
edad = Number(edad);

if (edad < 13 && edad >= 0) {
    console.log("Es un niño");
} else if (edad >= 13 && edad <= 17) {
    console.log("Es un adolescente");
} else if (edad >= 18 && edad <= 110) {
    console.log("Es un adulto");
} else {
    console.log("No es una edad válida");
}
