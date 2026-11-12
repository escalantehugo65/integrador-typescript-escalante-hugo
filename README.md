# Trabajo Práctico Integrador 4: Investigación de TypeScript

Autor: Hugo Escalante.

## Instalación y ejecución

Se necesita Node.js 24 y npm. Desde la carpeta del proyecto:

```powershell
npm install
npm run check
npm run build
npm start
```

`npm run check` verifica los tipos. `npm run build` genera los archivos JavaScript en `dist`. `npm start` ejecuta el primer tema compilado. `npm run dev` ejecuta el primer tema con recarga al guardar.

Cada tema también puede ejecutarse por separado:

```powershell
npx tsx src/01-introduccion.ts
npx tsx src/02-herramientas.ts
npx tsx src/03-tipos.ts
npx tsx src/funciones.ts
npx tsx src/05-interfaces-types.ts
npx tsx src/06-enums-literales.ts
```

Para ejecutar los otros temas compilados, se utiliza `node dist/nombre-del-archivo.js` después de compilar.

Hay un archivo por tema dentro de `src`. El tema 4 conserva el nombre `funciones.ts`. El glosario está en `GLOSARIO.md`. Cada archivo usa `export {};` para mantener sus declaraciones separadas de las de los demás archivos.

## Tema 1: ¿Qué es TypeScript?

**1- ¿Qué es TypeScript y quién lo desarrolla?**

TypeScript es un lenguaje desarrollado por Microsoft que se basa en JavaScript y agrega un sistema de tipos. Permite indicar qué clase de datos puede tener una variable, recibir una función o devolver una operación. Esto ayuda a detectar errores durante el desarrollo, antes de ejecutar el programa.

**2- ¿Qué diferencias tiene con JavaScript?**

JavaScript utiliza tipos dinámicos: una variable puede recibir valores de diferentes tipos durante la ejecución. TypeScript agrega una comprobación estática que permite detectar usos incompatibles, como intentar asignar un texto a una variable definida como numérica.

TypeScript puede obtener el tipo a partir del valor asignado o permitir que lo indiquemos explícitamente. Sus anotaciones de tipos se eliminan al convertir el código a JavaScript; no funcionan como validaciones automáticas durante la ejecución.

**3- ¿Qué ventajas ofrece?**

- Ayuda a detectar errores de tipos antes de ejecutar el programa.
- Mejora el autocompletado y las sugerencias del editor.
- Facilita modificar el código porque permite identificar usos incompatibles.
- Hace más clara la estructura de los datos y las funciones.
- Favorece el mantenimiento de proyectos grandes y el trabajo en equipo.

Estas ventajas no eliminan todos los errores: todavía es necesario probar el programa y validar los datos que recibe.

**4- ¿Cuál es su versión actual?**

Al 11 de noviembre de 2026, la versión estable publicada es TypeScript **7.0.2**. La versión del paquete puede comprobarse con `npm view typescript version`; la instalada se consulta con `npx tsc -v`.

**Fuentes**

Material: Introducción a TypeScript 2026, sección «Introducción».

Documentación oficial de TypeScript.

Versiones del paquete oficial en npm.



## Tema 2: Crear y ejecutar un proyecto



**1- ¿Cómo se instala TypeScript en un proyecto?**

Primero se necesita tener Node.js y npm instalados. Si el proyecto todavía no tiene un archivo `package.json`, se lo inicializa con `npm init -y`.

Después se instala TypeScript dentro del proyecto con `npm install -D typescript`. 

También se utiliza `tsx` para ejecutar archivos TypeScript durante el desarrollo y `@types/node` para que TypeScript reconozca las herramientas de Node.js.

**2- ¿Para qué sirve el archivo tsconfig.json?**

Es el archivo de configuración del proyecto TypeScript. Permite indicar qué archivos se deben analizar, qué reglas de comprobación se aplican y cómo se genera el JavaScript.

Por ejemplo, puede establecer que el código fuente esté en `src`, que el JavaScript generado se guarde en `dist` y que se utilice una comprobación estricta de tipos mediante `strict`.

**3- ¿Qué hace el comando tsc?**

`tsc` es el compilador de TypeScript. Comprueba los tipos del programa y puede generar archivos JavaScript a partir de los archivos TypeScript.

Al ejecutar `npx tsc` desde el proyecto, utiliza la configuración de `tsconfig.json`. Con `npx tsc --noEmit` solamente comprueba los tipos, sin generar archivos.

Si configuramos `noEmitOnError: true`, no genera JavaScript cuando encuentra errores. **El compilador no ejecuta el programa.**

**4- ¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?**

- **`tsc`:** comprueba tipos y genera JavaScript. Después necesitamos ejecutar ese JavaScript con otra herramienta.
- **`tsx`:** transforma y ejecuta archivos TypeScript sin que tengamos que compilarlos previamente en un paso separado. No comprueba los tipos, por lo que conviene acompañarlo con `tsc --noEmit`.
- **`node`:** ejecuta JavaScript. Las versiones recientes también pueden ejecutar ciertos archivos TypeScript eliminando sus anotaciones de tipos, pero no comprueban los tipos ni admiten toda su sintaxis. Por ejemplo, los `enum` no funcionan en el modo que solamente elimina tipos.

**Fuentes**:

Material de la cátedra: Introducción a TypeScript 2026, secciones sobre herramientas, configuración y ejecución.

Instalación oficial de TypeScript.

Documentación de tsconfig.json.

Soporte de TypeScript en Node.js.



## Tema 3: Tipos básicos



**1- ¿Qué son los tipos string, number y boolean?**

Son tipos que permiten indicar qué clase de valor puede contener una variable:

- `string`: representa texto, como `"Hola"`.
- `number`: representa números enteros o decimales, como `20` o `3.5`.
- `boolean`: representa los valores lógicos `true` y `false`, utilizados para expresar condiciones.

Los nombres de estos tipos se escriben en minúscula.

**2- ¿Cómo se declara un array con tipo?**

Se escribe el tipo de sus elementos seguido de corchetes. Por ejemplo:

`let edades: number[] = [18, 20, 25];`

`number[]` indica que es un arreglo cuyos elementos deben ser números. Para un arreglo de textos se utiliza `string[]`.

**3- ¿Qué es un tipo unión?**

Es un tipo que permite valores de distintos tipos definidos, separados mediante el símbolo `|`.

Por ejemplo:

`let identificador: string | number = "ABC123";`

La variable puede recibir un texto o un número, pero no un booleano.

**4- ¿Por qué se recomienda evitar any?**

Porque desactiva la comprobación de tipos sobre ese valor. Esto permite realizar operaciones incorrectas sin que TypeScript avise, lo que puede producir errores al ejecutar el programa.

Por eso conviene definir tipos concretos o uniones. Si no conocemos el tipo de un dato, podemos usar `unknown` y comprobar su tipo antes de utilizarlo.



## Tema 4: Funciones



**1- ¿Cómo se indican los tipos de los parámetros?**

Se escriben dos puntos después del nombre de cada parámetro y luego su tipo. Por ejemplo, `nombre: string` indica que ese parámetro recibe un texto, mientras que `edad: number` indica que recibe un número.

TypeScript comprueba que los argumentos enviados al llamar a la función sean compatibles con esos tipos.

**2- ¿Cómo se indica el tipo de retorno?**

Se escribe después de los paréntesis de los parámetros, utilizando dos puntos y el tipo correspondiente.

Por ejemplo, una función que devuelve una suma puede indicar `: number`. Si no devuelve un resultado, puede utilizar `: void`.

TypeScript también puede deducir el tipo de retorno a partir de lo que devuelve la función.

**3- ¿Qué es un parámetro opcional?**

Es un parámetro que puede omitirse al llamar a una función. Se declara colocando `?` después de su nombre, como en `apellido?: string`.

Si no se proporciona, su valor es `undefined`. Por eso debemos comprobar si tiene un valor antes de utilizarlo como texto. Los parámetros opcionales se colocan después de los obligatorios.

**4- ¿Qué es un parámetro por defecto?**

Es un parámetro que tiene un valor inicial definido con `=`, como en `rol: string = "USER"`.

Ese valor se utiliza cuando el argumento se omite o se pasa como `undefined`. Si se proporciona otro valor válido, la función utiliza el recibido.



## Tema 5: Interfaces y type



**1- ¿Qué es una interfaz y para qué sirve?**

Una interfaz describe la estructura que debe tener un objeto: qué propiedades contiene y qué tipo corresponde a cada una.

Se declara con la palabra `interface`. Por ejemplo, una interfaz `Usuario` puede indicar que todo usuario debe tener un `nombre` de tipo `string` y una `edad` de tipo `number`.

TypeScript utiliza esa definición para comprobar que los objetos cumplan la estructura esperada.

**2- ¿Qué es un type?**

Un `type` permite darle un nombre a un tipo mediante un alias. Puede representar la estructura de un objeto, un tipo básico, una unión o una combinación de tipos.

Por ejemplo, `type ID = string | number` define un tipo llamado `ID` que admite textos o números. Podemos reutilizar ese nombre al declarar variables, propiedades o parámetros.

**3- ¿Cómo se declara una propiedad opcional?**

Se coloca el signo `?` después del nombre de la propiedad, como en `edad?: number`.

Esto significa que el objeto puede tener esa propiedad o no incluirla. Si está presente, debe respetar el tipo indicado. Antes de utilizarla, puede ser necesario comprobar que no sea `undefined`.

Esta sintaxis puede utilizarse tanto en una interfaz como en un objeto definido mediante `type`.

**4- ¿Cuándo conviene usar cada uno?**

Conviene utilizar `interface` para describir estructuras de objetos, especialmente cuando queremos ampliarlas mediante `extends`.

Conviene utilizar `type` para definir uniones, tipos literales, alias de tipos básicos o intersecciones mediante `&`.

Ambos pueden describir objetos y sus propiedades. La elección depende de lo que necesitemos representar; ninguno convierte automáticamente los datos ni los valida durante la ejecución.



## Tema 6: Enums y tipos literales



**1- ¿Qué es un enum?**

Un `enum` permite definir un conjunto de constantes con nombres. Se declara con la palabra `enum` y agrupa valores relacionados, como los estados de una tarea: pendiente, completada o cancelada.

Sus miembros pueden tener valores numéricos o de texto. Un enum común genera código JavaScript y puede utilizarse durante la ejecución del programa.

**2- ¿Qué es un tipo literal?**

Es un tipo que representa un valor específico, en lugar de admitir cualquier valor de un tipo general.

Por ejemplo, el tipo literal `"pendiente"` solamente permite ese texto. Podemos combinar varios mediante una unión:

`type Estado = "pendiente" | "completada" | "cancelada";`

Una variable de tipo `Estado` solo admite uno de esos tres valores.

**3- ¿En qué se parecen y en qué se diferencian?**

Ambos permiten representar opciones definidas y ayudan a detectar valores incorrectos durante la comprobación de tipos.

La diferencia principal es que un enum común genera un objeto JavaScript que existe durante la ejecución. En cambio, una unión de tipos literales solo sirve para comprobar el código: su definición se elimina al generar JavaScript.

Por eso, un enum se utiliza mediante sus miembros con nombre, mientras que una unión literal permite utilizar directamente los valores admitidos.

**4- ¿En qué situaciones se puede usar cada uno?**

Un enum puede utilizarse cuando necesitamos agrupar constantes con nombres y acceder a ellas durante la ejecución, como los estados de una tarea.

Los tipos literales resultan útiles para restringir valores concretos, como roles de usuario, estados o métodos HTTP, sin generar un objeto adicional en JavaScript.

En ambos casos, los datos externos deben validarse durante la ejecución: los tipos por sí solos no comprueban lo recibido desde una API o un formulario.


## Fuentes consultadas

- Material de la cátedra: Introducción a TypeScript 2026.
- Tema 1: [Introducción oficial a TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html).
- Tema 1: [Versiones del paquete TypeScript en npm](https://www.npmjs.com/package/typescript?activeTab=versions).
- Tema 2: [Instalación de TypeScript](https://www.typescriptlang.org/download/).
- Tema 2: [Configuración tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).
- Tema 2: [Ejecución con tsx](https://tsx.is/).
- Tema 2: [TypeScript en Node.js](https://nodejs.org/api/typescript.html).
- Temas 3 y 5: [Tipos cotidianos, interfaces y alias](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html).
- Tema 4: [Funciones](https://www.typescriptlang.org/docs/handbook/2/functions.html).
- Tema 6: [Enums](https://www.typescriptlang.org/docs/handbook/enums.html).
- Tema 6: [Tipos literales](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types).
