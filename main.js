/*La función Math.atan() retorna el arcotangente (en radianes) de un number, esto es
*/

function getCircleY(posicion, adjetivo) {
    return Math.atan(posicion / adjetivo);
  }
  
console.log(getCircleY(1, 10));


console.log(getCircleY(2, 10));


console.log(getCircleY(Math.PI, 10));