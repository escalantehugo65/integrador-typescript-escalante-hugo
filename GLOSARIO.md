# Glosario de TypeScript

## 1- TypeScript

Lenguaje basado en JavaScript que agrega comprobación estática de tipos.


## 2- Anotación de tipo

Indicación explícita del tipo de una variable, parámetro o retorno.

```ts
const edad: number = 20;
```

## 3- Inferencia

Deducción del tipo a partir del valor asignado.

```ts
const ciudad = "Formosa";
```

## 4- string

Tipo que representa cadenas de texto.

```ts
const saludo: string = "Hola";
```

## 5- number

Tipo que representa números enteros o decimales.

```ts
const precio: number = 1500.50;
```

## 6- boolean

Tipo con los valores true y false.

```ts
const activo: boolean = true;
```

## 7- Array tipado

Arreglo cuyos elementos deben respetar un tipo.

```ts
const edades: number[] = [18, 20, 25];
```

## 8- Unión

Tipo que admite cualquiera de las alternativas indicadas con |.

```ts
let id: string | number = "USR-1";
```

## 9- any

Tipo que desactiva la comprobación de tipos sobre un valor.

```ts
let dato: any = "Hola";
dato = 25;
```

## 10- unknown

Tipo que obliga a comprobar el valor antes de realizar operaciones específicas.

```ts
const dato: unknown = "Hola";

if (typeof dato === "string") {
    console.log(dato.toUpperCase());
}
```

## 11- Parámetro opcional

Parámetro que puede omitirse y cuyo valor será undefined.

```ts
function saludar(nombre: string, apellido?: string): string {
    return apellido !== undefined ? `${nombre} ${apellido}` : nombre;
}
```

## 12- Parámetro por defecto

Parámetro con un valor utilizado cuando el argumento se omite o es undefined.

```ts
function multiplicar(precio: number, cantidad: number = 1): number {
    return precio * cantidad;
}
```

## 13- Tipo de retorno

Tipo del resultado que devuelve una función.

```ts
function sumar(a: number, b: number): number {
    return a + b;
}
```

## 14- void

Tipo utilizado cuando no se espera un resultado útil de una función.

```ts
function mostrar(): void {
    console.log("Hola");
}
```

## 15- Interfaz

Definición de la estructura que debe cumplir un objeto.

```ts
interface Usuario {
    nombre: string;
    telefono?: string;
}
```

## 16- Alias de tipo

Nombre reutilizable definido mediante type para representar un tipo.

```ts
type ID = string | number;
```

## 17- Propiedad opcional

Propiedad que puede omitirse al construir un objeto.

```ts
type Usuario = {
    nombre: string;
    edad?: number;
};
```

## 18- Enum

Conjunto de constantes con nombres que un enum común conserva en ejecución.

```ts
enum Rol {
    Usuario = "usuario",
    Administrador = "administrador",
}
```

## 19- Tipo literal

Tipo que solo admite un valor concreto o una unión de valores concretos.

```ts
type Estado = "pendiente" | "completada";
```
