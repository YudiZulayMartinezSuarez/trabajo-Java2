/*El siguiente ejemplo define una función que divide una cadena en un array de cadenas usando el separador especificado. Después de la división de la cadena, la función muestra mensajes indicando la cadena original (antes de la división), el separador usado, el número de elementos del array y los elementos individuales del array.*/

function dividirCadena(cadenaADividir,separador) {
    var arrayDeCadenas = cadenaADividir.split(separador);
    document.write('<p>La cadena original es: "' + cadenaADividir + '"');
    document.write('<br>El separador es: "' + separador + '"');
    document.write("<br>El array tiene " + arrayDeCadenas.length + " elementos: ");
 
    for (var i=0; i < arrayDeCadenas.length; i++) {
       document.write(arrayDeCadenas[i] + " / ");
    }
 }
 
 var cadenaVerso = "Oh brave new world that has such people in it.";
 var cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
 
 var espacio = " ";
 var coma = ",";
 
 dividirCadena(cadenaVerso, espacio);
 dividirCadena(cadenaVerso);
 dividirCadena(cadenaMeses, coma);
