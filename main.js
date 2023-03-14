/*método que le permite convertir fácilmente una lista de pares clave-valor en un objeto.
acepta un iterable como Arrayo Mapy lo transforma en un Objeto :
devuelve un nuevo objeto cuyas propiedades están especificadas por las entradas del iterable*/

let arr = [['color', 'red'],['borderWidth', '1px']];
let obj = Object.fromEntries(arr);