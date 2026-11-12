enum Rol {
    Usuario = "usuario",
    Administrador = "administrador",
}

const rolActual: Rol = Rol.Administrador;

console.log("Rol actual:", rolActual);

if (rolActual === Rol.Administrador) {
    console.log("El usuario tiene permisos de administrador");
}

console.log("Valores del enum:", Rol);

const aplicacion: "Biblioteca" = "Biblioteca";

console.log("Aplicación:", aplicacion);

type EstadoLibro = "disponible" | "prestado" | "reservado";

function mostrarEstado(estado: EstadoLibro): void {
    console.log("Estado del libro:", estado);
}

mostrarEstado("disponible");

mostrarEstado("prestado");

// Rol existe como objeto durante la ejecución.
// EstadoLibro solamente comprueba tipos y se elimina al generar JavaScript.

export {};
