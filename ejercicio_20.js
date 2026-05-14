// ejercicio 20
//  Concepto: Recoge el resto de propiedades en un objeto y devuelve un nuevo objeto resumen.
function partirObjeto({ id, ...resto }) {
    return { identificador: id, extra: resto };
}
const entrada = { id: 123, nombre: "Teclado", color: "negro", precio: 49.99 };
console.log(partirObjeto(entrada));
// { identificador: 123, extra: { nombre: "Teclado", color: "negro", precio: 49.99 } }