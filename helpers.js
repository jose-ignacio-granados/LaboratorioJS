export const currency = (n) => `BsD ${n.toFixed(2)}`;
export default function iva(monto) { return monto * 0.18; }
export const descuento = (monto, pct) => monto * (1 - pct / 100);
