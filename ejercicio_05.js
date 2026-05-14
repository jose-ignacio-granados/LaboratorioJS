// ejercicio 05
// Concepto: El spread copia superficialmente; útil para inmutabilidad.
const valores = [10, 20, 30];
const doble = valores.map(n => n * 2);
// Usando spread, crea un array con el primer elemento de 'valores', luego los duplicados:
const mezcla = [valores[0], ...doble];
console.log(mezcla); // [10, 20, 40, 60]

// Completa para clonar un objeto y sobrescribir una propiedad:
const objBase = { x: 1, y: 2 };
const objMod = { ...objBase, y: 100 };
console.log(objMod); // { x: 1, y: 100 }