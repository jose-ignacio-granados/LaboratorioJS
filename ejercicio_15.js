

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