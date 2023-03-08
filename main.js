/*El método estatico String.raw() es una función de plantilla de literales (en-US), similar al prefijo r en Python o al prefijo @ en C# para strings literales (con ciertas diferencias: ver la explicación en este problema). Se utiliza para obtener un string crudo a partir de plantillas de string (es decir, el original, texto no interpretado).*/

let name = 'lay';
String.raw`Hi\n${name}!`;