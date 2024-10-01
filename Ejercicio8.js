// Ej8 - JavaScript

let year = prompt("Ingresa un año:");
year = Number(year);

function Bisiesto(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

if (Bisiesto(year)) {
    console.log("El año ingresado es bisiesto.");
} else {
    console.log("El año ingresado no es bisiesto.");
}
