Proyecto Sprint 1 Módulo 2: Entrenamiento Front-End
Objetivo: Construir una interfaz para mantenerse en contactos con familiares y amigos.
El aplicativo de cumplir con los siguientes requerimientos técnicos:
⦁	Implementar CSS para aplicar estilos y diseño responsive. El uso de ⦁	SASS ⦁	como preprocesador CSS⦁	 duplica el porcentaje del ítem sobre la calificación del proyecto.
⦁	Implementar JSON-server que contenga la siguiente información:
⦁	Usuarios
⦁	Mensajes
Nota: Cada uno de estos ítems debe tener su propio endpoint. Asimismo, el JSON-server debe ser desplegado en un hosting como railway.app.
⦁	Cada objeto usuario debe contener mínimo la siguiente información:
⦁	Id
⦁	Nombre
⦁	Número de celular
⦁	Password
⦁	Url de la imagen de perfil
⦁	Una propiedad “flag” que se modifique cuando el usuario está en línea o desconectado
⦁	Info o frase que identifique al usuario
⦁	Propiedad con la fecha y hora de la última vez que estuvo en línea (opcional).
⦁	Cada objeto mensajes debe tener las siguientes propiedades:
⦁	idUser1: id del usuario que inició la conversación.
⦁	idUser2: id del usuario que recibió el mensaje
⦁	un array de conversaciones donde cada elemento sea un objeto con la siguiente estructura:
⦁	una propiedad llamada sendBy que contenga el id del usuario que envió el mensaje
⦁	una propiedad llamada date con la fecha en que fue enviado el mensaje
⦁	una propiedad llamada hour con la hora en que fue enviado el mensaje
⦁	una propiedad llamada message
⦁	una propiedad “flag” que se modifique cuando el usuario receptor haya visto el mensaje



⦁	El aplicativo debe consistir en tres páginas:
⦁	La primera página es un Sign in o inicio de sesión que debe:
⦁	Contener un form con dos inputs: el primero con el atributo type=”number” para iniciar sesión con el número celular y el segundo input con type=”password”
⦁	Al dar click en el botón Sign in se debe validar los siguiente:
⦁	Si hay campos vacíos debe mostrar una ventana emergente o alert que indique cual es el dato faltante.
⦁	Si el número celular es incorrecto mostrar una ventana emergente o alert que muestre el mensaje “el número ingresado no existe”.
⦁	Si la contraseña es incorrecta mostrar una ventana emergente o alert que muestre el mensaje “la contraseña ingresada es incorrecta”.
⦁	Si el número celular y contraseña ingresada son correctas debe:
⦁	Mostrar una ventana emergente o alert que muestre el mensaje “Bienvenido nombre del usuario”, y
⦁	Redireccionar al usuario a la página home.
⦁	La página home debe tener este diseño:
 Desktop:
Imagen 1. https://raw.githubusercontent.com/uxcristopher/imagenes/main/Readmes/MensajesApp/Desktop.png


⦁	Mobile:
 

Imagen 2. https://raw.githubusercontent.com/uxcristopher/imagenes/main/Readmes/MensajesApp/Mobile.png




⦁	Asimismo, en el home el usuario debe tener la oportunidad de:
⦁	Observar el listado de todas las conversaciones que haya tenido con otros usuarios
⦁	Una vez que inicie sesión, por defecto se debe visualizar en la parte derecha el historial de la última conversación enviada o recibida.
⦁	Realizar búsqueda por nombre de usuario o mensajes enviados o recibidos.
⦁	Al dar click sobre una conversación ver desplegado, en la parte derecha de la página, todo el historial de mensajes enviados y recibidos con ese contacto.
⦁	Al dar click sobre la imagen de perfil debe reemplazar el contenido de la sección izquierda de la página como se muestra en la imagen 3:
⦁	Al dar click en el botón editar debe activarse el input para editar el nombre de perfil
⦁	Este contenedor con la información de perfil también debe incluir un input con atributo type=”url” que permita editar la imagen de perfil.
⦁	Al dar click en el botón back debe devolverlo a la vista principal de la página home
 

Imagen 3.


⦁	En la conversación desplegada en la parte derecha de la página el usuario debe tener la posibilidad de enviar un nuevo mensaje mediante el evento ‘submit’ del form ubicado en la parte inferior de la página. Este form debe contener un input o textarea y el botón de enviar mensaje.
⦁	Cada mensaje enviado por el usuario logueado debe cambiar de color azul al ícono doblecheck cuando el mensaje haya sido visto y tener habilitado un botón que permita realizar las acciones de editar o eliminar mensaje.
⦁	El usuario al dar click sobre el botón de actions o acciones indicadas en el ítem anterior se debe desplegar una caja con las opciones mencionadas:
⦁	Al dar click sobre la opción editar se debe activar o desplegar un input con el mensaje listo para ser modificado.
⦁	Al dar click sobre la opción eliminar debe aparecer un confirm preguntando al usuario si está seguro de eliminar el mensaje, si el usuario da click en aceptar se procede a realizar la petición DELETE.
⦁	Al dar click sobre el botón buscar de la conversación seleccionada (parte derecha), debe aparecer una nueva

sección en la parte derecha de la página como se muestra en la imagen 4 y ser posible la búsqueda por palabra incluida en un mensaje enviado.



⦁	En la página Sign in debe tener un link llamado “Sign up for free” que al dar click sobre él debe permitir al usuario:
⦁	Redireccionarlo a la página Sign up
⦁	La página Sign up debe contener:
⦁	El título Create an account
⦁	Un form con mínimo 4 inputs, una etiqueta <textarea> como campo de entrada para ingresar la frase y un botón type=”submit” llamado Sign up.
⦁	Los inputs debenser:
⦁	Un input Type=”text”para el nombre
⦁	Un input type=”number” para el número de celular
⦁	Un input type=”password”
⦁	Un input type =”url” para ingresar la url de la imagen del usuario.
⦁	Al dar click en el botón Sign up debe:
⦁	Verificar que el número de celular no exista en la lista de usuarios.
⦁	Si existe, debe mostrar un mensaje o alert diciendo que el número de celular ingresado ya está registrado.
⦁	Si no existe, se procede a crear el nuevo usuario mediante la petición POST y por último mostrar una ventana modal o alert que indique que el nuevo usuario fue creado exitosamente.
⦁	Los usuarios que sean creados en el Signup deben ser capaces de loguearse o iniciar sesión en el sign in y continuar el flujo especificado anteriormente.



⦁	En el aplicativo se debe evidenciar el uso de:
⦁	Condicionales
⦁	Peticiones HTTPs con Axios
⦁	Eventos del DOM
⦁	Uso del objeto sessionStorage o localStorage
⦁	Métodos de arrays
⦁	Uso de WebPack y babel
⦁	Uso de Flexbox y Media querys
⦁	Principios de código limpio
⦁	Implementación de JSON server (API)
⦁	Implementación de ⦁	Sweetalert⦁	 para mostrar las alertas.
⦁	Despliegue de la página en GitHub pages
Nota: Todas las páginas deben conservar los mismos estilos, para el manejo de fechas y horas se sugiere uso de la librería luxon. Cualquier funcionalidad adicional implementada, será tenida en cuenta como punto extra sobre la calificación del taller, después de haber completado los requerimientos mínimos.