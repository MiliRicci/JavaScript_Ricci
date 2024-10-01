// Ej6 - JavaScript

let angulo1 = prompt("Primer ángulo:");
let angulo2 = prompt("Segundo ángulo:");
let angulo3 = prompt("Tercer ángulo:");
angulo1 = Number(angulo1);
angulo2 = Number(angulo2);
angulo3 = Number(angulo3);

// Determinar si el triángulo es valido
function Valido(a1, a2, a3) {
    return (a1 + a2 + a3 === 180) && (a1 > 0 && a2 > 0 && a3 > 0);
}

// Verificar y mostrar
if (Valido(angulo1, angulo2, angulo3)) {
    console.log("Los ángulos ingresados forman un triángulo válido.");
} else {
    console.log("Los ángulos ingresados no forman un triángulo válido.");
}
