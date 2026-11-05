## Tema 1: ¿Qué es TypeScript?

1-**¿Qué es TypeScript y quién lo desarrolla?**

TypeScript es un lenguaje desarrollado por Microsoft que se basa en JavaScript y agrega un sistema de tipos. Permite indicar qué clase de datos puede tener una variable, recibir una función o devolver una operación. Esto ayuda a detectar errores durante el desarrollo, antes de ejecutar el programa.

2-**¿Qué diferencias tiene con JavaScript?**

JavaScript utiliza tipos dinámicos: una variable puede recibir valores de diferentes tipos durante la ejecución. TypeScript agrega una comprobación estática que permite detectar usos incompatibles, como intentar asignar un texto a una variable definida como numérica.

TypeScript puede obtener el tipo a partir del valor asignado o permitir que lo indiquemos explícitamente. Sus anotaciones de tipos se eliminan al convertir el código a JavaScript; no funcionan como validaciones automáticas durante la ejecución.

3-**¿Qué ventajas ofrece?**

- Ayuda a detectar errores de tipos antes de ejecutar el programa.
- Mejora el autocompletado y las sugerencias del editor.
- Facilita modificar el código porque permite identificar usos incompatibles.
- Hace más clara la estructura de los datos y las funciones.
- Favorece el mantenimiento de proyectos grandes y el trabajo en equipo.

Estas ventajas no eliminan todos los errores: todavía es necesario probar el programa y validar los datos que recibe.

4-**¿Cuál es su versión actual?**

Al 5 de noviembre de 2026, la versión estable publicada es TypeScript **7.0.2**. También existe una versión **7.1 beta**, pero es una versión de prueba y no debe confundirse con la estable.

**Fuentes consultadas**

Material: Introducción a TypeScript 2026, sección «Introducción».

Documentación oficial de TypeScript.

Versiones del paquete oficial en npm.


## Tema 2: Crear y ejecutar un proyecto


**¿Cómo se instala TypeScript en un proyecto?**

Primero se necesita tener Node.js y npm instalados. Si el proyecto todavía no tiene un archivo `package.json`, se lo inicializa con `npm init -y`.

Después se instala TypeScript dentro del proyecto con `npm install -D typescript`. 

También se utiliza `tsx` para ejecutar archivos TypeScript durante el desarrollo y `@types/node` para que TypeScript reconozca las herramientas de Node.js.

**¿Para qué sirve el archivo tsconfig.json?**

Es el archivo de configuración del proyecto TypeScript. Permite indicar qué archivos se deben analizar, qué reglas de comprobación se aplican y cómo se genera el JavaScript.

Por ejemplo, puede establecer que el código fuente esté en `src`, que el JavaScript generado se guarde en `dist` y que se utilice una comprobación estricta de tipos mediante `strict`.

**¿Qué hace el comando tsc?**

`tsc` es el compilador de TypeScript. Comprueba los tipos del programa y puede generar archivos JavaScript a partir de los archivos TypeScript.

Al ejecutar `npx tsc` desde el proyecto, utiliza la configuración de `tsconfig.json`. Con `npx tsc --noEmit` solamente comprueba los tipos, sin generar archivos.

Si configuramos `noEmitOnError: true`, no genera JavaScript cuando encuentra errores. **El compilador no ejecuta el programa.**

**¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?**

- **`tsc`:** comprueba tipos y genera JavaScript. Después necesitamos ejecutar ese JavaScript con otra herramienta.
- **`tsx`:** transforma y ejecuta archivos TypeScript sin que tengamos que compilarlos previamente en un paso separado. No comprueba los tipos, por lo que conviene acompañarlo con `tsc --noEmit`.
- **`node`:** ejecuta JavaScript. Las versiones recientes también pueden ejecutar ciertos archivos TypeScript eliminando sus anotaciones de tipos, pero no comprueban los tipos ni admiten toda su sintaxis. Por ejemplo, los `enum` no funcionan en el modo que solamente elimina tipos.

**Fuentes consultadas**:

Material de la cátedra: Introducción a TypeScript 2026, secciones sobre herramientas, configuración y ejecución.

Instalación oficial de TypeScript.

Documentación de tsconfig.json.

Soporte de TypeScript en Node.js.
