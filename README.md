# Prueba Técnica Armadillo Amarillo
## Yeray Molina García

## Respues a las preguntas del ejercicio 3

- ¿Como implementaria la páginación?
Pues teniendo en cuenta que he utilizado NestJS para la creación del backend utilizaria las herramientas que me brinda el framework para no reinventar la rueda. En primer lugar habilitaria los query params "number" y "page" en el endpoint para permitir introducir al usuario dichos valores en la llamada. Una vez recibidos estos parámetros crearía una método en el servicio que pasando dichos parámetros haga una llamada a la BDD através del servicio repositorio y este me devolvería a su vez un objeto con los items divididos.

- ¿Como filtraría un array de 6 millones de películas eliminando aquellos elementos que el atributo "vote_average" no sea superior a 6?
Pues utilizando JavaScript como lenguaje para tratar dicho problema, utilizaria el método filter de Array pasando como argumento una función que compruebe que el valor es mayor que 6.

## Qué librerías y componentes de terceros has empleado y por qué.

- Frontend:
Para hacer la aplicación frontend he utilizado Angular v13 y una librería llamada angular-carousel que me ha ahorrado crear yo mismo el carousel de imagenes con carga lazy de las imagenes.

- Backend:
Para la construcción del backend he utilizado el framework NestJS que me proporciona todas las herramientas necesarias para construir un backend de manera rápida y sencilla. Además, he utlizado el ORM TypeOrm que facilita mucho la creación de la base de datos para la aplicación, la consulta de datos a esta y el mapeo de las entidades.

## Pasos para desplegar las aplicaciones

- Clonar el repositorio
- Lanzar el siguiente comando ``` npm i ``` en cada una de las carpetas "frontend-movies" y "middleware-moviedb"
- Una vez terminado el apartado anterior, lanzar el comando ``` npm run start ``` dentro de la carpeta "middleware-moviedb" para hacer correr el backend.
- Una vez terminado el apartado anterior, lanzar el comando ``` ng serve ``` dentro de la carpeta "frontend-movies" para hacer correr el backend.
