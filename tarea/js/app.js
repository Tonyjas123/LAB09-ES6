import estudiantes, { curso } from "./datos.js";
import { reporte } from "./calculos.js";

// Creación de nuevo objeto con spread y arreglo combinado con spread
const nuevoEstudiante = { ...estudiantes[0], nombre: "Ana María" };
const todos = [...estudiantes, nuevoEstudiante];

// Mostrar en la consola
console.log(`Curso: ${curso}`);
todos.forEach((estudiante) => console.log(reporte(estudiante)));

// Mostrar en el HTML
document.querySelector("#curso").textContent = `Curso: ${curso}`;
const lista = document.querySelector("#reportes");

todos.forEach((estudiante) => {
  lista.innerHTML += `<li>${reporte(estudiante)}</li>`;
});
