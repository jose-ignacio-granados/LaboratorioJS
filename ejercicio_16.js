// ── helpers.js ──
export const currency = (n) => `BsD ${n.toFixed(2)}`;
export default function iva(monto) { return monto * 0.18; }
export const descuento = (monto, pct) => monto * (1 - pct / 100);

// ── main.js ──
import iva, { currency, ________ } from "./helpers.js";
console.log(iva(100));                // 18
console.log(currency(99.9));          // "BsD 99.90"
console.log(descuento(100, 20));      // 80