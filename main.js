/*indiceA
Un entero entre 0 y la longitud de la cadena menos 1.

indiceB
(opcional) Un entero entre 0 y la longitud de la cadena.

Descripción*/


function reemplazarCadena(cadenaVieja, cadenaNueva, cadenaCompleta) {
    
    
       for (var i = 0; i < cadenaCompleta.length; i++) {
          if (cadenaCompleta.substring(i, i + cadenaVieja.length) == cadenaVieja) {
             cadenaCompleta= cadenaCompleta.substring(0, i) + cadenaNueva + cadenaCompleta.substring(i + cadenaVieja.length, cadenaCompleta.length);
          }
       }
       return cadenaCompleta;
    }
    
    reemplazarCadena("Mundo", "pagina", "zulay martinez");