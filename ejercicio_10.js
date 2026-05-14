// ejercicio 10
// Concepto: ??= asigna si la variable es null/undefined, respetando falsy.
const ajustes = { compresion: false, nivel: 0 };
ajustes.compresion ??= true; // no cambia (false no es null/undefined)
ajustes.nivel ||= 5;    // sí cambia porque nivel es 0, que es falsy pero no null/undefined
// ¿Qué operador de asignación completa la línea? (escribe el operador)
// ??=
console.log(ajustes); // { compresion: false, nivel: 5 }