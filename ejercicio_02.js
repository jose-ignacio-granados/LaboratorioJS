// Ejercicio 2
// Concepto: `const` impide reasignar la variable, pero permite modificar propiedades.
const persona = { nombre: "Ada", edad: 25 };
persona.edad = 26;                 // mutación válida

// Completa para crear una copia con una propiedad adicional, sin alterar el original:
const actualizado = { ...persona, activo: true };
console.log(actualizado); // { nombre: "Ada", edad: 26, activo: true }

// Ahora completa para mostrar la edad del objeto original:
console.log(persona.edad);   // 26