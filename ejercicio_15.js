

// Concepto: async/await permite código asíncrono secuencial; la función devuelve una promesa.
const obtenerUsuario = async (id) => {
    try {
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!respuesta.ok) throw new Error("Error de red");
        const datos = await respuesta.json();
        console.log(datos.name);
    } catch (error) {
        console.error(error.message);
    }
};

// Llamada de prueba: debe mostrar "Leanne Graham" en la consola
obtenerUsuario(1);