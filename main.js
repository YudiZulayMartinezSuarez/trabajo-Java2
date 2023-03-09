/*Los operadores lógicos se utilizan normalmente con valores booleanos (lógicos); cuando lo son, devuelven un valor booleano. Sin embargo, los operadores && y || en realidad devuelven el valor de uno de los operandos especificados, por lo que si estos operadores se utilizan con valores no booleanos, pueden devolver un valor no booleano*/

comparacion = (diaHoy > diaAyer) || (diaHoy == diaAyer);
	document.write("Resultado: " + comparacion + "<br>");