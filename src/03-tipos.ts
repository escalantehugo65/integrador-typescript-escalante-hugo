const nombre: string = "Hugo";

const edad: number = 20;

const estudiante: boolean = true;

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Es estudiante:", estudiante);

const materias: string[] = ["Programación", "Base de datos"];

materias.push("Inglés");

console.log("Materias:", materias);

let identificador: string | number = 10;

console.log("Identificador numérico:", identificador);

identificador = "USR-10";

console.log("Identificador de texto:", identificador);

// any permite cambiar el tipo, pero desactiva la comprobación sobre este valor.
let datoSinControl: any = "Hola";

datoSinControl = 25;

console.log("Valor con any:", datoSinControl);

// unknown obliga a comprobar el tipo antes de utilizarlo como texto.
const datoDesconocido: unknown = "TypeScript";

if (typeof datoDesconocido === "string") {
    console.log("Texto en mayúsculas:", datoDesconocido.toUpperCase());
}

export {};
