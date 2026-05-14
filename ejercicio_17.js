//17.
// Concepto: Dentro de `${}` puedes poner operadores ternarios y otras expresiones.
const stock = 5;
const estado = stock > 10 ? "Alto" : (stock > 0 ? "Bajo" : "Agotado");
const mensaje = `Estado del producto: ${stock > 0 ? `Quedan ${stock}` : "Agotado"}`;
console.log(mensaje); // "Estado del producto: Quedan 5"