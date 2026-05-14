

// Concepto: Las clases pueden tener miembros privados con #; extends y super construyen la jerarquía.
// Los getters permiten acceder de forma controlada a los campos privados.
class Dispositivo {
    #encendido = false;
    constructor(marca) { this.marca = marca; }
    encender() { this.#encendido = true; return `${this.marca} encendido`; }
    get estado() { return this.#encendido; }
}
class Telefono extends Dispositivo {
    #garantia;               // meses de garantía
    constructor(marca, modelo, garantia) {
        super(marca);
        this.modelo = modelo;
        this.#garantia = garantia;
    }
    infoCompleta() {
        return `${this.marca} ${this.modelo} - Garantía: ${this.#garantia} meses - Estado: ${this.estado ? "activo" : "apagado"}`;
    }
}
const t = new Telefono("Xiaomi", "13T", 24);
console.log(t.encender());     // "Xiaomi encendido"
console.log(t.infoCompleta()); // "Xiaomi 13T - Garantía: 24 meses - Estado: activo"