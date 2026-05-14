// 13
const calificaciones = [85, 92, 78, 95];
const todosAprobados = calificaciones.every(n => n >= 70);  // true
const algunSobresaliente = calificaciones.some(n => n >= 90); // true
console.log(todosAprobados, algunSobresaliente);