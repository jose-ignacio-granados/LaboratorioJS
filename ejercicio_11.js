// ejercicio 11
const formatear = ({ nombre, edad, pais = "No especificado" }) =>
    ({ nombre, edad, etiqueta: `${nombre} (${pais})` });

console.log(formatear({ nombre: "Luis", edad: 30, pais: "Perú" }));
// { nombre: "Luis", edad: 30, etiqueta: "Luis (Perú)" }

// Ahora completa la versión con parámetros separados y rest:
const resumir = (titulo, ...datos) =>
    ({ titulo, total: datos.length, primer: datos[0]  });
console.log(resumir("Ventas", "Enero", "Febrero"));
// { titulo: "Ventas", total: 2, primer: "Enero" } 