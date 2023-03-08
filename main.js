/*Un entero entre 0 y +∞: [0, +∞), indicando el número de veces a repetir la cadena en la nueva cadenada creada que será devuelta.*/
if (!String.prototype.repeat) {
    String.prototype.repeat = function(count) {
      'use strict';
      if (this == null) {
        throw new TypeError('can\'t convert ' + this + ' to object');
      }
      let str = '' + this;
      count = +count;
      if (count != count) {
        count = 0;
      }
      if (count < 0) {
        throw new RangeError('el recuento de repeticiones no debe ser negtivo');
      }
      if (count == Infinity) {
        throw new RangeError('el recuento de repeticiones debe ser menor que nfinito');
      }
      count = Math.floor(count);
      if (str.length == 0 || count == 0) {
        return '';
      }
     
      if (str.length * count >= 1 << 28) {
        throw new RangeError('el recuento de repeticiones no debe desbordar el tamaño maximo de cadena')
      }
      let rpt = '';
      for (;;) {
        if ((count & 1) == 1) {
          rpt += str;
        }
        count >>>= 1;
        if (count == 0) {
          break;
        }
        str += str;
      }
      return rpt;
    }
  }