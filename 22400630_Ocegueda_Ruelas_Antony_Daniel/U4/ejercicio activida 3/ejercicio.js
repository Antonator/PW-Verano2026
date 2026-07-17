//Actividad 3 EJERCICIOS
//Ejercicio 1:
/*Elabora un programa que contenga una función llamada potencia y reciba dos parametros: base y 
exponente. La función deberá retirnar la potencia de acuerdo con los parámetros recibidos.
El cálculo de la potencia se realizará por medio de un ciclo for.
Salida: BASE elevado a POTENCIA es RESULTADO*/
function potencia(base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++){
        resultado *= base;
    }  
    console.log(resultado);
};

//potencia(5, 4);

//Ejercicio 2:
/*Cajero automático:
Simula un cajero con un saldo inicial de $5000. Mostrar un menú:
    1.- Consultar saldo
    2.- Depositar
    3.- Retirar
    4.- Salir
No permitir retirar más dinero del disponible.
*/
//seccion del menu
function mostrarMenu() {
    console.log("----- MENÚ -----");
    console.log("1.- Consultar Saldo");
    console.log("2.- Depositar");
    console.log("3.- Retirar");
    console.log("4.- Salir");
}

//solicita al usuario que ingrese una opción
// Ejercicio 2:
/* Cajero automático:
Simula un cajero con un saldo inicial de $5000. Mostrar un menú:
    1.- Consultar saldo
    2.- Depositar
    3.- Retirar
    4.- Salir
No permitir retirar más dinero del disponible.
*/

// NOTA: prompt() es una función del NAVEGADOR, no de Node.js.
// Este archivo debe ejecutarse en la consola del navegador (F12 -> Console,
// pegando el código) o dentro de un <script> en un HTML. Si lo corres con
// "node cajero.js" dará error porque prompt no existe ahí.

var saldo = 5000;

// sección del menú
function mostrarMenu() {
    console.log("----- MENÚ -----");
    console.log("1.- Consultar Saldo");
    console.log("2.- Depositar");
    console.log("3.- Retirar");
    console.log("4.- Salir");
}

// solicita al usuario que ingrese una opción
function getOpcion() {
    let opcion = parseInt(prompt("Elige una opción del menú: "));
    return opcion;
}

function consultarSaldo() {
    console.log("Tu saldo disponible es de: $" + saldo);
    cajero();
}

function depositarSaldo() {
    let deposito = parseFloat(prompt("Ingresa el monto a depositar: "));

    if (isNaN(deposito) || deposito <= 0) {
        console.log("Monto inválido. Intenta de nuevo.");
        return cajero();
    }

    saldo = saldo + deposito;
    console.log("Depositaste: $" + deposito + ". Saldo disponible ahora: $" + saldo);
    cajero();
}

function retirarSaldo() {
    let retiro = parseFloat(prompt("Ingresa el monto a retirar: "));

    if (isNaN(retiro) || retiro <= 0) {
        console.log("Monto inválido. Intenta de nuevo.");
        return cajero();
    }

    if (retiro > saldo) {
        console.log("Fondos insuficientes. Tu saldo disponible es: $" + saldo);
        return cajero();
    }

    saldo = saldo - retiro;
    console.log("Retiraste: $" + retiro + ". Saldo disponible ahora: $" + saldo);
    cajero();
}

function salir() {
    console.log("Gracias por usar el cajero. ¡Hasta luego!");
}

function cajero() {
    mostrarMenu();
    switch (getOpcion()) {
        case 1: consultarSaldo(); break;
        case 2: depositarSaldo(); break;
        case 3: retirarSaldo(); break;
        case 4: salir(); break;
        default:
            console.log("Opción inválida.");
            cajero();
    }
}

//cajero();


// Ejercicio 3:
/* Genera dos dados hasta que ambos tengan el mismo valor.
Salida de ejemplo:
3-5
1-6
2-4
6-6
Se necesitaron 4 lanzamientos
*/
function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1; // número entre 1 y 6
}

let dado1, dado2;
let intentos = 0;

do {
    dado1 = lanzarDado();
    dado2 = lanzarDado();
    intentos++;
    console.log(dado1 + "-" + dado2);
} while (dado1 !== dado2);

console.log("Se necesitaron " + intentos + " lanzamientos");

// Ejercicio 4:
/* Adivinar número
La computadora genera un número entre 1 y 100. El usuario tiene máximo de 7 intentos.
Después de cada intento indicar más grande o más pequeño */
let numeroSecreto = Math.floor(Math.random() * 100) + 1; // número entre 1 y 100
let intentosMax = 7;
let intento = 0;
let adivinado = false;

while (intento < intentosMax && !adivinado) {
    let intentosRestantes = intentosMax - intento;
    let respuesta = prompt("Adivina el número (1-100). Te quedan " + intentosRestantes + " intentos: ");
    let numero = parseInt(respuesta);

    intento++;

    if (isNaN(numero)) {
        console.log("Eso no es un número válido.");
        continue;
    }

    if (numero === numeroSecreto) {
        adivinado = true;
        console.log("¡Correcto! El número era " + numeroSecreto + ". Lo lograste en " + intento + " intentos.");
    } else if (numero < numeroSecreto) {
        console.log("Más grande.");
    } else {
        console.log("Más pequeño.");
    }
}

if (!adivinado) {
    console.log("Se acabaron tus intentos. El número era: " + numeroSecreto);
}

//Ejercicio 5
const ventas = []; // Arreglo de objetos: cada objeto es una venta

// --- 1. Registrar ventas mediante prompt() ---
let seguirRegistrando = true;

while (seguirRegistrando) {
    const vendedor = prompt("Nombre del vendedor:");
    const producto = prompt("Nombre del producto:");
    const cantidad = parseInt(prompt("Cantidad vendida:"), 10);
    const precioUnitario = parseFloat(prompt("Precio unitario:"));

    // Validación básica
    if (!vendedor || !producto || isNaN(cantidad) || isNaN(precioUnitario)) {
        alert("Datos inválidos. Se omitirá esta venta.");
    } else {
        const venta = {
            vendedor: vendedor.trim(),
            producto: producto.trim(),
            cantidad: cantidad,
            precioUnitario: precioUnitario,
            subtotal: cantidad * precioUnitario,
        };
        ventas.push(venta);
    }

    seguirRegistrando = confirm("¿Deseas registrar otra venta?");
}

// --- 2. Total de ventas realizadas ---
const totalVentas = ventas.length;

// --- 3. Total de ingresos generados (reduce) ---
const totalIngresos = ventas.reduce((acumulado, venta) => acumulado + venta.subtotal, 0);

// --- 4. Unidades vendidas por producto (forEach + objeto acumulador) ---
const unidadesPorProducto = {};

ventas.forEach((venta) => {
    if (unidadesPorProducto[venta.producto]) {
        unidadesPorProducto[venta.producto] += venta.cantidad;
    } else {
        unidadesPorProducto[venta.producto] = venta.cantidad;
    }
});

// --- 5. Vendedor con mayor monto en ventas ---
const totalesPorVendedor = {};

ventas.forEach((venta) => {
    if (totalesPorVendedor[venta.vendedor]) {
        totalesPorVendedor[venta.vendedor] += venta.subtotal;
    } else {
        totalesPorVendedor[venta.vendedor] = venta.subtotal;
    }
});

let mejorVendedor = "";
let mejorMonto = 0;

for (const vendedor in totalesPorVendedor) {
    if (totalesPorVendedor[vendedor] > mejorMonto) {
        mejorMonto = totalesPorVendedor[vendedor];
        mejorVendedor = vendedor;
    }
}

// --- 6. Mostrar resultados en consola ---
console.log("========== REPORTE DE VENTAS ==========");
console.log(`Total de ventas realizadas: ${totalVentas}`);
console.log(`Total de ingresos: $${totalIngresos.toFixed(2)}`);

console.log("\nUnidades vendidas por producto:");
Object.keys(unidadesPorProducto).forEach((producto) => {
    console.log(`- ${producto}: ${unidadesPorProducto[producto]} unidades`);
});

console.log(`\nVendedor con más ventas: ${mejorVendedor} ($${mejorMonto.toFixed(2)})`);
console.log("========================================");

// --- Extra: detalle completo con map() ---
const detalle = ventas.map(
    (v, i) =>
        `#${i + 1} | ${v.vendedor} vendió ${v.cantidad} x ${v.producto} = $${v.subtotal.toFixed(2)}`
);
console.log("\nDetalle de todas las ventas:");
detalle.forEach((linea) => console.log(linea));