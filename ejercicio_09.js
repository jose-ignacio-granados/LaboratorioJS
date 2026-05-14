// ejercicio 09
// Concepto: ?. para acceso seguro, ?? para dar un valor solo si es null/undefined.
const config = {
    servidor: {
        cache: {
            ttl: 0   // 0 es válido
        }
    }
};
const ttlFinal = config?.servidor?.cache?.ttl ?? 3600; // 0 (el 0 se respeta)
const timeout = config?.servidor?.timeout ?? 5000;        // 5000 (no existe)
console.log(ttlFinal, timeout); // 0 5000