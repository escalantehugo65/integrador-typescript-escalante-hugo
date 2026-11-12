function sumar(a: number, b: number): number {
    return a + b;
}

console.log("Resultado de sumar:", sumar(4, 6));

function saludar(nombre: string, apellido?: string): string {
    if (apellido !== undefined) {
        return `Hola, ${nombre} ${apellido}`;
    }

    return `Hola, ${nombre}`;
}

console.log(saludar("Hugo"));

console.log(saludar("Hugo", "Escalante"));

function calcularPrecio(precio: number, cantidad: number = 1): number {
    return precio * cantidad;
}

console.log("Una unidad:", calcularPrecio(1500));

console.log("Tres unidades:", calcularPrecio(1500, 3));

function mostrarMensaje(mensaje: string): void {
    console.log(mensaje);
}

mostrarMensaje("Terminamos los ejemplos de funciones");

export {};
