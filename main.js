/*El método indexOf() devuelve el índice, dentro del objeto String que realiza la llamada, de la primera ocurrencia del valor especificado, comenzando la búsqueda desde indiceDesde; o -1 si no se encuentra dicho valor.*/

cuenta = 0;
posicion = miCadena.indexOf("x");
while ( posicion != -1 ) {
   cuenta++;
   posicion = miCadena.indexOf("x",posicion+1);
}

