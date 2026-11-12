const nombre = "Hugo";
const edad = 20;
const estudiante = true;
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Es estudiante:", estudiante);
const materias = ["Programación", "Base de datos"];
materias.push("Inglés");
console.log("Materias:", materias);
let identificador = 10;
console.log("Identificador numérico:", identificador);
identificador = "USR-10";
console.log("Identificador de texto:", identificador);
// any permite cambiar el tipo, pero desactiva la comprobación sobre este valor.
let datoSinControl = "Hola";
datoSinControl = 25;
console.log("Valor con any:", datoSinControl);
// unknown obliga a comprobar el tipo antes de utilizarlo como texto.
const datoDesconocido = "TypeScript";
if (typeof datoDesconocido === "string") {
    console.log("Texto en mayúsculas:", datoDesconocido.toUpperCase());
}
export {};
//# sourceMappingURL=03-tipos.js.map