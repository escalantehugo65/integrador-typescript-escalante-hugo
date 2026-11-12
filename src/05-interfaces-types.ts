interface Usuario {
    id: number;
    nombre: string;
    email: string;
    telefono?: string;
}

const usuario: Usuario = {
    id: 1,
    nombre: "Hugo",
    email: "hugo@example.com",
};

console.log("Usuario sin teléfono:", usuario);

usuario.telefono = "3704000000";

console.log("Usuario con teléfono:", usuario);

type Estado = "pendiente" | "completada";

type Tarea = {
    id: number;
    titulo: string;
    estado: Estado;
};

const tarea: Tarea = {
    id: 1,
    titulo: "Estudiar TypeScript",
    estado: "pendiente",
};

console.log("Tarea inicial:", tarea);

tarea.estado = "completada";

console.log("Tarea actualizada:", tarea);

interface Administrador extends Usuario {
    permisos: string[];
}

const administrador: Administrador = {
    id: 2,
    nombre: "Ana",
    email: "ana@example.com",
    permisos: ["crear", "editar", "eliminar"],
};

console.log("Administrador:", administrador);

export {};
