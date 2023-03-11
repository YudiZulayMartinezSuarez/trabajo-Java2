/*La función estática Math.cos() devuelve el coseno del ángulo especificado, que debe ser especificado en radianes. Este valor es*/

function getCircleX(radians, radius) {
    return Math.cos(radians) * radius;
  }
  
  console.log(getCircleX(1, 10));
 
  
  console.log(getCircleX(2, 10));
 
  
  console.log(getCircleX(Math.PI, 10));

