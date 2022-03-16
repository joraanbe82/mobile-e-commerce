# Introducción a Create React App

Este proyecto fue iniciado con Create React App. [Create React App](https://github.com/facebook/create-react-app).

Web que se conecta a una api pública la cual devuelve un listado de dispositivos móviles.

La barra de navegación es la misma para ambas vistas, a la izquierda se encuentra el logo de la tienda el cual al pulsar si no se estuviese en  la página principal te devolveria a ella, a la derecha se encuentra el icono del carro de la compra donde aparecerán el número de artículos que se han ido agregando.

En la primera pantalla se puede ver el total de artículos del listado, y hacer una búsqueda por marca y por modelo. La primera vez que se accede a la pantalla principal se realiza una llamada a la api para obtener la lista de artículos y se guarda en el session storage del cliente durante una hora, he elegido el session en vez del local storage para que cuando se cierre el navegador cualquier tipo de información almacenada se elimine y no persista.

El breadcrumb de la página principal sirve también como opción de navegación para volver al home si no se encontrase en esa pantalla.

El filtrado de búsqueda se hace en tiempo real usando la información almacenada en redux sin hacer nuevas llamadas a la api para traer los datos.

Pulsando sobre cualquier imagen se accede a la página de detalle donde se encuentran listadas el resto de especificaciones.

En la vista de detalles, el breadcrumb obtiene un valor más indicando que nos encontramos en una nueva vista.

En la parte superior derecha aparece un botón para volver a la pantalla del home siendo la tercera opción disponible para ello.

En la vista de detalles podemos ver el listado de características del modelo seleccionado, para ello se obtiene el id de la ruta de navegación y se hace una llamada a la api cada vez que ese id cambia, si se introduce una id errónea aparecerá el mensaje de error. Al volver a la página principal si se ha introducido una id errónea manualmente a través de la ruta del navegador los valores de redux se pierden, hay un useEffect que detecta de si los valores siguen almacenados en el cliente y los utiliza para volver a guardarlo en redux.

Antes de agregar un artículo al carro se han de seleccionar obligatoriamente el color y el tamaño del almacenamiento interno, para ello el botón estará deshabilitado hasta que se elijan ambos valores.

Al agregar el artículo al carro de la compra, automáticamente se redirecciona hacia la página principal, se muestra un pop-up de confirmación de que se ha agregado correctamente al carro de la compra y se actualiza el valor númerico del item situado en la parte derecha del navbar.

El post utilizado en la api para agregar un artículo al carro, siempre devuelve el valor de 1, no se si eso es así a propósito o está devolviendo mal el resultado al no sumar los artículos y para llevar un control de cuantos artículos se han agregado al carro se ha decidido guardar ese valor en la parte del cliente en el session storage e ir actualizando allí el número.




## Scripts disponibles

En el directorio del proyecto, puedes ejecutar:

### `yarn install`🔧

Ejecuta este comando para hacer la instalación de las dependencias

### `yarn start` 🖥️

Ejecuta la aplicación en el modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador.

La página se recargará si haces ediciones.\
También verás cualquier error de lint en la consola.

### `yarn test`
Ejecuta la aplicación en modo test

### `yarn lint` 🔩

Ejecuta este comando para revisar y observar el código en busca de errores

### `yarn build` 📦

Construye la aplicación para producción en la carpeta `build`.\
Agrupa correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación está minificada y los nombres de los archivos incluyen los hashes.\
Tu aplicación está lista para ser desplegada.

Consulta la sección sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment) para más información.

## Construido con 🛠️

- [React](https://es.reactjs.org/) - El framework web usado
- [Typescript](https://www.typescriptlang.org/) - Super set para tipado fuerte de javascript
- [Yarn](https://yarnpkg.com/) - Manejador de dependencias
- [Material-ui](https://mui.com/) - Biblioteca para el uso de componentes de UI
- [Redux](https://es.redux.js.org/) - Control de estados para acceso global en React
- [Redux Saga](https://redux-saga.js.org/) - Middleware de redux que permite controlar funciones asyncronas
- [Axios](https://github.com/axios/axios) - Cliente HTTP basado en promesas para el navegador
- [Notiflix](https://notiflix.github.io/) - Librería para notificaciones

## Autor ✒️

- **Raúl Andrade** - _Desarrollador front end_ - [randrade](https://www.linkedin.com/in/raul-andrade82/)


## Learn More

Puedes aprender más en  [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, consulta [React documentation](https://reactjs.org/).
