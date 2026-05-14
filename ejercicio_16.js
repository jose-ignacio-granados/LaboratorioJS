
// ── main.js ──
import iva, { currency, descuento } from "./helpers.js";
console.log(iva(100));                // 18
console.log(currency(99.9));          // "BsD 99.90"
console.log(descuento(100, 20));      // 80