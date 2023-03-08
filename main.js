/*El método localeCompare() retorna un número indicando si una cadena de carateres de referencia va antes, después o si es la misma que la cadena dada en orden alfabético.*/

function localeCompareLocales() {
    try {
      'foo'.localeCompare('bar', 'i');
    } catch (e) {
      return e.name === 'RangeError';
    }
    return false;
  }