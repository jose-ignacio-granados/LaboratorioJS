// Concepto: Un Set facilita operaciones de conjunto. Usa .has() para comprobar pertenencia.
const conocidos = new Set(["Ana", "Luis", "Mía"]);
const asistentes = ["Luis", "Pedro", "Mía"];
// Crea un array con los asistentes que NO son conocidos
const nuevos = asistentes.filter(nombre => !conocidos.has(nombre));
console.log(nuevos); // ["Pedro"]

// Completa para eliminar duplicados de un array usando Set:
const repetidos = [1, 2, 2, 3, 3, 3];
const unicos = [...new Set(repetidos)];
console.log(unicos); // [1, 2, 3]