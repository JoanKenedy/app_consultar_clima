# React + TypeScript + Vite

𝗔𝗽𝗽 𝗱𝗲𝗹 𝗖𝗹𝗶𝗺𝗮 - 𝗧𝗲𝗰𝗻𝗼𝗹𝗼𝗴𝗶́𝗮𝘀 𝘆 𝗘𝗻𝗳𝗼𝗾𝘂𝗲

Esta es una aplicación que consulta información del clima a través de una API externa. A continuación, se detallan las tecnologías y métodos utilizados en su desarrollo:

𝐓𝐞𝐜𝐧𝐨𝐥𝐨𝐠𝐢́𝐚𝐬
 
React: Librería principal para construir la interfaz de usuario.

TypeScript: Añade tipado estático para mayor robustez y mantenimiento del código.

Axios: Cliente HTTP para realizar peticiones a la API de forma sencilla y eficiente.

Zod / Valibot: Librerías para validar la estructura y tipos de datos que devuelve la API. Esto es importante porque TypeScript no infiere automáticamente el contenido de una respuesta externa.

CSS Modules: Para estilos locales y evitar colisiones entre clases.

𝐌𝐞𝐭𝐨𝐝𝐨𝐥𝐨𝐠𝐢́𝐚𝐬 𝐲 𝐛𝐮𝐞𝐧𝐚𝐬 𝐩𝐫𝐚́𝐜𝐭𝐢𝐜𝐚𝐬

𝐕𝐚𝐥𝐢𝐝𝐚𝐜𝐢𝐨́𝐧 𝐝𝐞 𝐝𝐚𝐭𝐨𝐬:

Se utiliza Zod (o Valibot) para definir esquemas de validación y asegurarnos de que los datos que provienen de la API cumplen con el formato esperado.

Alternativamente, también se puede usar el type casting (as TipoEsperado) para "forzar" el tipo de la respuesta, aunque esto no valida que los datos realmente coincidan.

Type Guards: Se implementan funciones que permiten a TypeScript inferir correctamente el tipo de una variable dentro de un bloque específico. Esto es útil para manejar respuestas de la API de manera segura.

Variables por URL: Se pasan parámetros dinámicos a través de la URL para personalizar las consultas a la API (por ejemplo, ciudad, país, unidad de medida, etc.).

Variables de entorno: Se utilizan para mantener información sensible fuera del código fuente (como claves de API).

𝐌𝐚𝐧𝐞𝐣𝐨 𝐝𝐞 𝐞𝐬𝐭𝐚𝐝𝐨𝐬 𝐲 𝐞𝐫𝐫𝐨𝐫𝐞𝐬:

Las peticiones se manejan de forma asincrónica usando async/await.

Se implementa un bloque try/catch para capturar errores y manejar respuestas fallidas de forma controlada.

𝐅𝐞𝐞𝐝𝐛𝐚𝐜𝐤 𝐯𝐢𝐬𝐮𝐚𝐥 (𝐔𝐗):

Se muestra un spinner de carga mientras se espera la respuesta de la API, brindando una mejor experiencia al usuario.
