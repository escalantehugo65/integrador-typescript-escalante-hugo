var Rol;
(function (Rol) {
    Rol["Usuario"] = "usuario";
    Rol["Administrador"] = "administrador";
})(Rol || (Rol = {}));
const rolActual = Rol.Administrador;
console.log("Rol actual:", rolActual);
if (rolActual === Rol.Administrador) {
    console.log("El usuario tiene permisos de administrador");
}
console.log("Valores del enum:", Rol);
const aplicacion = "Biblioteca";
console.log("Aplicación:", aplicacion);
function mostrarEstado(estado) {
    console.log("Estado del libro:", estado);
}
mostrarEstado("disponible");
mostrarEstado("prestado");
export {};
//# sourceMappingURL=06-enums-literales.js.map