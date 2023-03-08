/*matchAll internamente hace un clon de la expresión regular, entonces a diferencia de regexp.exec, lastIndex no cambia a medida que la cadena es escaneada.*/

const regexp = RegExp('[a-c]','g');
regexp.lastIndex = 1;
const cadena = 'abc';
Array.from(cadena.matchAll(regexp), m => `${regexp.lastIndex} ${m[0]}`);