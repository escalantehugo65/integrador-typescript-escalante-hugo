const usuario = {
    id: 1,
    nombre: "Hugo",
    email: "hugo@example.com",
};
console.log("Usuario sin teléfono:", usuario);
usuario.telefono = "3704000000";
console.log("Usuario con teléfono:", usuario);
const tarea = {
    id: 1,
    titulo: "Estudiar TypeScript",
    estado: "pendiente",
};
console.log("Tarea inicial:", tarea);
tarea.estado = "completada";
console.log("Tarea actualizada:", tarea);
const administrador = {
    id: 2,
    nombre: "Ana",
    email: "ana@example.com",
    permisos: ["crear", "editar", "eliminar"],
};
console.log("Administrador:", administrador);
export {};
//# sourceMappingURL=05-interfaces-types.js.map