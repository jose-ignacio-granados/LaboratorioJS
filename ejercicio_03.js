// ejercicio 03
// Concepto: Los parámetros pueden tener valores por defecto.
// Para devolver un objeto desde una función se construye con { ... }.
const crearLibro = (titulo, autor = "Anónimo", año = new Date().getFullYear()) => {
    return { titulo, autor, año };
};

console.log(crearLibro("El Principito", "Saint-Exupéry", 1943));
// { titulo: "El Principito", autor: "Saint-Exupéry", año: 1943 }

console.log(crearLibro("1984"));
// { titulo: "1984", autor: "Anónimo", año: 2026 }