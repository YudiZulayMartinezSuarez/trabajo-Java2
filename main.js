/* charCodeAt devuelve NaN si el indice proporcionado no está entre 0 y 1 menos de la longitud de la cadena.
El siguiente ejemplo devuelve 65, el valor Unicode para A.*/



function myFunction() {
    let str = "Hola Mundo";
    let n = str.charCodeAt(0);
    document.getElementById("demo").innerHTML = n;

}