/*El método replace() devuelve una nueva cadena con algunas o todas las coincidencias de un patrón, siendo cada una de estas coincidencias reemplazadas por remplazo. El patrón puede ser una cadena o una RegExp, y el reemplazo puede ser una cadena o una función que será llamada para cada coincidencia. Si el patrón es una cadena, sólo la primera coincidencia será reemplazada.*/

const p = 'el perro salta sobre la serpiente perezosa. si la serpiente reacciona,¿es realmente perezosa?';
console.log(p.replace('gato', 'girafa'));