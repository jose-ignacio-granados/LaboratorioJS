// ejercicio 07
// Concepto: Puedes encadenar varios métodos de array. .join() convierte un array en una cadena.
const productos = [
    { nombre: "Laptop", precio: 1000, activo: true },
    { nombre: "Mouse", precio: 20, activo: true },
    { nombre: "Teclado", precio: 50, activo: true },
    { nombre: "Monitor", precio: 200, activo: false }
];
const lista = productos
    .filter(p => p.activo && p.precio > 30)
    .map(p => p.nombre)
    .join(" – ");
console.log(lista); // "Laptop – Teclado"