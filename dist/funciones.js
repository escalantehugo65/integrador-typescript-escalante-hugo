function sumar(a, b) {
    return a + b;
}
console.log("Resultado de sumar:", sumar(4, 6));
function saludar(nombre, apellido) {
    if (apellido !== undefined) {
        return `Hola, ${nombre} ${apellido}`;
    }
    return `Hola, ${nombre}`;
}
console.log(saludar("Hugo"));
console.log(saludar("Hugo", "Escalante"));
function calcularPrecio(precio, cantidad = 1) {
    return precio * cantidad;
}
console.log("Una unidad:", calcularPrecio(1500));
console.log("Tres unidades:", calcularPrecio(1500, 3));
function mostrarMensaje(mensaje) {
    console.log(mensaje);
}
mostrarMensaje("Terminamos los ejemplos de funciones");
export {};
//# sourceMappingURL=funciones.js.map