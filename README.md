# Cotizador de Inmuebles

Proyecto Final de la diplomatura de desarrollo FrontEnd de UNTREF

- Alumno: Emiliano Núñez

## Herramientas utilizadas:
- ***React***
- ***Vite***
- ***GitHubPages***

### Apis utilizadas
- ***Sonner*** - notificaciones toast
- ***React Router Dom*** - routing
- ***Google Fonts / icons*** - iconos y fuentes
---

## Manual de usuario:

#### Rutas
- ***"/"*** : Es la ruta principal. Dirige hacia el Login de la página. Pedirá usuario, edad y contraseña para acceder al sistema.
- ***"/home"*** : Aquí se encuentra la herramienta de cotización, pide parámetros que se deben rellenar para realizar la cotización, pudiendo guardarla en una lista guardada en la ruta ***"/history"***.
- ***"/history"*** : Se guarda una lista de todas las cotizaciones guardadas. Podremos eliminar la lista si lo necesitamos o deshacer el cambio dentro de un tiempo limitado.

## Login 

En esta sección de la página se encuentra un formulario de ingreso que pide un nombre de usuario, una edad y una contraseña (definida como *"admin"* por defecto para facilitar el desarrollo) 

Contiene validación de caracteres y de igualdad con la contraseña definida. A su vez te indica si los valores que ingresaste son correctos o no a través de ***Sonner***.

Cada vez que se recarga la página se cierra la sesión, por lo cual no se puede acceder a ninguna página sin ingresar un usuario.

## Home

Home contiene la aplicación que cotiza los valores de las propiedades según los parámetros que uno elija. Hay distintos inputs para modificar y conseguir llenar los campos para hacer el cálculo correspondiente.

Contiene validaciones y manejo de errores para evitar acciones inesperadas al tratar de cotizar o guardar datos que no fueron correctamente calculados.

Se pueden calcular y se muestra el resultado de la cotización en pantalla. A su vez está la opción de guardar los datos con tu nombre de usuario, para identificar quién realizo cada cotización.

## History

Aquí se guardará la lista de cotizaciónes hechas. mostrando cada parámetro correspondiente al usuario y cotización realizada.

En caso de quererlo, se puede eliminar la lista. vaciándola por completo, y pudiendo deshacer la acción en determinado tiempo.

---

# Descripción del proyecto

La aplicación cuenta con manejo de errores tanto dentro de componentes como en forma de notificaciones. Está envuelta dentro de un contexto global llamado **"UserContext"** que contiene la validación del inicio de sesión y el historial del usuario a través de los *hooks* **"Context"** y **"State"**.

Consta de la *API* **"Toaster"**, el manejador de las notificaciones. También de un main que renderiza cada una de las rutas, y un footer con información de la "empresa" y contacto en sus redes sociales.

La barra de navegación se muestra al ingresar correctamente los datos de inicio de sesión, la cuál permite ir al inicio en la ruta principal, mostrando la información de la "empresa". también muestra la ruta **"/Home"** como el "cotizador de propiedades". Este mismo validalos datos a través de manejadores que muestran ayudas al usuario si ingresa mal los datos o le falta alguno por completar.
Utiliza *Promesas* para simular un retraso de cálculo, consulta y registro a una "base de datos" que sería en realidad un *Array* de objetos que se guarda a través del *LocalStorage* del navegador.

La sección del historial recupera los datos recopilados y verificados en **"/Home"** dentro del *LocalStorage* y muestra una *Lista desordenada* con diferentes *"li"* que se muestran cómo *cards* individuales para cada objeto guardado (cada cotización guardada). Con la posibilidad de eliminarlos del *LocalStorage* .

Puede adaptarse a distintos tipos de pantalla manteniendo la funcionalidad.

---

## Pasos para correr la aplicación:

### - Si estás en la web :
- - sólo debes ingresar un usuario y edad válida con la contraseña "admin" seguido ingresarás y podrás cotizar y guardar los datos.
(IMPORTANTE RECORDAR: Al recargar la página la sesión se anula y hay que volver a ingresar)

### - Si se descarga el proyecto:
- - En la carpeta raíz comprobar que estén instaladas todas las dependencias haciendo un:
**$ npm install**
- - Si no ocurrieron errores hay que iniciar la aplicación con: **$ npm run dev**