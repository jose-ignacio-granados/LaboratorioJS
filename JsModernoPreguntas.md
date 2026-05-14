## Evaluación Práctica en Pareja: JavaScript Moderno 
**ID:** JS-001 | **Tiempo estimado:** 2 horas  

**Instrucciones**  
- Completa los `________` para que el código se ejecute sin errores y produzca la salida indicada.  
- Guarda cada bloque en un archivo: `ej01.js` … `ej20.js`.  
- Ejecuta con Node.js (v18+) o en la consola del navegador.  
- **No uses `var`, `for` tradicionales.**  
- Entrega los 20 archivos `.js`.

```javascript
// ==========================================
// Evaluación en Pareja
// Estudiante 1: José Ignacio Granados
// Estudiante 2: Javier Lugo
// Fecha: 14/05/2026
// 
// ==========================================
```

---

### Ejercicio 1 – Ámbito y declaración: `let` vs `const`
```javascript
// Concepto: let y const respetan el bloque; const impide reasignación, let la permite.
// Completa con let o const según corresponda para obtener la salida indicada.

_____ x = 10;
if (true) {
    _____ x = 20;          // declara una nueva variable en este bloque
    console.log(x);        // 20
}
console.log(x);            // 10

_____ obj = { valor: 5 };
obj.valor = 8;             // mutación permitida
// obj = {};               // Error si la palabra clave es correcta
console.log(obj.valor);    // 8
```

### Ejercicio 2 – `const` con objetos, mutación e inmutabilidad con spread
```javascript
// Concepto: `const` impide reasignar la variable, pero permite modificar propiedades.
const persona = { nombre: "Ada", edad: 25 };
persona.edad = 26;                 // mutación válida

// Completa para crear una copia con una propiedad adicional, sin alterar el original:
const actualizado = { ...________, activo: true };
console.log(actualizado); // { nombre: "Ada", edad: 26, activo: true }

// Ahora completa para mostrar la edad del objeto original:
console.log(________);   // 26
```

### Ejercicio 3 – Parámetros por defecto y retorno de objeto literal
```javascript
// Concepto: Los parámetros pueden tener valores por defecto.
// Para devolver un objeto desde una función se construye con { ... }.
const crearLibro = (titulo, autor = "Anónimo", año = new Date().getFullYear()) => {
    return ________;
};

console.log(crearLibro("El Principito", "Saint-Exupéry", 1943));
// { titulo: "El Principito", autor: "Saint-Exupéry", año: 1943 }

console.log(crearLibro("1984"));
// { titulo: "1984", autor: "Anónimo", año: 2025 }
```

### Ejercicio 4 – Rest operator: agrupar en una función variádica
```javascript
// Concepto: ...rest captura argumentos sobrantes en un array real.
function generarInforme(categoria, ...________) {
    return `Informe de ${categoria}: ${items.join(" – ")}`;
}
console.log(generarInforme("Ventas", "Enero", "Febrero", "Marzo"));
// "Informe de Ventas: Enero – Febrero – Marzo"
```

### Ejercicio 5 – Spread operator e inmutabilidad en arrays y objetos
```javascript
// Concepto: El spread copia superficialmente; útil para inmutabilidad.
const valores = [10, 20, 30];
const doble = valores.map(n => n * 2);
// Usando spread, crea un array con el primer elemento de 'valores', luego los duplicados:
const mezcla = [valores[0], ...________];
console.log(mezcla); // [10, 20, 40, 60]

// Completa para clonar un objeto y sobrescribir una propiedad:
const objBase = { x: 1, y: 2 };
const objMod = { ...objBase, y: ________ };
console.log(objMod); // { x: 1, y: 100 }
```

### Ejercicio 6 – Optional chaining con índice dinámico y método
```javascript
// Concepto: ?.[variable] accede a una posición de array de forma segura; ?.() llama a métodos.
const estructura = {
    bloques: [
        { id: "a", ejecutar: () => "A ejecutado" },
        null,
        { id: "c", acciones: ["imprimir"] }
    ]
};
const idx = 0;
const res0 = estructura.bloques?.[________]?.ejecutar?.();
console.log(res0); // "A ejecutado"
const res1 = estructura.bloques?.[1]?.________?.();
console.log(res1); // undefined
const res2 = estructura.bloques?.[2]?.acciones?.[0];
console.log(res2); // "imprimir"
```

### Ejercicio 7 – Encadenamiento .filter, .map y .join
```javascript
// Concepto: Puedes encadenar varios métodos de array. .join() convierte un array en una cadena.
const productos = [
    { nombre: "Laptop", precio: 1000, activo: true },
    { nombre: "Mouse", precio: 20, activo: true },
    { nombre: "Teclado", precio: 50, activo: true },
    { nombre: "Monitor", precio: 200, activo: false }
];
const lista = productos
    .____(p => p.activo && p.precio > 30)
    .____(p => p.nombre)
    .____(" – ");
console.log(lista); // "Laptop – Teclado"
```

### Ejercicio 8 – Destructuring profundo con alias y valor por defecto
```javascript
// Concepto: Extrae propiedades anidadas, asígnale alias y define un valor por defecto si no existe.
const pedido = {
    id: 101,
    cliente: {
        nombre: "Carlos",
        direccion: {
            ciudad: "Lima"
        }
    }
};
const {
    id,
    cliente: {
        nombre: clienteNombre,
        direccion: { ciudad: ciudadEntrega = "Sin dirección" }
    }
} = pedido;
console.log(clienteNombre, ciudadEntrega); // "Carlos" "Lima"

// Completa para que en el siguiente objeto sin dirección se obtenga "Desconocida":
const pedido2 = { id: 102, cliente: { nombre: "Ana" } };
const { cliente: { direccion: { ciudad = ________ } = {} } } = pedido2;
console.log(ciudad); // "Desconocida"
```

### Ejercicio 9 – Optional chaining combinado con nullish coalescing
```javascript
// Concepto: ?. para acceso seguro, ?? para dar un valor solo si es null/undefined.
const config = {
    servidor: {
        cache: {
            ttl: 0   // 0 es válido
        }
    }
};
const ttlFinal = config?.servidor?.cache?.ttl ________ 3600; // 0 (el 0 se respeta)
const timeout = config?.servidor?.timeout ?? 5000;        // 5000 (no existe)
console.log(ttlFinal, timeout); // 0 5000
```

### Ejercicio 10 – Nullish coalescing y operadores lógicos de asignación
```javascript
// Concepto: ??= asigna si la variable es null/undefined, respetando falsy.
const ajustes = { compresion: false, nivel: 0 };
ajustes.compresion ??= true; // no cambia (false no es null/undefined)
ajustes.nivel ________ 5;    // sí cambia porque nivel es 0, que es falsy pero no null/undefined
// ¿Qué operador de asignación completa la línea? (escribe el operador)
console.log(ajustes); // { compresion: false, nivel: 5 }
```

### Ejercicio 11 – Arrow function con parámetros destructurados y retorno implícito de objeto
```javascript
// Concepto: Desestructura en la firma y devuelve un objeto con propiedades calculadas.
const formatear = ({ nombre, edad, pais = "No especificado" }) =>
    ({ nombre, edad, etiqueta: `${nombre} (${pais})` });

console.log(formatear({ nombre: "Luis", edad: 30, pais: "Perú" }));
// { nombre: "Luis", edad: 30, etiqueta: "Luis (Perú)" }

// Ahora completa la versión con parámetros separados y rest:
const resumir = (titulo, ...________) =>
    ({ titulo, total: datos.length, primer: datos[0] });
console.log(resumir("Ventas", "Enero", "Febrero"));
// { titulo: "Ventas", total: 2, primer: "Enero" }
```

### Ejercicio 12 – Métodos de array: .map, .filter y .find
```javascript
// Concepto: Transforma, filtra y busca elementos sin bucles.
const empleados = [
    { id: 1, nombre: "Ana", area: "TI", activo: true },
    { id: 2, nombre: "Luis", area: "Ventas", activo: false },
    { id: 3, nombre: "Mía", area: "TI", activo: true }
];
// Obtén un array con los nombres de los empleados activos del área "TI"
const activosTI = empleados
    .____(e => e.activo && e.area === "TI")
    .____(e => e.nombre);
console.log(activosTI); // ["Ana", "Mía"]

// Encuentra el primer empleado inactivo
const inactivo = empleados.____(e => !e.activo);
console.log(inactivo); // { id: 2, nombre: "Luis", area: "Ventas", activo: false }
```

### Ejercicio 13 – .some() y .every()
```javascript
// Concepto: .some() comprueba si al menos uno cumple; .every() si todos cumplen.
const calificaciones = [85, 92, 78, 95];
const todosAprobados = calificaciones.________(n => n >= 70);  // true
const algunSobresaliente = calificaciones.________(n => n >= 90); // true
console.log(todosAprobados, algunSobresaliente);
```

### Ejercicio 14 – Clases con campos privados, herencia y `super` (dificultad alta)
```javascript
// Concepto: Las clases pueden tener miembros privados con #; extends y super construyen la jerarquía.
// Los getters permiten acceder de forma controlada a los campos privados.
class Dispositivo {
    #encendido = false;
    constructor(marca) { this.marca = marca; }
    encender() { this.#encendido = true; return `${this.marca} encendido`; }
    get estado() { return this.#encendido; }
}
class Telefono ________ Dispositivo {
    #garantia;               // meses de garantía
    constructor(marca, modelo, garantia) {
        super(marca);
        this.modelo = modelo;
        this.#garantia = ________;
    }
    infoCompleta() {
        return `${this.marca} ${this.modelo} - Garantía: ${this.#garantia} meses - Estado: ${this.estado ? "activo" : "apagado"}`;
    }
}
const t = new Telefono("Xiaomi", "13T", 24);
console.log(t.encender());     // "Xiaomi encendido"
console.log(t.infoCompleta()); // "Xiaomi 13T - Garantía: 24 meses - Estado: activo"
```

### Ejercicio 15 – Async/Await con función flecha, dos `await` y llamada de prueba
```javascript
// Concepto: async/await permite código asíncrono secuencial; la función devuelve una promesa.
const obtenerUsuario = ________ (id) => {
    try {
        const respuesta = ________ fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!respuesta.ok) throw new Error("Error de red");
        const datos = ________ respuesta.json();
        console.log(datos.name);
    } catch (error) {
        console.error(error.message);
    }
};

// Llamada de prueba: debe mostrar "Leanne Graham" en la consola
obtenerUsuario(1);
```

### Ejercicio 16 – Módulos: export named, default e import (Moneda BsD)
```javascript
// ── helpers.js ──
export const currency = (n) => `BsD ${n.toFixed(2)}`;
export default function iva(monto) { return monto * 0.18; }
export const descuento = (monto, pct) => monto * (1 - pct / 100);

// ── main.js ──
import iva, { currency, ________ } from "./helpers.js";
console.log(iva(100));                // 18
console.log(currency(99.9));          // "BsD 99.90"
console.log(descuento(100, 20));      // 80
```

### Ejercicio 17 – Template literal con expresión anidada y ternario
```javascript
// Concepto: Dentro de `${}` puedes poner operadores ternarios y otras expresiones.
const stock = 5;
const estado = stock > 10 ? "Alto" : (stock > 0 ? "Bajo" : "Agotado");
const mensaje = `Estado del producto: ${stock > 0 ? `Quedan ${stock}` : ________}`;
console.log(mensaje); // "Estado del producto: Quedan 5"
```

### Ejercicio 18 – Set: diferencia y verificación de pertenencia
```javascript
// Concepto: Un Set facilita operaciones de conjunto. Usa .has() para comprobar pertenencia.
const conocidos = new Set(["Ana", "Luis", "Mía"]);
const asistentes = ["Luis", "Pedro", "Mía"];
// Crea un array con los asistentes que NO son conocidos
const nuevos = asistentes.filter(nombre => !conocidos.________(nombre));
console.log(nuevos); // ["Pedro"]

// Completa para eliminar duplicados de un array usando Set:
const repetidos = [1, 2, 2, 3, 3, 3];
const unicos = [...new ________(repetidos)];
console.log(unicos); // [1, 2, 3]
```

### Ejercicio 19 – Optional chaining con acceso a índices y métodos
```javascript
// Concepto: ?.[] y ?.() evitan errores si el elemento o método no existe.
const tienda = {
    secciones: [
        { nombre: "Electrónica", productos: [{ nombre: "TV" }] },
        null
    ]
};
// Accede de forma segura al nombre del primer producto de la primera sección
const primerProducto = tienda?.secciones?.[0]?.productos?.[0]?.________;
console.log(primerProducto); // "TV"

// Intenta acceder a la sección nula y a su primer producto
const segundoProducto = tienda?.secciones?.[1]?.productos?.[0]?.nombre;
console.log(segundoProducto); // undefined
```

### Ejercicio 20 – Desestructuración con rest en parámetros y retorno de objeto
```javascript
// Concepto: Recoge el resto de propiedades en un objeto y devuelve un nuevo objeto resumen.
function partirObjeto({ id, nombre, ...________ }) {
    return { identificador: id, extra: resto };
}
const entrada = { id: 123, nombre: "Teclado", color: "negro", precio: 49.99 };
console.log(partirObjeto(entrada));
// { identificador: 123, extra: { nombre: "Teclado", color: "negro", precio: 49.99 } }
```

