/*La función Math.random() devuelve un número de coma flotante pseudo-aleatorio, comprendido en el rango de 0 a menor que 1 (es decir, incluido el 0 pero no el 1), con una distribución aproximadamente uniforme en este rango. */

function random(max){
    return Math.floor(Math.random()*max);
}

console.log(ramdon(3));

console.log(ramdon(1));

console.log(ramdon());