// Concepto: ?.[] y ?.() evitan errores si el elemento o método no existe.
const tienda = {
    secciones: [
        { nombre: "Electrónica", productos: [{ nombre: "TV" }] },
        null
    ]
};
// Accede de forma segura al nombre del primer producto de la primera sección
const primerProducto = tienda?.secciones?.[0]?.productos?.[0]?.nombre;
console.log(primerProducto); // "TV"

// Intenta acceder a la sección nula y a su primer producto
const segundoProducto = tienda?.secciones?.[1]?.productos?.[0]?.nombre;
console.log(segundoProducto); // undefined